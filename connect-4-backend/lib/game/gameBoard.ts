import type { models, ws } from '../proto.js';
import { LineObj } from './lineObj.ts';
import Token from './tokens/base.ts';
import type { ChangeTile, Coordinate } from './types.ts';

export class GameBoard {
    public tokens: Token[][] = [];
    public lines: LineObj[] = [];
    public fallingTokens: ws.IFallingToken[] = [];
    public changeTilesList: ChangeTile[] = [];
    public changedLines: number[] = [];
    public activeInstances: Record<number, Coordinate[]> = {};
    public instanceCounters: Record<string, number> = {};
    public deletedTiles: { action: models.ChangeTokenActions; tile: models.ITile }[] = [];

    constructor(_tokens?: Token[][], _lines?: LineObj[]) {
        if (_tokens) this.tokens = _tokens;
        if (_lines) this.lines = _lines;
    }

    static revive(data: GameBoard): GameBoard {
        Object.setPrototypeOf(data, GameBoard.prototype);

        for (const row of data.tokens) {
            for (const token of row) {
                const proto = Token.getPrototype(token.type);
                if (proto) Object.setPrototypeOf(token, proto);
            }
        }

        for (const line of data.lines) {
            Object.setPrototypeOf(line, LineObj.prototype);
        }

        return data;
    }

    public resetFallingTokens() {
        this.fallingTokens = [];
    }

    public resetChangeTilesList() {
        this.changeTilesList = [];
    }

    public resetChangedLines() {
        this.changedLines = [];
    }
}
