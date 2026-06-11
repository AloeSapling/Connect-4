import { P_TokenTypes, type TPlayerIDs, type TTokenTypes } from "../../types.ts";
import { StandardToken } from "./regular.ts";
import { EmptyToken } from "./empty.ts";
import type Token from "./base.ts";
import { AuraToken } from "./aura.ts";
import { BurnToken } from "./burn.ts";
import { NegativeToken } from "./negative.ts";
import { FreezeToken } from "./freeze.ts";
import { ReverseToken } from "./reverse.ts";
import { BombToken } from "./bomb.ts";
import type { GameBoard } from "../gameBoard.ts";

export class TokenFactory {
    static createToken(tokenType: TTokenTypes, playerID?: TPlayerIDs, gameBoard?: GameBoard): Token {
        switch (tokenType) {
            case P_TokenTypes.TOKEN_TYPES_STANDARD:
                return new StandardToken(playerID);
            case P_TokenTypes.TOKEN_TYPES_NEGATIVE:
                return new NegativeToken(playerID, undefined, gameBoard);
            case P_TokenTypes.TOKEN_TYPES_AURA:
                return new AuraToken(playerID, undefined, gameBoard);
            case P_TokenTypes.TOKEN_TYPES_BURN:
                return new BurnToken(playerID);
            case P_TokenTypes.TOKEN_TYPES_FREEZE:
                return new FreezeToken(playerID);
            case P_TokenTypes.TOKEN_TYPES_REVERSE:
                return new ReverseToken(playerID);
            case P_TokenTypes.TOKEN_TYPES_BOMB:
                return new BombToken(playerID);

            default:
                return new EmptyToken();
        }
    }
}
