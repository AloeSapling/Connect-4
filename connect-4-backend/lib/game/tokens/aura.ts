// import { P_TokenTypes, type GameBoard, type TTokenTypes } from '../../types.ts';
// import type { TDirections } from '../constants.ts';
// import Token from './base.ts';
//
// /** Adds +1 count to all surrounding tokens */
// export class AuraToken extends Token {
//     public tokenType: TTokenTypes = P_TokenTypes.TOKEN_TYPES_AURA;
//
//     remove(gameBoard: GameBoard) {
//         const decrementAllCounts = (token: Token, direction: TDirections) => {
//             if (token.type === this.type) token.addCount(-1, direction);
//         };
//
//         // Decrement the count of all surrounding tiles
//         this.performAround(gameBoard, decrementAllCounts);
//     }
//
//     place(gameBoard: GameBoard, newRow: number, newColumn: number) {
//         super.place(gameBoard, newRow, newColumn);
//
//         const incrementCount = (token: Token, direction: TDirections) => token.addCount(1, direction);
//
//         // Increment the count of all connected tiles
//         this.performOnConsecutiveDiagonalNWSE(gameBoard, incrementCount);
//         this.performOnConsecutiveDiagonalNESW(gameBoard, incrementCount);
//         this.performOnConsecutiveHorizontal(gameBoard, incrementCount);
//         this.performOnConsecutiveVertical(gameBoard, incrementCount);
//     }
//
//     tickTurn() {}
// }
