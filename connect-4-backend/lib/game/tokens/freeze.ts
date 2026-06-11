import { TOKEN_FREEZE_TURNS } from '../../../config.ts';
import { P_ChangeTokenActions, P_TokenTypes, type TTokenTypes } from '../../types.ts';
import type { GameBoard } from '../gameBoard.ts';
import type { Coordinate } from '../types.js';
import Token from './base.ts';

export class FreezeToken extends Token {
    public type: TTokenTypes = P_TokenTypes.TOKEN_TYPES_FREEZE;
    public count: number = 1;

    /** The amount of turns left until the column gets unfrozen */
    public turnsUntilUnfreeze: number = -1;

    static {
        Token.register(P_TokenTypes.TOKEN_TYPES_FREEZE, FreezeToken.prototype);
    }

    remove(gameBoard: GameBoard) {
        const col = this.column;
        const row = this.row;

        super.remove(gameBoard);

        if (this.turnsUntilUnfreeze > 0) this.unfreezeAllTokens(gameBoard);

        const instances = gameBoard.activeInstances[P_TokenTypes.TOKEN_TYPES_FREEZE];
        if (instances) {
            gameBoard.activeInstances[P_TokenTypes.TOKEN_TYPES_FREEZE] = Token.removeFromActiveInstances(instances, col, row);
        }
    }

    place(gameBoard: GameBoard, newRow: number, newColumn: number): Coordinate {
        super.place(gameBoard, newRow, newColumn);

        this.freezeAllTokens(gameBoard);

        // Add this token to the list of active indexes
        const instances = (gameBoard.activeInstances[P_TokenTypes.TOKEN_TYPES_FREEZE] ??= []);
        instances.push([this.column, this.row]);

        return [newColumn, newRow];
    }

    /** Freezes all the tokens in the column of this token */
    freezeAllTokens(gameBoard: GameBoard) {
        this.turnsUntilUnfreeze = TOKEN_FREEZE_TURNS;

        for (let i = 0; i < gameBoard.tokens.length; i++) {
            if (i === this.row) continue;

            const tokenRow = gameBoard.tokens[i];

            const token = tokenRow![this.column];
            if (!token) continue;

            gameBoard.frozenColumns[this.column] = true;

            // Makes the empty tokens count as filled
            if (token.type === P_TokenTypes.TOKEN_TYPES_UNSPECIFIED) token.type = P_TokenTypes.TOKEN_TYPES_FROZEN;
        }

        this.addToChangeTilesList(gameBoard, P_ChangeTokenActions.CHANGE_TOKENS_ACTIONS_FREEZE_FROZE);
    }

    /** Unfreezes all the tokens in the column of this token */
    unfreezeAllTokens(gameBoard: GameBoard) {
        for (let i = 0; i < gameBoard.tokens.length; i++) {
            if (i === this.row) continue;

            const tokenRow = gameBoard.tokens[i];

            const token = tokenRow![this.column];
            if (!token) continue;

            gameBoard.frozenColumns[this.column] = false;

            // Makes the empty tokens count as empty again
            if (token.type === P_TokenTypes.TOKEN_TYPES_FROZEN) token.type = P_TokenTypes.TOKEN_TYPES_UNSPECIFIED;
        }

        Token.fallTokens(gameBoard, this.column);

        this.addToChangeTilesList(gameBoard, P_ChangeTokenActions.CHANGE_TOKENS_ACTIONS_FREEZE_UNFROZE);
    }

    tickTurn(gameBoard: GameBoard) {
        if (this.turnsUntilUnfreeze < 0) return;

        console.log(this.turnsUntilUnfreeze);

        if (this.turnsUntilUnfreeze === 0) {
            this.unfreezeAllTokens(gameBoard);
        }

        this.turnsUntilUnfreeze--;
    }
}
