import { P_TokenTypes, type TPlayerIDs, type TTokenTypes } from "../../types.ts";
import { StandardToken } from "./regular.ts";
import { EmptyToken } from "./empty.ts";
import type Token from "./base.ts";
import { AuraToken } from "./aura.ts";

export class TokenFactory {
    static createToken(tokenType: TTokenTypes, playerID?: TPlayerIDs): Token {
        switch (tokenType) {
            case P_TokenTypes.TOKEN_TYPES_STANDARD:
                return new StandardToken(playerID);
            case P_TokenTypes.TOKEN_TYPES_NEGATIVE:
                return new AuraToken(playerID);
            case P_TokenTypes.TOKEN_TYPES_AURA:
                return new AuraToken(playerID);
            default:
                return new EmptyToken();
        }
    }
}
