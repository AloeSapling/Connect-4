import type { GameBoard } from './gameBoard.ts';
import type { Coordinate, TLines } from './types.ts';

export class LineObj {
    public lineType: TLines;
    /** A list of the indexes of the tokens that form this line */
    public tokenCoordinates: Coordinate[] = [];
    /** A map of token to its count bonus / penalty */
    public countEffects: Record<string, number> = {};
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

    merge(other: LineObj) {
        if (this.lineType !== other.lineType) return;

        this.tokenCoordinates = [...this.tokenCoordinates, ...other.tokenCoordinates];
    }
}
