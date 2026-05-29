import axios from 'axios';
import { SERVER_URL } from './config';
import { routes } from './proto.js';
import { P_CodedError, type ResponseError, type TPlayerIDs } from './types.js';

/** An axios instance shared between all backend fetches */
const api = axios.create({
    baseURL: SERVER_URL,
    timeout: 1000,
    withCredentials: true,
    responseType: 'arraybuffer',
    headers: {
        'Content-Type': 'application/octet-stream',
    },
    transformRequest: (data) => {
        if (data instanceof Uint8Array) return data;
        return JSON.stringify(data);
    },
});

api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        const decodedErr = P_CodedError.decode(new Uint8Array(error.response.data));
        const responseErr: ResponseError = { ...decodedErr, status: error.status };
        return Promise.reject(responseErr);
    }
);

/** Creates a new lobby entry on the backend
 * @returns The response from the backend
 * */
export async function createLobby(lobbyName: string): Promise<routes.CreateLobbyResponse> {
    const response = await api.post<ArrayBuffer>(
        '/lobby/create',
        routes.CreateLobbyRequest.encode({
            lobbyName: lobbyName,
        }).finish()
    );

    return routes.CreateLobbyResponse.decode(new Uint8Array(response.data));
}

/** Creates a new user entry on the backend */
export async function createUser(username: string) {
    await api.post<ArrayBuffer>(
        '/user/create',
        routes.CreateUserRequest.encode({
            username: username,
        }).finish()
    );
}

/** Changes the username of the current user */
export async function changeUsername(username: string) {
    await api.patch(
        '/user/changeUsername/',
        routes.ChangeUsernameRequest.encode({
            username: username,
        }).finish()
    );
}

/** Creates a new game on the backend
 * @param lobbyCode Used to determine in which lobby to create the game
 * */
export async function createGame(lobbyCode: string) {
    await api.post<ArrayBuffer>(`/game/${lobbyCode}/create`);
}
/** Gets the current state of the game
 * @param lobbyCode Used to determine which lobby's game state to get
 * */
export async function getGameState(lobbyCode: string) {
    const response = await api.get<ArrayBuffer>(`/game/${lobbyCode}/`);

    return routes.GetGameResponse.decode(new Uint8Array(response.data));
}

/** Joins the lobby associated with the provided code */
export async function joinLobby(lobbyCode: string) {
    await api.post<ArrayBuffer>(`/lobby/${lobbyCode}/join`);
}

/** Changes the player id of the given user in the given lobby
 * Automatically sets the player type to player for the chosen player
 * Automatically unsets the id and player type of user who currently has this player id
 *
 * @param uid The id of the user whose player id is to be changed
 * */
export async function changePlayerID(lobbyCode: string, uid: number, playerID: TPlayerIDs) {
    await api.post<ArrayBuffer>(
        `/lobby/${lobbyCode}/changePlayerID`,
        routes.ChangePlayerIDRequest.encode({
            playerId: playerID,
            userId: uid,
        }).finish()
    );
}

/** Leaves the lobby associated with the provided code */
export async function leaveLobby(lobbyCode: string) {
    await api.post<ArrayBuffer>(`/lobby/${lobbyCode}/leave`);
}

/** @returns Detailed data about the given lobby */
export async function getLobbyDetails(lobbyCode: string): Promise<routes.GetLobbyDetailsResponse> {
    const response = await api.get<ArrayBuffer>(`/lobby/${lobbyCode}/details`);

    return routes.GetLobbyDetailsResponse.decode(new Uint8Array(response.data));
}

/** @returns A list of all the lobbies */
export async function getLobbies(): Promise<routes.GetLobbiesResponse> {
    const response = await api.get<ArrayBuffer>('/lobby');

    return routes.GetLobbiesResponse.decode(new Uint8Array(response.data));
}

/** @returns The user data of the currently logged in user */
export async function getLoggedInUserData(): Promise<routes.GetLoggedInData> {
    const response = await api.get<ArrayBuffer>('/user');

    return routes.GetLoggedInData.decode(new Uint8Array(response.data));
}
