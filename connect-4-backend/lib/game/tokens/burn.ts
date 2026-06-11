import { P_ChangeTokenActions, P_PlayerIDs, P_TokenTypes, type TPlayerIDs, type TTokenTypes } from '../../types.ts';
import type { GameBoard } from '../gameBoard.ts';
import type { Coordinate } from '../types.js';
import Token from './base.ts';

export class BurnToken extends Token {
    public type: TTokenTypes = P_TokenTypes.TOKEN_TYPES_BURN;
    public count: number = 0;

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

        const instances = gameBoard.activeInstances[P_TokenTypes.TOKEN_TYPES_BURN];
        if (instances) {
            gameBoard.activeInstances[P_TokenTypes.TOKEN_TYPES_BURN] = Token.removeFromActiveInstances(instances, col, row);
        }
    }

    place(gameBoard: GameBoard, newRow: number, newColumn: number): Coordinate {
        super.place(gameBoard, newRow, newColumn);

        // Add this token to the list of active indexes
        const instances = (gameBoard.activeInstances[P_TokenTypes.TOKEN_TYPES_BURN] ??= []);
        instances.push([this.column, this.row]);

        return [newColumn, newRow];
    }

    tickTurn(gameBoard: GameBoard) {
        if (this.isFrozen || this.row >= gameBoard.tokens.length) return;

        if (this.row <= 0) {
            gameBoard.deletedTiles.push({
                action: P_ChangeTokenActions.CHANGE_TOKEN_ACTIONS_BURN_BURNED_UP,
                tile: {
                    row: this.row,
                    column: this.column,
                    token: {
                        playerId: this.playerID,
                        tokenType: this.type,
                    },
                },
            });

            this.remove(gameBoard);

            this.addToChangeTilesList(gameBoard, P_ChangeTokenActions.CHANGE_TOKEN_ACTIONS_BURN_BURNED_UP);
            return;
        }

        // Destroy the token below this one
        const belowRow = gameBoard.tokens[this.row - 1];
        if (belowRow) {
            const belowToken = belowRow[this.column];
            if (belowToken) {
                gameBoard.deletedTiles.push({
                    action: P_ChangeTokenActions.CHANGE_TOKEN_ACTIONS_BURN_DESTROY,
                    tile: {
                        row: belowToken.row,
                        column: belowToken.column,
                        token: {
                            playerId: belowToken.playerID,
                            tokenType: belowToken.type,
                        },
                    },
                });

                belowToken.remove(gameBoard);
            }
        }

        Token.fallTokens(gameBoard, this.column);

        this.addToChangeTilesList(gameBoard, P_ChangeTokenActions.CHANGE_TOKEN_ACTIONS_BURN_DESTROY);
    }
}
