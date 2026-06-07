import { GAME_WIN_LENGTH } from '../../../config.ts';
import { P_TokenTypes, type GameBoard, type TTokenTypes } from '../../types.ts';
import Token from './base.ts';

export class StandardToken extends Token {
    public tokenType: TTokenTypes = P_TokenTypes.TOKEN_TYPES_STANDARD;

    remove(gameBoard: GameBoard) {
        const decrementCount = (token: Token) => token.addCount(-1);

        // Decrement the count of all connected tiles
        this.performOnConsecutiveDiagonalNWSE(gameBoard, decrementCount, GAME_WIN_LENGTH);
        this.performOnConsecutiveDiagonalNESW(gameBoard, decrementCount, GAME_WIN_LENGTH);
        this.performOnConsecutiveHorizontal(gameBoard, decrementCount, GAME_WIN_LENGTH);
        this.performOnConsecutiveVertical(gameBoard, decrementCount, GAME_WIN_LENGTH);
    }

    place(gameBoard: GameBoard, newRow: number, newColumn: number) {
        super.place(gameBoard, newRow, newColumn);

        const incrementCount = (token: Token) => token.addCount(1);

        // Increment the count of all connected tiles
        this.performOnConsecutiveDiagonalNWSE(gameBoard, incrementCount, GAME_WIN_LENGTH);
        this.performOnConsecutiveDiagonalNESW(gameBoard, incrementCount, GAME_WIN_LENGTH);
        this.performOnConsecutiveHorizontal(gameBoard, incrementCount, GAME_WIN_LENGTH);
        this.performOnConsecutiveVertical(gameBoard, incrementCount, GAME_WIN_LENGTH);
    }
}
