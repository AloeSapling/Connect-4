import WebSocket, { WebSocketServer } from 'ws';
import * as gameRedis from '../../database-redis/game.ts';
import {
    CodedError,
    type TPlayerIDs,
    type Room,
    type UserRequest,
    P_CodedError,
    P_ErrorCodes,
    type WsArgs,
    P_PlayerIDs,
    P_ChangeTokenActions,
} from '../../lib/types.ts';
import { getPartialUserDataByPlayerID, getPlayerID } from '../../database-sqllite/lobbyMembers.ts';
import { broadcastToRoom } from '../../lib/lib.ts';
import { ws as p_ws } from '../../lib/proto.js';
import { boardDataToProtobufBoard, checkGameState, coordinatesToProtoTiles, getNextPlayer } from '../../lib/game/lib.ts';
import Token from '../../lib/game/tokens/base.ts';

type GameWebSocket = WebSocket & { lobbyCode?: string; playerID?: TPlayerIDs };

const rooms: Record<string, Room> = {};

/** Proto encode wrapper to ensure the sent packages match the schema */
const wsEncode = (packet: p_ws.IGameResponsePacket) => p_ws.GameResponsePacket.encode(packet).finish();

export function setupGameWSServer(WSServer: WebSocketServer) {
    WSServer.on('connection', async (ws: GameWebSocket, { req, lobbyCode }: WsArgs) => {
        console.log('New connection: ', req.socket.remoteAddress);

        ws.on('close', () => {
            // Remove the disconnected player from the room
            if (lobbyCode && rooms[lobbyCode]) rooms[lobbyCode] = (rooms[lobbyCode] as Room).filter((elem) => elem !== ws);

            console.log('connection closed');
        });

        // Validate the websocket connection
        if (!lobbyCode) {
            ws.send(
                wsEncode({
                    response: p_ws.GameResponses.GAME_RESPONSES_ERROR,
                    error: P_CodedError.create({
                        code: P_ErrorCodes.ERROR_CODES_BAD_SETUP,
                    }),
                })
            );
            return;
        }

        const reqUser = (req as UserRequest).user;

        if (!reqUser) {
            ws.send(
                wsEncode({
                    response: p_ws.GameResponses.GAME_RESPONSES_ERROR,
                    error: P_CodedError.create({
                        code: P_ErrorCodes.ERROR_CODES_BAD_SETUP,
                    }),
                })
            );
            return;
        }

        // Setup the data used by the websocket
        try {
            const pID = await getPlayerID(lobbyCode, reqUser.id);

            if (pID === null) {
                ws.send(
                    wsEncode({
                        response: p_ws.GameResponses.GAME_RESPONSES_ERROR,
                        error: P_CodedError.create({
                            code: P_ErrorCodes.ERROR_CODES_NOT_A_MEMBER,
                        }),
                    })
                );
                return;
            }

            ws['playerID'] = pID;

            // Add players from the same game to the same room
            if (rooms[lobbyCode]) rooms[lobbyCode] = [...(rooms[lobbyCode] as Room), ws];
            else rooms[lobbyCode] = [ws];
        } catch {
            ws.send(
                wsEncode({
                    response: p_ws.GameResponses.GAME_RESPONSES_ERROR,
                    error: P_CodedError.create({
                        code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                    }),
                })
            );
            return;
        }

        const wsPlayerID = ws['playerID'];

        ws.send(
            wsEncode({
                response: p_ws.GameResponses.GAME_RESPONSES_INIT,
                init: {
                    playerId: wsPlayerID,
                },
            })
        );

        // Handle incomming messages / packets
        ws.on('message', async (data) => {
            if (!rooms[lobbyCode]) return;

            const packet = p_ws.GamePacket.decode(new Uint8Array(data as Buffer));
            console.log(packet.toJSON());

            switch (packet.action) {
                case p_ws.GameActions.GAME_ACTIONS_INSERT_TOKEN: {
                    // Validation
                    if (
                        !packet.insertToken ||
                        packet.insertToken.column === null ||
                        packet.insertToken.column === undefined ||
                        packet.insertToken.tokenType === null ||
                        packet.insertToken.tokenType === undefined
                    ) {
                        ws.send(
                            wsEncode({
                                response: p_ws.GameResponses.GAME_RESPONSES_ERROR,
                                error: P_CodedError.create({
                                    code: P_ErrorCodes.ERROR_CODES_BAD_DATA,
                                }),
                            })
                        );
                        break;
                    }

                    try {
                        // Get data from the packet
                        const column = packet.insertToken.column;
                        const tokenType = packet.insertToken.tokenType;

                        const row = await gameRedis.insertToken(lobbyCode, column, wsPlayerID, tokenType);

                        const gameData = await gameRedis.getGameData(lobbyCode);

                        // Format the game's board to be sent to the client
                        const protoBoard = boardDataToProtobufBoard(gameData.board);

                        const fallingTokens = gameData.board.fallingTokens;
                        const deletedTiles = gameData.board.deletedTiles;

                        // Get the tokens that caused a change that requires frontend attention and convert them to the appropriate format
                        const tmpCoords = gameData.board.changeTilesList.map((val) => val.tileCoord);
                        const tmpTiles = coordinatesToProtoTiles(gameData.board, tmpCoords);

                        const protoChangeTiles = tmpTiles.map((val, idx) => ({
                            action: gameData.board.changeTilesList[idx]?.action || P_ChangeTokenActions.CHANGE_TOKEN_ACTIONS_UNSPECIFIED,
                            tile: val,
                        }));

                        gameData.board.resetChangeTilesList();
                        gameData.board.deletedTiles = [];
                        gameData.board.resetFallingTokens();

                        // Check for wins and draws
                        const gameState = checkGameState(gameData.board);

                        const currentTokens = gameData.tokenQueue?.tokens
                            ? {
                                  player1: gameData.tokenQueue.tokens[P_PlayerIDs.PLAYER_IDS_PLAYER1] ?? null,
                                  player2: gameData.tokenQueue.tokens[P_PlayerIDs.PLAYER_IDS_PLAYER2] ?? null,
                              }
                            : null;

                        const decks = gameData.tokenQueue?.decks
                            ? {
                                  player1: gameData.tokenQueue.decks[P_PlayerIDs.PLAYER_IDS_PLAYER1] ?? [],
                                  player2: gameData.tokenQueue.decks[P_PlayerIDs.PLAYER_IDS_PLAYER2] ?? [],
                              }
                            : null;

                        // Handle a win
                        if (gameState.state === 'WIN' && gameState.winner) {
                            await gameRedis.endGame(lobbyCode);

                            const winnerData = await getPartialUserDataByPlayerID(lobbyCode, gameState.winner);
                            const loserData = await getPartialUserDataByPlayerID(lobbyCode, getNextPlayer(gameState.winner));

                            broadcastToRoom(
                                rooms[lobbyCode],
                                wsEncode({
                                    response: p_ws.GameResponses.GAME_RESPONSES_END,
                                    end: {
                                        endType: p_ws.GameEndTypes.GAME_END_TYPES_STANDARD_WIN,
                                        tile: {
                                            row: row,
                                            column: column,
                                            token: {
                                                playerId: wsPlayerID,
                                                tokenType: tokenType,
                                            },
                                        },
                                        winner: winnerData,
                                        loser: loserData,
                                        board: protoBoard,
                                        changeTiles: protoChangeTiles,
                                        currentTokens: currentTokens,
                                        decks: decks,
                                        fallingTokens: fallingTokens,
                                        deletedTiles: deletedTiles,
                                        frozenColumns: gameData.board.frozenColumns,
                                    },
                                })
                            );

                            break;
                        }

                        // Check for draws
                        if (gameState.state === 'DRAW') {
                            await gameRedis.endGame(lobbyCode);

                            broadcastToRoom(
                                rooms[lobbyCode],
                                wsEncode({
                                    response: p_ws.GameResponses.GAME_RESPONSES_END,
                                    end: {
                                        endType: p_ws.GameEndTypes.GAME_END_TYPES_DRAW,
                                        tile: {
                                            row: row,
                                            column: column,
                                            token: {
                                                playerId: wsPlayerID,
                                                tokenType: tokenType,
                                            },
                                        },
                                        board: protoBoard,
                                        changeTiles: protoChangeTiles,
                                        currentTokens: currentTokens,
                                        decks: decks,
                                        fallingTokens: fallingTokens,
                                        deletedTiles: deletedTiles,
                                        frozenColumns: gameData.board.frozenColumns,
                                    },
                                })
                            );
                            break;
                        }

                        await gameRedis.saveGameData(lobbyCode, gameData.board, gameData.turn, gameData.tokenQueue ?? undefined);

                        broadcastToRoom(
                            rooms[lobbyCode],
                            wsEncode({
                                response: p_ws.GameResponses.GAME_RESPONSES_MOVE,
                                move: {
                                    tile: {
                                        row: row,
                                        column: column,
                                        token: {
                                            playerId: wsPlayerID,
                                            tokenType: tokenType,
                                        },
                                    },
                                    board: protoBoard,
                                    turn: gameData.turn,
                                    changeTiles: protoChangeTiles,
                                    currentTokens: currentTokens,
                                    decks: decks,
                                    fallingTokens: fallingTokens,
                                    deletedTiles: deletedTiles,
                                    frozenColumns: gameData.board.frozenColumns,
                                },
                            })
                        );
                    } catch (err) {
                        if ((err as CodedError).code && (err as CodedError).error) {
                            const formattedError = {
                                code: (err as CodedError).code,
                                error: (err as CodedError).error.toString(),
                            };

                            ws.send(
                                wsEncode({
                                    response: p_ws.GameResponses.GAME_RESPONSES_ERROR,
                                    error: formattedError,
                                })
                            );
                        } else console.log(err);
                    }
                    break;
                }

                case p_ws.GameActions.GAME_ACTIONS_FORFEIT:
                    try {
                        const gameData = await gameRedis.getGameData(lobbyCode);
                        const [winner, loser] = await gameRedis.forfeitGame(lobbyCode, wsPlayerID);

                        const protoBoard = boardDataToProtobufBoard(gameData.board);

                        const currentTokens = gameData.tokenQueue?.tokens
                            ? {
                                  player1: gameData.tokenQueue.tokens[P_PlayerIDs.PLAYER_IDS_PLAYER1] ?? null,
                                  player2: gameData.tokenQueue.tokens[P_PlayerIDs.PLAYER_IDS_PLAYER2] ?? null,
                              }
                            : null;

                        const decks = gameData.tokenQueue?.decks
                            ? {
                                  player1: gameData.tokenQueue.decks[P_PlayerIDs.PLAYER_IDS_PLAYER1] ?? [],
                                  player2: gameData.tokenQueue.decks[P_PlayerIDs.PLAYER_IDS_PLAYER2] ?? [],
                              }
                            : null;

                        broadcastToRoom(
                            rooms[lobbyCode],
                            wsEncode({
                                response: p_ws.GameResponses.GAME_RESPONSES_END,
                                end: {
                                    endType: p_ws.GameEndTypes.GAME_END_TYPES_FORFEITED,
                                    winner: winner,
                                    loser: loser,
                                    board: protoBoard,
                                    currentTokens: currentTokens,
                                    decks: decks,
                                },
                            })
                        );
                    } catch (err) {
                        if ((err as CodedError).code !== null && (err as CodedError).error !== null) {
                            const formattedError = {
                                code: (err as CodedError).code,
                                error: (err as CodedError).error.toString(),
                            };

                            ws.send(
                                wsEncode({
                                    response: p_ws.GameResponses.GAME_RESPONSES_ERROR,
                                    error: formattedError,
                                })
                            );
                        } else {
                            console.log(err);
                        }
                    }
                    break;
            }
        });
    });
}

export function broadcastToGameRoom(lobbyCode: string, packet: p_ws.IGameResponsePacket) {
    rooms[lobbyCode]?.forEach((ws) => {
        ws.send(wsEncode(packet));
    });
}
