import type { WebSocket, WebSocketServer } from 'ws';
import * as proto from '../../lib/proto.js';
import type { Room } from '../../lib/types.ts';
import type { IncomingMessage } from 'http';

/** Proto encode wrapper to ensure the sent packages match the schema */
const wsEncode = (packet: proto.ws.ILobbyResponsePacket) => proto.ws.LobbyResponsePacket.encode(packet).finish();

const rooms: Record<string, Room> = {};

export function setupLobbyWSServer(WSServer: WebSocketServer) {
    WSServer.on('connection', async (ws: WebSocket, req: IncomingMessage, lobbyCode: string) => {
        console.log('New connection: ', req.socket.remoteAddress);

        // Add players from the same lobby to the same room
        if (rooms[lobbyCode]) rooms[lobbyCode] = [...(rooms[lobbyCode] as Room), ws];
        else rooms[lobbyCode] = [ws];

        ws.on('close', () => {
            // Remove the disconnected player from the room
            if (rooms[lobbyCode]) rooms[lobbyCode] = (rooms[lobbyCode] as Room).filter((elem) => elem !== ws);

            console.log('connection closed');
        });
    });
}

export function broadcastToLobbyRoom(lobbyCode: string, packet: proto.ws.ILobbyResponsePacket) {
    rooms[lobbyCode]?.forEach((ws) => {
        ws.send(wsEncode(packet));
    });
}
