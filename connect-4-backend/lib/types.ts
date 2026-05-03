import type { Request } from "express";
import type { ErrorCodes } from "../../errorCodes.ts"
import type { User } from "../database-sqllite/models.ts";
import type { WebSocket, WebSocketServer } from "ws";

// Used to identify whose turn it is or whose tile is in a given cell
export const PlayerTypes = ["PLAYER1", "PLAYER2"] as const;
export type TPlayerTypes = typeof PlayerTypes[number];

export type CellState = "EMPTY" | TPlayerTypes;
export type GameRow = Array<CellState>;
export type GameBoard = Array<GameRow>;

export type GameState = {
	board: GameBoard;
	turn: TPlayerTypes;
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
