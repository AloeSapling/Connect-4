import { LineObj } from './lineObj.ts';
import Token from './tokens/base.ts';

export class GameBoard {
    public tokens: Token[][] = [];
    public lines: LineObj[] = [];

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
}
