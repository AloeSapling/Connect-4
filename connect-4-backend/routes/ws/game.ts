import WebSocket, { WebSocketServer } from "ws";
import type { WSPacket } from "../../../packets.ts";
import * as gameRedis from "../../database-redis/game.ts";
import { PlayerIDs, type TPlayerIDs } from "../../lib/types.ts";

type GameWebSocket = WebSocket & { "lobbyCode"?: string; "playerID"?: TPlayerIDs };

function setupGameWSServer(WSServer: WebSocketServer) {
	WSServer.on("connection", async (ws: GameWebSocket, req) => {
		console.log("New connection: ", req.socket.remoteAddress);
		ws.on("message", async (data) => {
			console.log(data.toString());
			const packet = JSON.parse(data.toString()) as WSPacket;

			switch (packet.action) {
				case "insertTile":
					if (!ws["lobbyCode"] || !ws["playerID"]) {
						ws.send(JSON.stringify({ code: "missingData" }));
						return;
					}
					console.log(ws["lobbyCode"], ws["playerID"], packet.data["column"]);
					try {

						await gameRedis.updateGameState(ws["lobbyCode"], ws["playerID"], packet.data["column"]);
						ws.send(JSON.stringify(await gameRedis.getGameState(ws["lobbyCode"])));
					} catch (err) {
						ws.send(JSON.stringify(err));
					}
					break;
				case "init":
					ws["lobbyCode"] = packet.data["lobbyCode"];
					ws["playerID"] = packet.data["playerID"]; // Change to be set by authing the user with their sessionID
					console.log(packet.data, ws["lobbyCode"], ws["playerID"]);
					break;
			}
		});
		ws.on("close", () => console.log("connection closed"));
	});
}

export { setupGameWSServer };
