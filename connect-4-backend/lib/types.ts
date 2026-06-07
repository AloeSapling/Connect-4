import type { Request } from 'express';
import type { LobbyMember, User } from '../database-sqllite/models.ts';
import type { WebSocket } from 'ws';
import * as proto from './proto.js';
import type { IncomingMessage } from 'http';
import type Token from './game/tokens/base.ts';

// Protobuf type and value aliases

/** Aliases for equivalent protobuf types */
export type TPlayerTypes = proto.shared.PlayerTypes;
export type TPlayerIDs = proto.shared.PlayerIDs;
export type TErrorCodes = proto.shared.ErrorCodes;
export type TCodedError = proto.shared.CodedError;
export type TTokenTypes = proto.models.TokenTypes;

/** Aliases for equivalent protobuf values */
export const P_PlayerTypes = proto.shared.PlayerTypes;
export const P_PlayerIDs = proto.shared.PlayerIDs;
export const P_ErrorCodes = proto.shared.ErrorCodes;
export const P_CodedError = proto.shared.CodedError;
export const P_TokenTypes = proto.models.TokenTypes;

// Game types
export type GameBoard = Token[][];

export type GameData = {
    board: GameBoard;
    turn: TPlayerIDs;
};

export type GameStates = 'NOT_FINISHED' | 'WIN' | 'DRAW';

// Websocket types
export type WsArgs = {
    req: IncomingMessage & { params?: Record<string, string | undefined> };
    lobbyCode?: string | undefined;
    user?: User;
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
