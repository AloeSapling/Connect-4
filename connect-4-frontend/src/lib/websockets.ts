import { SERVER_URL_WS } from './config.js';
import { ws as p_ws } from './proto.js';
import { P_CodedError, P_ErrorCodes } from './types.js';

/** Helper functions that initialises a websocket connection
 *
 * Handles / throws errors returned by the backend that occured while trying to create the connection
 *
 * @param path - The path of the websocket with which the connection should be established
 *
 * (optional) Methods to be called during the appropriate event:
 * @param onMessage
 * @param onError
 * @param onOpen
 * @returns The newly created websocket connection
 * */
async function createWebsocketConnection(
    path: string,
    onMessage?: (this: WebSocket, ev: MessageEvent) => void,
    onError?: (this: WebSocket, ev: Event) => void,
    onOpen?: (ws: WebSocket) => void
): Promise<WebSocket> {
    // Promise-based solution is necessary to "bubble-up" errors from onevent callbacks
    return new Promise((resolve, reject) => {
        const ws = new WebSocket(new URL(path, SERVER_URL_WS));
        ws.binaryType = 'arraybuffer';

        // Handle errors during websocket initialisation
        ws.onmessage = (ev: MessageEvent) => {
            const packet = P_CodedError.decode(new Uint8Array(ev.data));
            reject(new Error(JSON.stringify(packet.code ?? P_ErrorCodes.ERROR_CODES_UNSPECIFIED)));
        };
        ws.onerror = () => {
            reject(new Error(JSON.stringify(P_ErrorCodes.ERROR_CODES_SERVER_ERROR)));
        };
        ws.onclose = () => {
            reject(new Error(JSON.stringify(P_ErrorCodes.ERROR_CODES_SERVER_ERROR)));
        };

        ws.onopen = () => {
            // Initialise the parameters for the websocket connection
            onOpen?.(ws);
            if (onMessage) ws.onmessage = onMessage;
            if (onError) ws.onerror = onError;

            ws.onclose = () => {};

            resolve(ws);
        };
    });
}

/** Handles the connection to the 'game' websocket */
export class GameWebSocket {
    ws: WebSocket;

    /** The constructor is only called internally, by the static factory method */
    private constructor(_ws: WebSocket) {
        this.ws = _ws;
    }

    /** Static factory method in order to be able to await async functions */
    static async create(
        lobbyCode: string,
        onMessage?: (packet: p_ws.WSGameResponsePacket) => void,
        onError?: (this: WebSocket, ev: Event) => void
    ): Promise<GameWebSocket> {
        const ws = await createWebsocketConnection(
            `/game/${lobbyCode}`,
            (ev: MessageEvent) => {
                const decodedPacket = p_ws.WSGameResponsePacket.decode(ev.data);
                onMessage?.(decodedPacket);
            },
            onError
        );

        return new GameWebSocket(ws);
    }

    /** Inserts a tile at the given column */
    insertTile(column: number) {
        this.ws.send(
            Buffer.from(
                p_ws.WSGamePacket.encode({
                    action: p_ws.WSGameActions.WS_GAME_ACTIONS_INSERT_TILE,
                    insertTile: {
                        column: column,
                    },
                }).finish()
            )
        );
    }
}

/** Handles the connection to the 'lobby' websocket */
export class LobbyWebSocket {
    ws: WebSocket;

    /** The constructor is only called internally, by the static factory method */
    private constructor(_ws: WebSocket) {
        this.ws = _ws;
    }

    /** Static factory method in order to be able to await async functions */
    static async create(
        lobbyCode: string,
        onMessage?: (packet: p_ws.LobbyResponsePacket) => void,
        onError?: (this: WebSocket, ev: Event) => void
    ): Promise<LobbyWebSocket> {
        const ws = await createWebsocketConnection(
            `/game/${lobbyCode}`,
            (ev: MessageEvent) => {
                const decodedPacket = p_ws.LobbyResponsePacket.decode(ev.data);
                onMessage?.(decodedPacket);
            },
            onError
        );

        return new LobbyWebSocket(ws);
    }
}
