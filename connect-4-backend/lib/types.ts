import type { Request } from "express";
import type { ErrorCodes } from "../../errorCodes.ts"
import type { User } from "../database-sqllite/models.ts";
import type { WebSocketServer } from "ws";

// Used to identify whose turn it is or whose tile is in a given cell
export const PlayerIDs = ["PLAYER1", "PLAYER2"] as const;
export type TPlayerIDs = typeof PlayerIDs[number];

export type CellState = "EMPTY" | TPlayerIDs;
export type GameBoard = Array<Array<CellState>>;

export type GameState = {
	board: GameBoard;
	turn: TPlayerIDs;
}

export type WSRoutes = {
	"/game": WebSocketServer
};

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
