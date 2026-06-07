import { P_TokenTypes, type GameBoard, type TTokenTypes } from '../../types.ts';
import type { TDirections } from '../constants.ts';
import Token from './base.ts';

export class StandardToken extends Token {
    public tokenType: TTokenTypes = P_TokenTypes.TOKEN_TYPES_STANDARD;

    remove(gameBoard: GameBoard) {
        const decrementCount = (token: Token, direction: TDirections) => token.addCount(-1, direction);

        // Decrement the count of all connected tiles
        this.performOnConsecutiveDiagonalNWSE(gameBoard, decrementCount);
        this.performOnConsecutiveDiagonalNESW(gameBoard, decrementCount);
        this.performOnConsecutiveHorizontal(gameBoard, decrementCount);
        this.performOnConsecutiveVertical(gameBoard, decrementCount);
    }

    place(gameBoard: GameBoard, newRow: number, newColumn: number) {
        super.place(gameBoard, newRow, newColumn);

        const incrementCount = (token: Token, direction: TDirections) => token.addCount(1, direction);

        // Increment the count of all connected tiles
        this.performOnConsecutiveDiagonalNWSE(gameBoard, incrementCount);
        this.performOnConsecutiveDiagonalNESW(gameBoard, incrementCount);
        this.performOnConsecutiveHorizontal(gameBoard, incrementCount);
        this.performOnConsecutiveVertical(gameBoard, incrementCount);
    }

    tickTurn() {}
}
