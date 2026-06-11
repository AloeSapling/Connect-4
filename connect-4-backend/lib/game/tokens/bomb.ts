import { P_ChangeTokenActions, P_TokenTypes, type TTokenTypes } from '../../types.ts';
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
        const col = this.column;
        const row = this.row;

        super.remove(gameBoard);

        const instances = gameBoard.activeInstances[P_TokenTypes.TOKEN_TYPES_BOMB];
        if (instances) {
            gameBoard.activeInstances[P_TokenTypes.TOKEN_TYPES_BOMB] = Token.removeFromActiveInstances(instances, col, row);
        }
    }

    place(gameBoard: GameBoard, newRow: number, newColumn: number): Coordinate {
        super.place(gameBoard, newRow, newColumn);

        // Add this token to the list of active indexes
        const instances = (gameBoard.activeInstances[P_TokenTypes.TOKEN_TYPES_BOMB] ??= []);
        instances.push([this.column, this.row]);

        return [newColumn, newRow];
    }

    tickTurn(gameBoard: GameBoard) {
        this.doAround(gameBoard, (token: Token) => {
            gameBoard.deletedTiles.push({
                action: P_ChangeTokenActions.CHANGE_TOKENS_ACTIONS_BOMB_EXPLODED,
                tile: {
                    row: token.row,
                    column: token.column,
                    token: {
                        playerId: token.playerID,
                        tokenType: token.type,
                    },
                },
            });

            token.remove(gameBoard);
        });

        if (this.column > 0) Token.fallTokens(gameBoard, this.column - 1);

        if (this.column < gameBoard.tokens.length - 1) Token.fallTokens(gameBoard, this.column + 1);

        this.addToChangeTilesList(gameBoard, P_ChangeTokenActions.CHANGE_TOKENS_ACTIONS_BOMB_EXPLODED);

        gameBoard.deletedTiles.push({
            action: P_ChangeTokenActions.CHANGE_TOKENS_ACTIONS_BOMB_EXPLODED,
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
    }
}
