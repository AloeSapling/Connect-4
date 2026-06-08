import type { LineObj } from './lineObj.ts';
import type Token from './tokens/base.ts';

export class GameBoard {
    public tokens: Token[][] = [];
    public lines: LineObj[] = [];

    constructor(_tokens?: Token[][], _lines?: LineObj[]) {
        if (_tokens) this.tokens = _tokens;
        if (_lines) this.lines = _lines;
    }
}
