import type { LineObj } from './lineObj.ts';
import type Token from './tokens/base.ts';

export class GameBoard {
    public tokens: Token[][] = [];
    public lines: LineObj[] = [];
}
