import { P_TokenTypes } from '../../types.ts';
import Token from './base.ts';

export class EmptyToken extends Token {
    static {
        Token.register(P_TokenTypes.TOKEN_TYPES_UNSPECIFIED, EmptyToken.prototype);
    }

    remove() { }
    tickTurn() { }
}
