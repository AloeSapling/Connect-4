import { P_TokenTypes, type TPlayerIDs, type TTokenTypes } from '../../types.ts';
import type { GameBoard } from '../gameBoard.ts';
import type { Coordinate } from '../types.ts';
import Token from './base.ts';

export class NegativeToken extends Token {
    public type: TTokenTypes = P_TokenTypes.TOKEN_TYPES_NEGATIVE;
    public count: number = 0;

    private countEffectName: string;
    private countEffectValue: number = -1;

    private static instanceCount = 0;

    static {
        Token.register(P_TokenTypes.TOKEN_TYPES_NEGATIVE, NegativeToken.prototype);
    }

    static activeInstanceIndexes: Coordinate[] = [];

    constructor(_playerID?: TPlayerIDs, _type?: TTokenTypes) {
        super(_playerID, _type);

        NegativeToken.instanceCount++;
        this.countEffectName = `NegativeToken_${NegativeToken.instanceCount}`;
    }

    remove(gameBoard: GameBoard) {
        this.removeSelfFromLines(gameBoard);

        this.doAround(gameBoard, (token: Token) => {
            if (token.playerID !== this.playerID) {
                token.removeCountEffect(gameBoard, this.countEffectName);
            }
        });

        // Remove this token from the list of active instances
        NegativeToken.activeInstanceIndexes.filter((elem) => !(elem[0] === this.column && elem[1] === this.row));
    }

    place(gameBoard: GameBoard, newRow: number, newColumn: number) {
        super.place(gameBoard, newRow, newColumn);

        this.addSelfToLines(gameBoard);

        // Add this token to the list of active indexes
        NegativeToken.activeInstanceIndexes.push([this.column, this.row]);
    }

    tickTurn(gameBoard: GameBoard) {
        this.doAround(gameBoard, (token: Token) => {
            if (token.playerID !== this.playerID) {
                token.addCountEffect(gameBoard, this.countEffectName, this.countEffectValue);
            }
        });
    }

    doAround(gameBoard: GameBoard, func: (token: Token) => void) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;

                if (this.column + j < 0 || this.row + i < 0 || this.row + i >= gameBoard.tokens.length) continue;

                const tokenRow = gameBoard.tokens[this.row + i];
                if (!tokenRow || this.column + j >= tokenRow.length) continue;

                const token = tokenRow[this.column + j];
                if (!token) continue;

                func(token);
            }
        }
    }
}
