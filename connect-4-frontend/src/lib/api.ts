import axios from 'axios';
import { SERVER_URL } from './config';
import * as proto from './proto.js';

/** An axios instance shared between all backend fetches */
const api = axios.create({
    baseURL: SERVER_URL,
    timeout: 1000,
    withCredentials: true,
    responseType: 'arraybuffer',
    headers: {
        'Content-Type': 'application/octet-stream',
    },
});

/** Creates a new lobby entry on the backend
 * @returns The response from the backend
 * */
export async function CreateLobby(): Promise<proto.routes.CreateLobbyResponse> {
    const response = await api.post<ArrayBuffer>('/lobby/create');

    return proto.routes.CreateLobbyResponse.decode(new Uint8Array(response.data));
}

/** Creates a new user entry on the backend */
export async function CreateUser(username: string) {
    await api.post('/user/create');
}

/** Creates a new game on the backend
 * @param lobbyCode Used to determine in which lobby to create the game
 * */
export async function CreateGame(lobbyCode: string) {
    await api.post('/game/create', proto.routes.CreateGameRequest.encode({ code: lobbyCode }).finish());
}

/** Joins the lobby associated with the provided code */
export async function JoinLobby(lobbyCode: string) {
    await api.post('/lobby/join/', proto.routes.JoinLobbyRequest.encode({ code: lobbyCode }).finish());
}
