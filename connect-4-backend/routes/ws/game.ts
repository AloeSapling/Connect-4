import WebSocket, { WebSocketServer } from 'ws';
import * as gameRedis from '../../database-redis/game.ts';
import { CodedError, type TPlayerIDs, type Room, type UserRequest, P_CodedError, P_ErrorCodes } from '../../lib/types.ts';
import { getPlayerID } from '../../database-sqllite/lobbyMembers.ts';
import { broadcastToRoom } from '../../lib/lib.ts';
import { TileChecker } from '../../lib/game.ts';
import * as proto from '../../lib/proto.js';

type GameWebSocket = WebSocket & { lobbyCode?: string; playerID?: TPlayerIDs };

const rooms: Record<string, Room> = {};

/** Proto encode wrapper to ensure the sent packages match the schema */
const wsEncode = (packet: proto.ws.IWSGameResponsePacket) => proto.ws.WSGameResponsePacket.encode(packet).finish();

function setupGameWSServer(WSServer: WebSocketServer) {
    WSServer.on('connection', async (ws: GameWebSocket, req) => {
        console.log('New connection: ', req.socket.remoteAddress);
        ws.on('message', async (data) => {
            console.log(data.toString());

            const packet = proto.ws.WSGamePacket.decode(new Uint8Array(data as Buffer));

            const reqUser = (req as UserRequest).user;
            const wsLobbyCode = ws['lobbyCode'] || '';
            const wsPlayerID = ws['playerID'];

            if (!reqUser) {
                ws.send(
                    wsEncode({
                        response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                        error: P_CodedError.create({
                            code: P_ErrorCodes.ERROR_CODES_UNAUTHORISED,
                        }),
                    })
                );
                return;
            }

            if (packet.action !== proto.ws.WSGameActions.WS_GAME_ACTIONS_INIT) {
                if (!wsLobbyCode) {
                    ws.send(
                        wsEncode({
                            response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                            error: P_CodedError.create({
                                code: P_ErrorCodes.ERROR_CODES_BAD_DATA,
                            }),
                        })
                    );
                    return;
                }

                if (!rooms[wsLobbyCode]) {
                    ws.send(
                        wsEncode({
                            response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                            error: P_CodedError.create({
                                code: P_ErrorCodes.ERROR_CODES_NOT_A_MEMBER,
                            }),
                        })
                    );
                    return;
                }
            }

            switch (packet.action) {
                case proto.ws.WSGameActions.WS_GAME_ACTIONS_INSERT_TILE: {
                    if (!wsPlayerID || packet.insertTile?.column === null || packet.insertTile?.column === undefined) {
                        ws.send(
                            wsEncode({
                                response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                error: P_CodedError.create({
                                    code: P_ErrorCodes.ERROR_CODES_BAD_DATA,
                                }),
                            })
                        );
                        break;
                    }

                    try {
                        const column = packet.insertTile!.column;

                        const row = await gameRedis.insertTile(wsLobbyCode, wsPlayerID, column);

                        const gameState = await gameRedis.getGameState(wsLobbyCode);

                        const tileChecker = new TileChecker(gameState.board, column, row);

                        // Check for a win
                        if (tileChecker.checkForWin()) {
                            await gameRedis.deleteGame(wsLobbyCode);

                            broadcastToRoom(
                                rooms[wsLobbyCode] as Room,
                                wsEncode({
                                    response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_END,
                                    end: {
                                        user: {
                                            username: reqUser.id.toString(),
                                        },
                                    },
                                })
                            );

                            break;
                        }
                        // Check for draws
                        if (TileChecker.checkForDraw(gameState.board)) {
                            broadcastToRoom(
                                rooms[wsLobbyCode] as Room,
                                wsEncode({
                                    response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_END,
                                    end: {
                                        draw: true,
                                    },
                                })
                            );
                            break;
                        }

                        broadcastToRoom(
                            rooms[wsLobbyCode] as Room,
                            wsEncode({
                                response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_MOVE,
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
                                response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                error: formattedError,
                            })
                        );
                    }
                    break;
                }
                case proto.ws.WSGameActions.WS_GAME_ACTIONS_INIT: {
                    if (wsLobbyCode) {
                        ws.send(
                            wsEncode({
                                response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                error: P_CodedError.create({
                                    code: P_ErrorCodes.ERROR_CODES_ALREADY_JOINED,
                                }),
                            })
                        );
                        break;
                    }

                    const lobbyCode = packet.init?.lobbyCode;

                    if (!lobbyCode) {
                        ws.send(
                            wsEncode({
                                response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                error: P_CodedError.create({
                                    code: P_ErrorCodes.ERROR_CODES_BAD_LOBBY_CODE,
                                }),
                            })
                        );
                        break;
                    }

                    try {
                        const pType = await getPlayerID(lobbyCode, reqUser.id);

                        if (pType === null) {
                            ws.send(
                                wsEncode({
                                    response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                    error: P_CodedError.create({
                                        code: P_ErrorCodes.ERROR_CODES_NOT_A_MEMBER,
                                    }),
                                })
                            );
                            break;
                        }

                        ws['playerID'] = pType;

                        // Add players from the same game to the same room
                        if (rooms[lobbyCode]) rooms[lobbyCode] = [...(rooms[lobbyCode] as Room), ws];
                        else rooms[lobbyCode] = [ws];

                        ws['lobbyCode'] = lobbyCode;
                    } catch {
                        ws.send(
                            wsEncode({
                                response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                error: P_CodedError.create({
                                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                                }),
                            })
                        );
                    }
                    break;
                }
            }
        });

        ws.on('close', () => {
            // Remove the disconnected player from the room
            if (ws['lobbyCode'] && rooms[ws['lobbyCode']])
                rooms[ws['lobbyCode']] = (rooms[ws['lobbyCode']] as Room).filter((elem) => elem !== ws);

            console.log('connection closed');
        });
    });
}

export { setupGameWSServer };
