import { CodedError, P_ErrorCodes } from '../types.ts';
import type { GameBoard } from './gameBoard.ts';
import type Token from './tokens/base.ts';
import { DirectionVectors, LineToDirections, type Coordinate, type TLines } from './types.ts';

export class LineObj {
    public lineType: TLines;
    /** A list of the indexes of the tokens that form this line */
    public tokenCoordinates: Coordinate[] = [];
    /** A map of token to its count bonus / penalty */
    public countEffects: Record<string, number> = {};
    /** The total counts summed up from the tokens in this line */
    public countTotal: number = 0;
    /** The index of this line in the game board */
    public boardIdx: number;

    constructor(
        gameBoard: GameBoard,
        _lineType: TLines,
        _tokenCoordinates?: Coordinate[],
        _countEffects?: Record<string, number>
    ) {
        this.lineType = _lineType;
        if (_tokenCoordinates) this.tokenCoordinates = _tokenCoordinates;
        if (_countEffects) this.countEffects = _countEffects;

        this.boardIdx = gameBoard.lines.length;
        gameBoard.lines.push(this);
    }

    merge(gameBoard: GameBoard, other: LineObj) {
        if (this.lineType !== other.lineType) return;

        for (const coord of other.tokenCoordinates) {
            const tokenRow = gameBoard.tokens[coord[1]];
            if (!tokenRow) continue;

            const token = tokenRow[coord[0]];
            if (!token) continue;

            this.addToken(gameBoard, token);
        }

        this.lineChanged();
    }

    addToken(gameBoard: GameBoard, token: Token) {
        this.tokenCoordinates.push([token.column, token.row]);

        this.countTotal += token.count;
        token.lines[this.lineType] = this.boardIdx;

        this.lineChanged();
    }

    /** Removes the token coordinate at the specified index
     * Additionally updates the count appropriately and unsets the line on the token
     * @returns The indexes of the removed token
     * */
    removeTokenAtIdx(gameBoard: GameBoard, idx: number): Coordinate {
        if (idx < 0 || idx >= this.tokenCoordinates.length) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

        const coord = this.tokenCoordinates[idx];
        if (!coord) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

        this.tokenCoordinates.splice(idx, 1);

        // Coords are of form [column / x, row / y];
        const tokenRow = gameBoard.tokens[coord[1]];
        if (!tokenRow) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

        const token = tokenRow[coord[0]];
        if (!token) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

        this.doTokenRemove(token);

        return coord;
    }

    /** Removes the token coordinates from the specified index and up
     * Additionally updates the count appropriately and unsets the line on the tokens
     * @returns The indexes of the removed tokens
     * */
    removeTokensFromIdx(gameBoard: GameBoard, idx: number): Coordinate[] {
        if (idx < 0 || idx >= this.tokenCoordinates.length) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

        const removedCoords = this.tokenCoordinates.splice(idx);

        for (const coord of removedCoords) {
            // Coords are of form [column / x, row / y];
            const tokenRow = gameBoard.tokens[coord[1]];
            if (!tokenRow) continue;

            const token = tokenRow[coord[0]];
            if (!token) continue;

            this.doTokenRemove(token);
        }

        return removedCoords;
    }

    /** Sort the list of token coordinates
     * The list is sorted from the left-most or bottom-most token
     * Left-most is prioritised over bottom-most
     * */
    sortTokens() {
        const directions = LineToDirections[this.lineType];
        const directionVector = DirectionVectors[directions[0]];

        this.tokenCoordinates.sort((a, b) => {
            const val1 = a[0] * directionVector[0] + a[1] * directionVector[1];
            const val2 = b[0] * directionVector[0] + b[1] * directionVector[1];

            return val2 - val1;
        });
    }

    /** Private helper function for performing the appropriate actions on removed tokens */
    private doTokenRemove(token: Token) {
        token.lines[this.lineType] = null;
        this.countTotal -= token.count;

        this.lineChanged();
    }

    static changedLines: number[] = [];

    /** Resets the list of changed lines */
    static resetChangedLines() {
        LineObj.changedLines = [];
    }
    /** Adds this line to this list of changed lines
     * Only adds this line to the list if the array doesn't include it yet
     * */
    private lineChanged() {
        if (!LineObj.changedLines.includes(this.boardIdx)) {
            LineObj.changedLines.push(this.boardIdx);
        }
    }
}
