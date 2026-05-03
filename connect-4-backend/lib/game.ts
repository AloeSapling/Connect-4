import { CodedError, type GameBoard, type GameRow, type TPlayerTypes } from "./types.ts";

const Directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"] as const;
type TDirections = typeof Directions[number];

/** Vectors for the 8 possible directions. The list is in clockwise order, starting with North. */
const DirectionVectors: Record<TDirections, [number, number]> = {
	N: [0, 1],
	NE: [1, 1],
	E: [1, 0],
	SE: [1, -1],
	S: [0, -1],
	SW: [-1, -1],
	W: [-1, 0],
	NW: [-1, 1],
} as const;

class TileChecker {
	board: GameBoard;
	column: number;
	row: number;
	playerType: TPlayerTypes;

	/** @throws Error code - "BadData" if the tile position is out of the bounds of the game board or the selected cell is empty */
	constructor(_board: GameBoard, _column: number, _row: number) {
		this.board = _board;
		this.column = _column;
		this.row = _row;

		if (!this.checkIfValidTilePosition()) throw new CodedError("BadData");
		console.log(this.board);

		if ((this.board[this.row] as GameRow)[this.column] === "EMPTY") throw new CodedError("BadData");

		this.playerType = (this.board[this.row] as GameRow)[this.column] as TPlayerTypes;
	}

	/** Checks if the given tile positions are within the bounds of the game board */
	checkIfValidTilePosition(x = this.column, y = this.row) {
		if (y < 0 || y >= this.board.length) return false;
		if (!this.board[y]) return false;
		if (x < 0 || x >= (this.board[y] as GameRow).length) return false;

		return true;
	}

	/** Checks if the next tile in the given direction is the same as the newly added tile */
	checkTileInDirection(directionVector: [number, number], displacement: number) {
		const newColumn = this.column + directionVector[0] * displacement;
		const newRow = this.row + directionVector[1] * displacement;

		if (!this.checkIfValidTilePosition(newColumn, newRow)) return false;

		return (this.board[newRow] as GameRow)[newColumn] === this.playerType;
	}


	/** Checks if the new move created a win */
	checkForWin(): boolean {
		return (
			this.m_checkAscendingDiagonal() ||
			this.m_checkDescendingDiagonal() ||
			this.m_checkHorizontal() ||
			this.m_checkVertical()
		);
	}

	/** Checks if a draw exists on the provided board */
	static checkForDraw(board: GameBoard): boolean {
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < (board[i] as GameRow).length; j++) {
				if ((board[i] as GameRow)[j] === "EMPTY") return false;
			}
		}

		return true;
	}

	/** Checks for a win along the diagonal the resembles an ascending linear function */
	private m_checkAscendingDiagonal(): boolean {
		let count = 1;

		// Check North-East
		for (let i = 1; i <= 3; i++) {
			if (this.checkTileInDirection(DirectionVectors.NE, i)) count++;
			else break;
		}

		// Check South-West
		for (let i = 1; i <= 3; i++) {
			if (this.checkTileInDirection(DirectionVectors.SW, i)) count++;
			else break;
		}

		return count >= 4;
	}

	/** Checks for a win along the diagonal that resembles a descending linear function */
	private m_checkDescendingDiagonal(): boolean {
		let count = 1;

		// Check North-West
		for (let i = 1; i <= 3; i++) {
			if (this.checkTileInDirection(DirectionVectors.NW, i)) count++;
			else break;
		}

		// Check South-East
		for (let i = 1; i <= 3; i++) {
			if (this.checkTileInDirection(DirectionVectors.SE, i)) count++;
			else break;
		}

		return count >= 4;
	}

	/** Checks for a win along the vertical line */
	private m_checkVertical(): boolean {
		let count = 1;

		// Check North
		for (let i = 1; i <= 3; i++) {
			if (this.checkTileInDirection(DirectionVectors.N, i)) count++;
			else break;
		}

		// Check South
		for (let i = 1; i <= 3; i++) {
			if (this.checkTileInDirection(DirectionVectors.S, i)) count++;
			else break;
		}
		console.log(count);

		return count >= 4;
	}

	/** Checks for a win along the horizontal line */
	private m_checkHorizontal(): boolean {
		let count = 1;

		// Check West
		for (let i = 1; i <= 3; i++) {
			if (this.checkTileInDirection(DirectionVectors.W, i)) count++;
			else break;
		}

		// Check East
		for (let i = 1; i <= 3; i++) {
			if (this.checkTileInDirection(DirectionVectors.E, i)) count++;
			else break;
		}

		return count >= 4;
	}
}

export { TileChecker };
