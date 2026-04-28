import type { ErrorCodes } from "../../errorCodes.ts"

export type PlayerIDs = "PLAYER1" | "PLAYER2"
export type CellState = "EMPTY" | PlayerIDs;
export type GameBoard = Array<Array<CellState>>;

export type GameState = {
    board: GameBoard;
    turn: PlayerIDs;
}

class CodedError
{
    constructor(_code: ErrorCodes, _error?: Error){
        this.code = _code;
        this.error = _error ?? new Error(_code);
    }

    code: ErrorCodes;
    error: Error;
}

export { CodedError }