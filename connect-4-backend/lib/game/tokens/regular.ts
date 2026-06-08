import { P_TokenTypes, type TTokenTypes } from '../../types.ts';
import type { GameBoard } from '../gameBoard.ts';
import Token from './base.ts';

export class StandardToken extends Token {
    public tokenType: TTokenTypes = P_TokenTypes.TOKEN_TYPES_STANDARD;
    public count: number = 1;

    remove(gameBoard: GameBoard) {
        this.removeSelfFromLines(gameBoard);
    }

    place(gameBoard: GameBoard, newRow: number, newColumn: number) {
        super.place(gameBoard, newRow, newColumn);

        this.addSelfToLines(gameBoard);
    }

    tickTurn() {}
}
