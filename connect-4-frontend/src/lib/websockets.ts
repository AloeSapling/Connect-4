import { SERVER_URL_WS } from './config.js';
import * as proto from './proto.js';

class GameWebSocket {
        ws: WebSocket;

        /** The constructor is only called internally, by the static factory method */
        private constructor(_ws: WebSocket) {
                this.ws = _ws;
        }

        /** Static factory method used to be able to properly handle errors during websocket initialisation */
        static async create(lobbyCode: string, onMessage?: (this: WebSocket, ev: MessageEvent) => void, onError?: (this: WebSocket, ev: Event) => void): Promise<GameWebSocket> {
                return new Promise((resolve, reject) => {
                        const ws = new WebSocket(new URL('/game/', SERVER_URL_WS));
                        ws.binaryType = 'arraybuffer';
                        console.log(new URL('/game/', SERVER_URL_WS));

                        // Handle errors during websocket initialisation
                        ws.onmessage = (ev: MessageEvent) => {
                                const packet = proto.ws.WSGameResponsePacket.decode(new Uint8Array(ev.data));
                                if (packet.response === proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR) {
                                        reject(new Error(JSON.stringify(packet.error?.code ?? proto.shared.ErrorCodes.ERROR_CODES_UNSPECIFIED)));
                                }
                        }
                        ws.onerror = () => {
                                reject(new Error(JSON.stringify(proto.shared.ErrorCodes.ERROR_CODES_SERVER_ERROR)));
                        }
                        ws.onclose = () => {
                                reject(new Error(JSON.stringify(proto.shared.ErrorCodes.ERROR_CODES_SERVER_ERROR)));
                        }

                        ws.onopen = () => {
                                // Initialise the parameters for the websocket connection
                                ws.send(proto.ws.WSGamePacket.encode({
                                        action: proto.ws.WSGameActions.WS_GAME_ACTIONS_INIT,
                                        init: {
                                                lobbyCode: lobbyCode,
                                        }
                                }).finish());

                                if (onMessage) ws.onmessage = onMessage;
                                if (onError) ws.onerror = onError;
                                ws.onclose = () => { };

                                resolve(new GameWebSocket(ws));
                        }
                });
        }

        /** Inserts a tile at the given column */
        insertTile(column: number) {
                this.ws.send(proto.ws.WSGamePacket.encode({
                        action: proto.ws.WSGameActions.WS_GAME_ACTIONS_INSERT_TILE,
                        insertTile: {
                                column: column,
                        }
                }).finish())
        }
}

export { GameWebSocket };
