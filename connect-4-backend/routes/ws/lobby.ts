import type { WebSocket, WebSocketServer } from 'ws';
import { ws as p_ws } from '../../lib/proto.js';
import { P_CodedError, P_ErrorCodes, type Room, type WsArgs } from '../../lib/types.ts';

/** Proto encode wrapper to ensure the sent packages match the schema */
const wsEncode = (packet: p_ws.ILobbyResponsePacket) => p_ws.LobbyResponsePacket.encode(packet).finish();

const rooms: Record<string, Room> = {};

export function setupLobbyWSServer(WSServer: WebSocketServer) {
    WSServer.on('connection', async (ws: WebSocket, { req, lobbyCode }: WsArgs) => {
        console.log('New connection: ', req.socket.remoteAddress);

        ws.on('close', () => {
            // Remove the disconnected player from the room
            if (lobbyCode && rooms[lobbyCode]) rooms[lobbyCode] = (rooms[lobbyCode] as Room).filter((elem) => elem !== ws);

            console.log('connection closed');
        });

        if (!lobbyCode) {
            ws.send(
                wsEncode({
                    response: p_ws.LobbyResponses.LOBBY_RESPONSES_ERROR,
                    error: P_CodedError.create({
                        code: P_ErrorCodes.ERROR_CODES_BAD_SETUP,
                    }),
                })
            );
            return;
        }

        // Add players from the same lobby to the same room
        if (rooms[lobbyCode]) rooms[lobbyCode] = [...(rooms[lobbyCode] as Room), ws];
        else rooms[lobbyCode] = [ws];
    });
}

export function broadcastToLobbyRoom(lobbyCode: string, packet: p_ws.ILobbyResponsePacket) {
    rooms[lobbyCode]?.forEach((ws) => {
        ws.send(wsEncode(packet));
    });
}
