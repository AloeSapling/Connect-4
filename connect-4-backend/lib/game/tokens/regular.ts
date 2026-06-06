import { GAME_WIN_LENGTH } from '../../../config.ts';
import Token from './base.ts';

export class RegularToken extends Token {
    remove() {
        const decrementCount = (token: Token) => token.addCount(-1);

        // Decrement the count of all connected tiles
        this.performOnConsecutiveDiagonalNWSE(decrementCount, GAME_WIN_LENGTH);
        this.performOnConsecutiveDiagonalNESW(decrementCount, GAME_WIN_LENGTH);
        this.performOnConsecutiveHorizontal(decrementCount, GAME_WIN_LENGTH);
        this.performOnConsecutiveVertical(decrementCount, GAME_WIN_LENGTH);
    }

    place(newRow: number, newColumn: number) {
        super.place(newRow, newColumn);

        const incrementCount = (token: Token) => token.addCount(1);

        // Increment the count of all connected tiles
        this.performOnConsecutiveDiagonalNWSE(incrementCount, GAME_WIN_LENGTH);
        this.performOnConsecutiveDiagonalNESW(incrementCount, GAME_WIN_LENGTH);
        this.performOnConsecutiveHorizontal(incrementCount, GAME_WIN_LENGTH);
        this.performOnConsecutiveVertical(incrementCount, GAME_WIN_LENGTH);
    }
}
