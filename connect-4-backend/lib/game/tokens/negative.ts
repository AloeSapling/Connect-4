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
        const col = this.column;
        const row = this.row;

        this.doAround(gameBoard, (token: Token) => {
            if (token.playerID !== this.playerID) {
                token.removeCountEffect(gameBoard, this.countEffectName);
            }
        });

        super.remove(gameBoard);

        this.removeSelfFromLines(gameBoard);

        NegativeToken.activeInstanceIndexes = Token.removeFromActiveInstances(NegativeToken.activeInstanceIndexes, col, row);
    }

    place(gameBoard: GameBoard, newRow: number, newColumn: number): Coordinate {
        super.place(gameBoard, newRow, newColumn);

        this.addSelfToLines(gameBoard);

        // Add this token to the list of active indexes
        NegativeToken.activeInstanceIndexes.push([this.column, this.row]);

        return [newColumn, newRow];
    }

    tickTurn(gameBoard: GameBoard) {
        this.doAround(gameBoard, (token: Token) => {
            if (token.playerID !== this.playerID) {
                token.addCountEffect(gameBoard, this.countEffectName, this.countEffectValue);
            }
        });
    }
}
