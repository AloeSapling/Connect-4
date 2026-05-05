import WebSocket, { WebSocketServer } from "ws";
import * as gameRedis from "../../database-redis/game.ts";
import { type PlayerIDs, type Room, type UserRequest } from "../../lib/types.ts";
import { getPlayerID } from "../../database-sqllite/lobbyMembers.ts";
import { broadcastToRoom } from "../../lib/lib.ts";
import { TileChecker } from "../../lib/game.ts";
import * as proto from "../../lib/proto.js";

type GameWebSocket = WebSocket & { "lobbyCode"?: string; "playerID"?: PlayerIDs };

const rooms: Record<string, Room> = {};

/** JSON stringify wrapper to ensure the sent packages match the schema */
const wsStringify = (packet: proto.ws.WSGameResponsePacket) => JSON.stringify(packet);

function setupGameWSServer(WSServer: WebSocketServer) {
        WSServer.on("connection", async (ws: GameWebSocket, req) => {
                console.log("New connection: ", req.socket.remoteAddress);
                ws.on("message", async (data) => {
                        console.log(data.toString());

                        console.log(ws["lobbyCode"], ws["playerID"]);
                        const packet = JSON.parse(data.toString()) as proto.ws.WSGamePacket;

                        const reqUser = (req as UserRequest).user;
                        const wsLobbyCode = ws["lobbyCode"] || "";
                        const wsPlayerID = ws["playerID"];

                        if (!reqUser) {
                                ws.send(wsStringify(proto.ws.WSGameResponsePacket.create({
                                        response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                        error: proto.shared.CodedError.create({ code: proto.shared.ErrorCodes.ERROR_CODES_UNAUTHORISED })
                                })));
                                return;
                        }

                        if (packet.action !== proto.ws.WSGameActions.WS_GAME_ACTIONS_INIT) {
                                if (!wsLobbyCode) {
                                        ws.send(wsStringify(proto.ws.WSGameResponsePacket.create({
                                                response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                                error: proto.shared.CodedError.create({ code: proto.shared.ErrorCodes.ERROR_CODES_BAD_DATA })
                                        })));
                                        return;
                                }
                                if (!rooms[wsLobbyCode]) {
                                        ws.send(wsStringify(proto.ws.WSGameResponsePacket.create({
                                                response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                                error: proto.shared.CodedError.create({ code: proto.shared.ErrorCodes.ERROR_CODES_NOT_A_MEMBER })
                                        })));
                                        return;
                                }
                        }

                        switch (packet.action) {
                                case proto.ws.WSGameActions.WS_GAME_ACTIONS_INSERT_TILE:
                                        if (!wsPlayerID || packet.insertTile?.column === null || packet.insertTile?.column === undefined) {
                                                ws.send(wsStringify(proto.ws.WSGameResponsePacket.create({
                                                        response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                                        error: proto.shared.CodedError.create({ code: proto.shared.ErrorCodes.ERROR_CODES_BAD_DATA }),
                                                })));
                                                ws.send(wsStringify(proto.ws.WSGameResponsePacket.create({
                                                        response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                                        error: proto.shared.CodedError.create({ code: proto.shared.ErrorCodes.ERROR_CODES_BAD_DATA })
                                                })));
                                                break;
                                        }

                                        try {
                                                const column = packet.insertTile!.column;
                                                const row = await gameRedis.updateGameState(wsLobbyCode, wsPlayerID, column);

                                                const gameState = await gameRedis.getGameState(wsLobbyCode);

                                                const tileChecker = new TileChecker(gameState.board, column, row);

                                                // Check for a win
                                                if (tileChecker.checkForWin()) {
                                                        await gameRedis.deleteGame(wsLobbyCode);
                                                        broadcastToRoom((rooms[wsLobbyCode] as Room), wsStringify(
                                                                proto.ws.WSGameResponsePacket.create({
                                                                        response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_END,
                                                                        end: {
                                                                                "user": {
                                                                                        "username": reqUser.id.toString(),
                                                                                }
                                                                        }
                                                                })))

                                                        break;
                                                }
                                                // Check for draws
                                                if (TileChecker.checkForDraw(gameState.board)) {
                                                        broadcastToRoom((rooms[wsLobbyCode] as Room), wsStringify(
                                                                proto.ws.WSGameResponsePacket.create({
                                                                        response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_END,
                                                                        end: {
                                                                                "draw": true,
                                                                        }
                                                                })))
                                                        break;
                                                }

                                                broadcastToRoom((rooms[wsLobbyCode] as Room), wsStringify(proto.ws.WSGameResponsePacket.create({
                                                        response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_MOVE,
                                                        move: {
                                                                "board": gameState.board,
                                                                "column": column,
                                                                "row": row,
                                                                "turn": gameState.turn,
                                                        }
                                                })))
                                        } catch (err) {
                                                ws.send(wsStringify(proto.ws.WSGameResponsePacket.create({
                                                        response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                                        error: err as proto.shared.CodedError,
                                                })));
                                        }
                                        break;
                                case proto.ws.WSGameActions.WS_GAME_ACTIONS_INIT: {
                                        if (wsLobbyCode) {
                                                ws.send(wsStringify(proto.ws.WSGameResponsePacket.create({
                                                        response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                                        error: proto.shared.CodedError.create({ code: proto.shared.ErrorCodes.ERROR_CODES_ALREADY_JOINED })
                                                })));
                                                break;
                                        }

                                        const lobbyCode = packet.init?.lobbyCode;

                                        try {
                                                if (!lobbyCode) {
                                                        ws.send(wsStringify(proto.ws.WSGameResponsePacket.create({
                                                                response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                                                error: proto.shared.CodedError.create({ code: proto.shared.ErrorCodes.ERROR_CODES_BAD_LOBBY_CODE })
                                                        })));
                                                        break;
                                                }

                                                const pType = await getPlayerID(lobbyCode, reqUser.id);

                                                if (pType === null) {
                                                        ws.send(wsStringify(proto.ws.WSGameResponsePacket.create({
                                                                response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                                                error: proto.shared.CodedError.create({ code: proto.shared.ErrorCodes.ERROR_CODES_NOT_A_MEMBER })
                                                        })));
                                                        break;
                                                }

                                                ws["playerID"] = pType;

                                                // Add players from the same game to the same room
                                                if (rooms[lobbyCode])
                                                        rooms[lobbyCode] = [...(rooms[lobbyCode] as Room), ws];
                                                else
                                                        rooms[lobbyCode] = [ws];

                                                ws["lobbyCode"] = lobbyCode;
                                        }
                                        catch {
                                                ws.send(wsStringify(proto.ws.WSGameResponsePacket.create({
                                                        response: proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR,
                                                        error: proto.shared.CodedError.create({ code: proto.shared.ErrorCodes.ERROR_CODES_SERVER_ERROR })
                                                })));
                                        }
                                        console.log(packet.data, ws["lobbyCode"], ws["playerID"]);
                                        break;
                                }
                        }
                });
                ws.on("close", () => {
                        // Remove the disconnected player from the room
                        if (ws["lobbyCode"] && rooms[ws["lobbyCode"]])
                                rooms[ws["lobbyCode"]] = (rooms[ws["lobbyCode"]] as Room).filter(elem => elem !== ws);
                        console.log("connection closed")
                });
        });
}

export { setupGameWSServer };
