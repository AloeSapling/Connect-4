import { P_TokenTypes, type TTokenTypes } from '../../types.ts';
import type { GameBoard } from '../gameBoard.ts';
import Token from './base.ts';

export class StandardToken extends Token {
    public type: TTokenTypes = P_TokenTypes.TOKEN_TYPES_STANDARD;
    public count: number = 1;

    static {
        Token.register(P_TokenTypes.TOKEN_TYPES_STANDARD, StandardToken.prototype);
    }

    remove(gameBoard: GameBoard) {
        super.remove(gameBoard);

        this.removeSelfFromLines(gameBoard);
    }

    place(gameBoard: GameBoard, newRow: number, newColumn: number) {
        super.place(gameBoard, newRow, newColumn);

        this.addSelfToLines(gameBoard);
    }

    tickTurn() { }
}
