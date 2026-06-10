import { P_TokenTypes, type TTokenTypes } from '../../types.ts';
import type { GameBoard } from '../gameBoard.ts';
import type { Coordinate } from '../types.ts';
import Token from './base.ts';

export class BombToken extends Token {
    public type: TTokenTypes = P_TokenTypes.TOKEN_TYPES_BOMB;
    public count: number = 1;

    static {
        Token.register(P_TokenTypes.TOKEN_TYPES_BOMB, BombToken.prototype);
    }

    remove(gameBoard: GameBoard) {
        super.remove(gameBoard);
    }

    place(gameBoard: GameBoard, newRow: number, newColumn: number): Coordinate {
        super.place(gameBoard, newRow, newColumn);

        this.doAround(gameBoard, (token: Token) => {
            token.remove(gameBoard);
        })

        if (this.column > 0) Token.fallTokens(gameBoard, this.column - 1);

        if (this.column < gameBoard.tokens.length - 1) Token.fallTokens(gameBoard, this.column + 1);

        return [newColumn, newRow];
    }

    tickTurn() { }
}
