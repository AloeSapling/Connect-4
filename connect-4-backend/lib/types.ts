import type { Request } from 'express';
import type { LobbyMember, User } from '../database-sqllite/models.ts';
import type { WebSocket } from 'ws';
import * as proto from './proto.js';
import type { IncomingMessage } from 'http';

// Protobuf type and value aliases
/** Alias for equivalent protobuf type */
export type TPlayerTypes = proto.shared.PlayerTypes;
/** Alias for equivalent protobuf type */
export type TPlayerIDs = proto.shared.PlayerIDs;
/** Alias for equivalent protobuf type */
export type TErrorCodes = proto.shared.ErrorCodes;
/** Alias for equivalent protobuf type */
export type TCodedError = proto.shared.CodedError;

/** Alias for equivalent protobuf value */
export const P_PlayerTypes = proto.shared.PlayerTypes;
/** Alias for equivalent protobuf value */
export const P_PlayerIDs = proto.shared.PlayerIDs;
/** Alias for equivalent protobuf value */
export const P_ErrorCodes = proto.shared.ErrorCodes;
/** Alias for equivalent protobuf value */
export const P_CodedError = proto.shared.CodedError;

// Game types
export type GameRow = {
    columns: Array<TPlayerIDs>;
};
export type GameBoard = {
    rows: Array<GameRow>;
};

export type GameState = {
    board: GameBoard;
    turn: TPlayerIDs;
};

// Websocket types
export type WsAuthArgs = {
    req: IncomingMessage & { params?: Record<string, string | undefined> };
    lobbyCode?: string | undefined;
};

export type Room = WebSocket[];

// Route-related types
export type UserRequest = { user: User } & Request;

export type Methods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type LowerCaseMethods = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type LobbyMemberSelectResult = LobbyMember & {
    'User.id': number;
    'User.username': string;
};

/** An error additionally containing an error code */
class CodedError {
    constructor(_code: TErrorCodes, _error?: Error) {
        this.code = _code;
        this.error = _error ?? new Error(JSON.stringify(_code));
    }

    code: TErrorCodes;
    error: Error;
}

export { CodedError };
