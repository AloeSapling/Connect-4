import WebSocket, { WebSocketServer } from "ws";
import type { WSPacket, WSReturnPacket } from "../../../packets.ts";
import * as gameRedis from "../../database-redis/game.ts";
import { CodedError, type Room, type TPlayerTypes, type UserRequest } from "../../lib/types.ts";
import { getPlayerType } from "../../database-sqllite/lobbyMembers.ts";
import { broadcastToRoom } from "../../lib/lib.ts";
import { TileChecker } from "../../lib/game.ts";
import { GAME_ROWS } from "../../config.ts";

type GameWebSocket = WebSocket & { "lobbyCode"?: string; "playerType"?: TPlayerTypes };

const rooms: Record<string, Room> = {};

/** JSON stringify wrapper to ensure the sent packages match the schema */
const wsStringify = (packet: WSReturnPacket) => JSON.stringify(packet);

function setupGameWSServer(WSServer: WebSocketServer) {
	WSServer.on("connection", async (ws: GameWebSocket, req) => {
		console.log("New connection: ", req.socket.remoteAddress);
		ws.on("message", async (data) => {
			console.log(data.toString());

			console.log(ws["lobbyCode"], ws["playerType"]);
			const packet = JSON.parse(data.toString()) as WSPacket;

			if (!(req as UserRequest).user) {
				ws.send(wsStringify({
					result: "error",
					data: new CodedError("Unauthorised")
				}));
				return;
			}

			if (packet.action !== "init") {
				if (!ws["lobbyCode"]) {
					ws.send(wsStringify({
						result: "error",
						data: new CodedError("BadData")
					}));
					return;
				}
				if (!rooms[ws["lobbyCode"]]) {
					ws.send(wsStringify({
						result: "error",
						data: new CodedError("NotAMember")
					}));
					return;
				}
			}

			switch (packet.action) {
				case "insertTile":
					if (!ws["playerType"]) {
						ws.send(wsStringify({
							result: "error",
							data: new CodedError("BadData")
						}));
						break;
					}

					try {
						const column = packet.data["column"];
						const row = await gameRedis.updateGameState((ws["lobbyCode"] as string), ws["playerType"], column);

						const gameState = await gameRedis.getGameState((ws["lobbyCode"] as string));

						const tileChecker = new TileChecker(gameState.board, column, row);

						if (tileChecker.checkForWin()) {
							await gameRedis.deleteGame(ws["lobbyCode"] as string);
							broadcastToRoom((rooms[(ws["lobbyCode"] as string)] as Room), wsStringify({
								result: "gameEnd",
								data: {
									"winner": {
										id: (req as UserRequest).user.id,
									}
								}
							}))
							break;
						}
						if (TileChecker.checkForDraw(gameState.board)) {
							broadcastToRoom((rooms[(ws["lobbyCode"] as string)] as Room), wsStringify({
								result: "gameEnd",
								data: {
									"winner": "draw",
								}
							}))
							break;
						}

						broadcastToRoom((rooms[(ws["lobbyCode"] as string)] as Room), wsStringify({
							result: "move",
							data: {
								"gameState": await gameRedis.getGameState((ws["lobbyCode"] as string))
							}
						}));
					} catch (err) {
						ws.send(wsStringify({
							result: "error",
							data: err as CodedError
						}));
					}
					break;
				case "init": {
					if (ws["lobbyCode"]) {
						ws.send(wsStringify({
							result: "error",
							data: new CodedError("AlreadyJoined")
						}));
						break;
					}

					const lobbyCode = packet.data["lobbyCode"];

					try {
						if (!lobbyCode) {
							ws.send(wsStringify({
								result: "error",
								data: new CodedError("BadLobbyCode")
							}));
							break;
						}

						const pType = await getPlayerType(lobbyCode, (req as UserRequest).user.id);

						if (pType === null) {
							ws.send(wsStringify({
								result: "error",
								data: new CodedError("NotAMember")
							}));
							break;
						}

						ws["playerType"] = pType;

						// Add players from the same game to the same room
						if (rooms[lobbyCode])
							rooms[lobbyCode] = [...(rooms[lobbyCode] as Room), ws];
						else
							rooms[lobbyCode] = [ws];

						ws["lobbyCode"] = packet.data["lobbyCode"];
					}
					catch {
						ws.send(wsStringify({
							result: "error",
							data: new CodedError("ServerError")
						}));
					}
					console.log(packet.data, ws["lobbyCode"], ws["playerType"]);
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
