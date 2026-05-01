import { WebSocketServer } from "ws";

function setupGameWSServer(WSServer: WebSocketServer) {
	WSServer.on("connection", (ws, req) => {
		console.log("New connection: ", req.socket.remoteAddress);
		ws.on("message", (data) => console.log(data.toString()));
		ws.on("close", () => console.log("connection closed"));
	});
}

export { setupGameWSServer };
