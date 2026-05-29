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
} from '../../lib/types.ts';
import { getPlayerID } from '../../database-sqllite/lobbyMembers.ts';
import { broadcastToRoom } from '../../lib/lib.ts';
import { TileChecker } from '../../lib/game.ts';
import { ws as p_ws } from '../../lib/proto.js';

type GameWebSocket = WebSocket & { lobbyCode?: string; playerID?: TPlayerIDs };

const rooms: Record<string, Room> = {};

/** Proto encode wrapper to ensure the sent packages match the schema */
const wsEncode = (packet: p_ws.IGameResponsePacket) => p_ws.GameResponsePacket.encode(packet).finish();

function setupGameWSServer(WSServer: WebSocketServer) {
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

        // Handle incomming messages / packets
        ws.on('message', async (data) => {
            if (!rooms[lobbyCode]) return;

            const packet = p_ws.GamePacket.decode(new Uint8Array(data as Buffer));

            switch (packet.action) {
                case p_ws.GameActions.GAME_ACTIONS_INSERT_TILE: {
                    if (packet.insertTile?.column === null || packet.insertTile?.column === undefined) {
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
                        const column = packet.insertTile!.column;

                        const row = await gameRedis.insertTile(lobbyCode, wsPlayerID, column);

                        const gameState = await gameRedis.getGameState(lobbyCode);

                        const tileChecker = new TileChecker(gameState.board, column, row);

                        // Check for a win
                        if (tileChecker.checkForWin()) {
                            await gameRedis.deleteGame(lobbyCode);

                            broadcastToRoom(
                                rooms[lobbyCode],
                                wsEncode({
                                    response: p_ws.GameResponses.GAME_RESPONSES_END,
                                    end: {
                                        row: row,
                                        column: column,
                                        endType: p_ws.GameEndTypes.GAME_END_TYPES_STANDARD_WIN,
                                        user: {
                                            id: reqUser.id,
                                            username: reqUser.username,
                                        },
                                    },
                                })
                            );

                            break;
                        }

                        // Check for draws
                        if (TileChecker.checkForDraw(gameState.board)) {
                            broadcastToRoom(
                                rooms[lobbyCode],
                                wsEncode({
                                    response: p_ws.GameResponses.GAME_RESPONSES_END,
                                    end: {
                                        row: row,
                                        column: column,
                                        endType: p_ws.GameEndTypes.GAME_END_TYPES_DRAW,
                                    },
                                })
                            );
                            break;
                        }

                        broadcastToRoom(
                            rooms[lobbyCode],
                            wsEncode({
                                response: p_ws.GameResponses.GAME_RESPONSES_MOVE,
                                move: {
                                    board: gameState.board,
                                    column: column,
                                    row: row,
                                    turn: gameState.turn,
                                },
                            })
                        );
                    } catch (err) {
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
                    }
                    break;
                }

                case p_ws.GameActions.GAME_ACTIONS_FORFEIT:
                    try {
                        // End the game
                        await gameRedis.deleteGame(lobbyCode);

                        broadcastToRoom(rooms[lobbyCode], wsEncode({
                            response: p_ws.GameResponses.GAME_RESPONSES_END,
                            end: {
                                endType: p_ws.GameEndTypes.GAME_END_TYPES_FORFEITED,
                                user: {
                                    id: reqUser.id,
                                    username: reqUser.username,
                                },
                            }
                        })
                        )
                    } catch (err) {
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
                    }
                    break;
            }
        });
    });
}

export { setupGameWSServer };
