export const ERROR_CODES = ["ServerError", "BadLobbyCode", "LobbyCreateFail"] as const;
export type ErrorCodes = typeof ERROR_CODES[number];

/* Error Codes documentation:
ServerError - This means that part of the code was malformed and/or produced an unhandled error
BadLobbyCode - The lobby code inputted does not match the valid lobby code syntax
LobbyCreateFail - Creating a lobby failed, for example due to 15 lobby code collisions
*/