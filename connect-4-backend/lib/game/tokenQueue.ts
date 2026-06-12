import { randomInt } from "crypto";
import { P_PlayerIDs, P_TokenQueueModes, P_TokenTypes, type TokenQueueData, type TTokenTypes } from "../types.ts";
import { DEFAULT_SPECIAL_TOKEN_CHANCE, TOKEN_DECK_LENGTH } from "../../config.ts";
import type { models } from "../proto.js";

/** Gets the next token for this player when the mode is SPECIAL_EVERY
* @param every - This is the (amount of tokens - 1) that need to be played before creating another special token
* @param turn - The amount of turns game has gone on for
*/
export function getTokenForEvery(allowedTokens: TTokenTypes[], every: number, turn: number): TTokenTypes {
    if ((turn / 2 + 1) % every === 0)
        return generateRandomSpecialToken(allowedTokens);

    else return P_TokenTypes.TOKEN_TYPES_STANDARD;
}

/** Gets the next token for this player when the mode is FULL_RANDOM */
export function getTokenForFullRandom(allowedTokens: TTokenTypes[], specialTokenChance?: number): TTokenTypes {
    return generateRandomToken(allowedTokens, specialTokenChance);
}

/** Generates the tokens missing from the deck of tokens */
export function getTokensForDeck(allowedTokens: TTokenTypes[], currentDeck: TTokenTypes[], specialTokenChance?: number): TTokenTypes[] {
    const startingLength = currentDeck.length;
    for (let i = startingLength; i <= TOKEN_DECK_LENGTH; i++) {
        currentDeck.push(generateRandomToken(allowedTokens, specialTokenChance));
    }

    return currentDeck;
}

/** Creates the next turn's tokenQueueObj */
export function createNextTokenQueueObj(tokenQueueData: TokenQueueData, newTurn?: number): TokenQueueData {
    const tokenQueueObj: TokenQueueData = {
        mode: tokenQueueData.mode ?? P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED,
        allowedTokens: tokenQueueData.allowedTokens,
        every: tokenQueueData.every,
        turn: newTurn,
        specialTokenChance: tokenQueueData.specialTokenChance,
    }

    switch (tokenQueueData.mode) {
        case P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK:
            tokenQueueObj.decks = {
                [P_PlayerIDs.PLAYER_IDS_PLAYER1]: getTokensForDeck(
                    tokenQueueData.allowedTokens,
                    tokenQueueData.decks?.[P_PlayerIDs.PLAYER_IDS_PLAYER1] ?? [],
                    tokenQueueData.specialTokenChance
                ),
                [P_PlayerIDs.PLAYER_IDS_PLAYER2]: getTokensForDeck(
                    tokenQueueData.allowedTokens,
                    tokenQueueData.decks?.[P_PlayerIDs.PLAYER_IDS_PLAYER2] ?? [],
                    tokenQueueData.specialTokenChance
                ),
            }
            break;
        case P_TokenQueueModes.TOKEN_QUEUE_MODES_SPECIAL_EVERY:
            if (tokenQueueData.every && tokenQueueData.turn) {
                tokenQueueObj.tokens = {
                    [P_PlayerIDs.PLAYER_IDS_PLAYER1]: getTokenForEvery(tokenQueueData.allowedTokens, tokenQueueData.every, tokenQueueData.turn),
                    [P_PlayerIDs.PLAYER_IDS_PLAYER2]: getTokenForEvery(tokenQueueData.allowedTokens, tokenQueueData.every, tokenQueueData.turn)
                }
            } else {
                tokenQueueObj.tokens = {
                    [P_PlayerIDs.PLAYER_IDS_PLAYER1]: P_TokenTypes.TOKEN_TYPES_STANDARD,
                    [P_PlayerIDs.PLAYER_IDS_PLAYER2]: P_TokenTypes.TOKEN_TYPES_STANDARD,
                }
            }
            break;
        case P_TokenQueueModes.TOKEN_QUEUE_MODES_FULL_RANDOM:
            tokenQueueObj.tokens = {
                [P_PlayerIDs.PLAYER_IDS_PLAYER1]: getTokenForFullRandom(tokenQueueData.allowedTokens, tokenQueueData.specialTokenChance),
                [P_PlayerIDs.PLAYER_IDS_PLAYER2]: getTokenForFullRandom(tokenQueueData.allowedTokens, tokenQueueData.specialTokenChance),
            }
            break;
    }

    return tokenQueueObj;
}

function generateRandomSpecialToken(allowedTokens: TTokenTypes[]): TTokenTypes {
    // Filters token to make sure each token appears only once
    // Additionally filter out non-playable tokens and the regular token
    const filteredTokenTypes = [...new Set(allowedTokens)] // Filter repeats
        .filter(x => // Filter non-playable and regular
            x !== P_TokenTypes.TOKEN_TYPES_UNSPECIFIED &&
            x !== P_TokenTypes.TOKEN_TYPES_STANDARD &&
            x !== P_TokenTypes.TOKEN_TYPES_FROZEN
        );

    return filteredTokenTypes[randomInt(0, filteredTokenTypes.length)]!
}

function generateRandomToken(allowedTokens: TTokenTypes[], specialTokenChance?: number) {
    const tokenChance = randomInt(0, 100);
    const threshold = specialTokenChance ?? DEFAULT_SPECIAL_TOKEN_CHANCE;

    if (tokenChance < threshold) return generateRandomSpecialToken(allowedTokens);

    return P_TokenTypes.TOKEN_TYPES_STANDARD;
}
