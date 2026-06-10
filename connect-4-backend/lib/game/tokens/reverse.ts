import { P_TokenTypes, type TTokenTypes } from '../../types.ts';
import type { GameBoard } from '../gameBoard.ts';
import type { Coordinate } from '../types.ts';
import Token from './base.ts';

export class ReverseToken extends Token {
    public type: TTokenTypes = P_TokenTypes.TOKEN_TYPES_REVERSE;
    public count: number = 1;

    static {
        Token.register(P_TokenTypes.TOKEN_TYPES_REVERSE, ReverseToken.prototype);
    }

    remove(gameBoard: GameBoard) {
        super.remove(gameBoard);
    }

    place(gameBoard: GameBoard, newColumn: number): Coordinate {
        // Move all the tokens up
        for (let i = gameBoard.tokens.length - 2; i >= 0; i--) {
            const tokenRow = gameBoard.tokens[i];

            const token = tokenRow![newColumn];
            if (!token) continue;

            token.move(gameBoard, i + 1, this.column);
        }

        // Place at the bottom
        super.place(gameBoard, 0, newColumn);

        return [newColumn, 0];
    }

    tickTurn() { }
}
