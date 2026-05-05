import type { Request } from "express";
import type { ErrorCodes } from "./errorCodes.ts"
import type { User } from "../database-sqllite/models.ts";
import type { WebSocket, WebSocketServer } from "ws";
import * as proto from "./proto.js";


export type PlayerTypes = proto.shared.PlayerTypes;
export type PlayerIDs = proto.shared.PlayerIDs;

export type GameRow = {
        columns: Array<PlayerIDs>
};
export type GameBoard = {
        rows: Array<GameRow>
};

export type GameState = {
        board: GameBoard;
        turn: PlayerIDs;
}

export type WSRoutes = {
        "/game": WebSocketServer
};

export type Room = WebSocket[];

export type UserRequest = { user: User } & Request

export type Methods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/** An error additionally containing an error code */
class CodedError {
        constructor(_code: ErrorCodes, _error?: Error) {
                this.code = _code;
                this.error = _error ?? new Error(_code);
        }

        code: ErrorCodes;
        error: Error;
}

export { CodedError }
