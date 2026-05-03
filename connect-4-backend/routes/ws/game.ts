import WebSocket, { WebSocketServer } from "ws";
import type { WSPacket } from "../../../packets.ts";
import * as gameRedis from "../../database-redis/game.ts";
import { CodedError, PlayerTypes, type TPlayerTypes, type UserRequest } from "../../lib/types.ts";
import { getPlayerType } from "../../database-sqllite/lobbyMembers.ts";

type GameWebSocket = WebSocket & { "lobbyCode"?: string; "playerType"?: TPlayerTypes };

function setupGameWSServer(WSServer: WebSocketServer) {
	WSServer.on("connection", async (ws: GameWebSocket, req) => {
		console.log("New connection: ", req.socket.remoteAddress);
		ws.on("message", async (data) => {
			console.log(data.toString());
			const packet = JSON.parse(data.toString()) as WSPacket;

			switch (packet.action) {
				case "insertTile":
					if (!ws["lobbyCode"] || !ws["playerType"]) {
						ws.send(JSON.stringify({ code: "missingData" }));
						return;
					}
					console.log(ws["lobbyCode"], ws["playerType"], packet.data["column"]);
					try {

						await gameRedis.updateGameState(ws["lobbyCode"], ws["playerType"], packet.data["column"]);
						ws.send(JSON.stringify(await gameRedis.getGameState(ws["lobbyCode"])));
					} catch (err) {
						ws.send(JSON.stringify(err));
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
		});
		ws.on("close", () => console.log("connection closed"));
	});
}

export { setupGameWSServer };
