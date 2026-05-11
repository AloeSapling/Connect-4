import WebSocket, { WebSocketServer } from "ws";
import type { WSPacket, WSReturnPacket } from "../../../packets.ts";
import * as gameRedis from "../../database-redis/game.ts";
import { CodedError, PlayerTypes, type TPlayerTypes, type UserRequest } from "../../lib/types.ts";
import { getPlayerType } from "../../database-sqllite/lobbyMembers.ts";

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
					if (!ws["lobbyCode"] || !ws["playerType"]) {
						ws.send(JSON.stringify({ code: "missingData" }));
						return;
					}
					console.log(ws["lobbyCode"], ws["playerType"], packet.data["column"]);
					try {
						const column = packet.data["column"];
						const row = await gameRedis.updateGameState((ws["lobbyCode"] as string), ws["playerType"], column);

						await gameRedis.updateGameState(ws["lobbyCode"], ws["playerType"], packet.data["column"]);
						ws.send(JSON.stringify(await gameRedis.getGameState(ws["lobbyCode"])));
					} catch (err) {
						ws.send(wsStringify({
							result: "error",
							data: err as CodedError
						}));
					}
					break;
				case "init":
					ws["lobbyCode"] = packet.data["lobbyCode"];

					try {
						console.log(ws["lobbyCode"], (req as UserRequest).user.id);
						const pType = await getPlayerType(ws["lobbyCode"] || "", (req as UserRequest).user ? (req as UserRequest).user.id : -1);
						if (pType === null) {
							ws.send(JSON.stringify(new CodedError("NotAMember")));
							break;
						}
						ws["playerType"] = pType;
					}
					catch {
						ws.send(JSON.stringify(new CodedError("ServerError")));
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
