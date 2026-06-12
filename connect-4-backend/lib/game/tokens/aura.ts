import { P_TokenTypes, type TPlayerIDs, type TTokenTypes } from '../../types.ts';
import type { GameBoard } from '../gameBoard.ts';
import type { Coordinate } from '../types.ts';
import Token from './base.ts';

export class AuraToken extends Token {
    public type: TTokenTypes = P_TokenTypes.TOKEN_TYPES_AURA;
    public count: number = 0;

    private countEffectName: string;
    private countEffectValue: number = 1;

    static {
        Token.register(P_TokenTypes.TOKEN_TYPES_AURA, AuraToken.prototype);
    }

    constructor(_playerID?: TPlayerIDs, _type?: TTokenTypes, _gameBoard?: GameBoard) {
        super(_playerID, _type);

        const counter = (_gameBoard?.instanceCounters.AuraToken ?? 0) + 1;
        if (_gameBoard) _gameBoard.instanceCounters.AuraToken = counter;
        this.countEffectName = `AuraToken_${counter}`;
    }

    remove(gameBoard: GameBoard) {
        const col = this.column;
        const row = this.row;

        this.removeSelfFromLines(gameBoard);

        this.doAround(gameBoard, (token: Token) => {
            if (token.playerID === this.playerID) {
                token.removeCountEffect(gameBoard, this.countEffectName);
            }
        });

        super.remove(gameBoard);

        const instances = gameBoard.activeInstances[P_TokenTypes.TOKEN_TYPES_AURA];
        if (instances) {
            gameBoard.activeInstances[P_TokenTypes.TOKEN_TYPES_AURA] = Token.removeFromActiveInstances(instances, col, row);
        }
    }

    place(gameBoard: GameBoard, newRow: number, newColumn: number): Coordinate {
        super.place(gameBoard, newRow, newColumn);

        this.addSelfToLines(gameBoard);

        // Add this token to the list of active indexes
        const instances = (gameBoard.activeInstances[P_TokenTypes.TOKEN_TYPES_AURA] ??= []);
        instances.push([this.column, this.row]);

        return [newColumn, newRow];
    }

    tickTurn(gameBoard: GameBoard) {
        this.doAround(gameBoard, (token: Token) => {
            if (token.playerID === this.playerID) {
                token.addCountEffect(gameBoard, this.countEffectName, this.countEffectValue);
            }
        });
    }

}
