import { P_ChangeTokenActions, P_PlayerIDs, P_TokenTypes, type TPlayerIDs, type TTokenTypes } from '../../types.ts';
import type { GameBoard } from '../gameBoard.ts';
import type { Coordinate } from '../types.js';
import Token from './base.ts';

export class BurnToken extends Token {
    public type: TTokenTypes = P_TokenTypes.TOKEN_TYPES_BURN;
    public count: number = 0;

    static activeInstanceIndexes: Coordinate[] = [];

    static {
        Token.register(P_TokenTypes.TOKEN_TYPES_BURN, BurnToken.prototype);
    }

    constructor(_playerID?: TPlayerIDs, _type?: TTokenTypes) {
        super(_playerID, _type);

        this.playerID = P_PlayerIDs.PLAYER_IDS_UNSPECIFIED;
    }

    remove(gameBoard: GameBoard) {
        const col = this.column;
        const row = this.row;

        super.remove(gameBoard);

        BurnToken.activeInstanceIndexes = Token.removeFromActiveInstances(BurnToken.activeInstanceIndexes, col, row);
    }

    place(gameBoard: GameBoard, newRow: number, newColumn: number): Coordinate {
        super.place(gameBoard, newRow, newColumn);

        // Add this token to the list of active indexes
        BurnToken.activeInstanceIndexes.push([this.column, this.row]);

        return [newColumn, newRow];
    }

    tickTurn(gameBoard: GameBoard) {
        if (this.isFrozen || this.row >= gameBoard.tokens.length) return;

        if (this.row <= 0) {
            this.remove(gameBoard);

            this.addToChangeTilesList(P_ChangeTokenActions.CHANGE_TOKEN_ACTIONS_BURN_BURNED_UP);
            return;
        }

        // Destroy the token below this one
        const belowRow = gameBoard.tokens[this.row - 1];
        if (belowRow) {
            const belowToken = belowRow[this.column];
            if (belowToken) {
                belowToken.remove(gameBoard);
            }
        }

        const startRow = this.row;

        for (let i = 0; i < gameBoard.tokens.length; i++) {
            if (startRow + i >= gameBoard.tokens.length) break;

            const tokenRow = gameBoard.tokens[startRow + i];
            const token = tokenRow![this.column];

            token?.move(gameBoard, startRow + i - 1, this.column);
        }

        this.addToChangeTilesList(P_ChangeTokenActions.CHANGE_TOKEN_ACTIONS_BURN_DESTROY);
    }
}
