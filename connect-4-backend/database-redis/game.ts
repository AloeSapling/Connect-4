import { redis } from '../app.ts';
import { GAME_COLUMNS, GAME_ROWS, LOBBY_KEEP_ALIVE_TIME } from '../config.ts';
import { CodedError, P_ErrorCodes, P_PlayerIDs, P_TokenQueueModes, P_TokenTypes, type TPlayerIDs, type TTokenTypes, type TokenQueueData } from '../lib/types.ts';
import { getPartialUserDataByPlayerID } from '../database-sqllite/lobbyMembers.ts';
import type { models } from '../lib/proto.js';
import Token from '../lib/game/tokens/base.ts';
import { getNextPlayer } from '../lib/game/lib.ts';
import type { GameData } from '../lib/game/types.ts';
import { GameBoard } from '../lib/game/gameBoard.ts';
import { TokenFactory } from '../lib/game/tokens/tokenFactory.ts';
import { createNextTokenQueueObj, getTokenForFullRandom, getTokensForDeck } from '../lib/game/tokenQueue.ts';

/** The list of tokens used to instantiate the initial game board */
const initialTokens: Token[][] = [];
for (let i = 0; i < GAME_ROWS; i++) {
    initialTokens[i] = Array.from({ length: GAME_COLUMNS }, () => TokenFactory.createToken(P_TokenTypes.TOKEN_TYPES_UNSPECIFIED));
}

/** The board used when creating a new game */
const initialBoard: GameBoard = new GameBoard(initialTokens);

/** The game state used when creating a new game */
const initialGameData: GameData = {
    board: initialBoard,
    turn: P_PlayerIDs.PLAYER_IDS_PLAYER1,
};

/** Create a new game using the provided lobby code
 * @throws Error code "GameAlreadyExists"
 * */
export async function createGame(lobbyCode: string, settings: models.ILobbySettings) {
    // Don't accidentally overwrite an existing game
    if (await gameExists(lobbyCode)) throw new CodedError(P_ErrorCodes.ERROR_CODES_GAME_ALREADY_EXISTS);

    await redis.set(
        `GameData_${lobbyCode}:board`,
        JSON.stringify(initialGameData.board) // Set initial board state
    );
    await redis.set(`GameData_${lobbyCode}:turn`, initialGameData.turn);

    // This entry is used to handle the game expiration logic
    // Games expire when they don't receive any moves for a certain amount of time
    // Letting the game expire on your turn is treated the same as forfeiting
    // The time for each turn is stored inside of the entry so that the expiration can be reset later
    await redis.set(`GameData_${lobbyCode}:turnTime`, settings.turnTime || 0, {
        EX: settings.turnTime || 0, // In seconds
    });

    if (settings.specialGamemode && settings.tokenQueueMode) {
        const tokenQueueObj = createNextTokenQueueObj({
            mode: settings.tokenQueueMode,
            allowedTokens: settings.allowedTokens ?? [],
            every: settings.every ?? undefined
        }, 0);

        // Holds the data about the tokenQueue - mode, allowed tokens and the tokens playable each turn
        await redis.set(`GameData_${lobbyCode}:tokenQueue`, JSON.stringify(tokenQueueObj));
    }
}

/** Checks if a game exists for the given lobby */
export async function gameExists(lobbyCode: string): Promise<boolean> {
    return (
        Boolean(await redis.exists(`GameData_${lobbyCode}:board`)) &&
        Boolean(await redis.exists(`GameData_${lobbyCode}:turn`)) &&
        Boolean(await redis.exists(`GameData_${lobbyCode}:turnTime`))
    );
}

/** Checks if a game exist for each lobby code in the list
 *
 * @returns A list where each value indicates if a game exists for the code at the same index in the provided list of code
 * */
export async function gamesExist(lobbyCodes: string[]): Promise<boolean[]> {
    const transaction = redis.multi();

    lobbyCodes.forEach((code) => {
        transaction.exists(`GameData_${code}:board`);
        transaction.exists(`GameData_${code}:turn`);
        transaction.exists(`GameData_${code}:turnTime`);
    });

    const results = (await transaction.exec()) as unknown as [Error | null, number][];

    return lobbyCodes.map((_, i) => {
        const base = i * 3;
        return results[base]?.[1] === 1 && results[base + 1]?.[1] === 1 && results[base + 2]?.[1] === 1;
    });
}

/** Deletes all data associated with the game in the redis storage */
export async function deleteGame(lobbyCode: string) {
    await redis.del(`GameData_${lobbyCode}:board`);
    await redis.del(`GameData_${lobbyCode}:turn`);
    await redis.del(`GameData_${lobbyCode}:turnTime`);
    await redis.del(`GameData_${lobbyCode}:tokenQueue`);
}

/** Deletes the game and starts a timer to delete the associated lobby
 *
 * The lobby's deletion is aborted if the host joins back into the lobby
 * */
export async function endGame(lobbyCode: string) {
    await deleteGame(lobbyCode);

    // Use watch + transactions for entry locking
    await redis.watch(`Lobby_${lobbyCode}:expireTimer`);

    const transaction = redis.multi();

    // Keep lobby alive for some time after the game ends
    transaction.set(`Lobby_${lobbyCode}:expireTimer`, 1, {
        EX: LOBBY_KEEP_ALIVE_TIME, // In seconds
    });

    transaction.exec();
}

/** Forfeits the game as the provided player in the given lobby
 * @param playerID - The playerID of the forfeiting player
 * @returns A tuple containing partial user data of the winner and loser. In that order
 * */
export async function forfeitGame(lobbyCode: string, playerID: TPlayerIDs): Promise<[models.IPartialUser, models.IPartialUser]> {
    const winner = await getPartialUserDataByPlayerID(lobbyCode, getNextPlayer(playerID));
    const loser = await getPartialUserDataByPlayerID(lobbyCode, playerID);

    await endGame(lobbyCode);

    return [winner, loser];
}

/** @returns The game's state
 * @throws Error code "GameExpired" if game wasn't found
 * @throws Error code "ServerError"
 * */
export async function getGameData(lobbyCode: string): Promise<GameData> {
    const board = await redis.get(`GameData_${lobbyCode}:board`);
    const turn = await redis.get(`GameData_${lobbyCode}:turn`);

    const tokenQueue = await redis.get(`GameData_${lobbyCode}:tokenQueue`);

    if (!board || !turn) throw new CodedError(P_ErrorCodes.ERROR_CODES_GAME_EXPIRED);

    try {
        const boardData = GameBoard.revive(JSON.parse(board));
        const turnData = Number(turn) as TPlayerIDs;
        const tokenQueueData = tokenQueue ? JSON.parse(tokenQueue) as TokenQueueData : undefined;

        return {
            board: boardData,
            turn: turnData,
            tokenQueue: tokenQueueData
        };
    } catch {
        throw new CodedError(P_ErrorCodes.ERROR_CODES_SERVER_ERROR);
    }
}

/** Saves the game's full state to redis */
export async function saveGameData(lobbyCode: string, gameBoard: GameBoard, nextTurn: TPlayerIDs, tokenQueueData?: TokenQueueData) {
    const transaction = redis.multi();

    try {
        transaction.set(`GameData_${lobbyCode}:board`, JSON.stringify(gameBoard));
    } catch {
        throw new CodedError(P_ErrorCodes.ERROR_CODES_SERVER_ERROR);
    }

    transaction.set(`GameData_${lobbyCode}:turn`, nextTurn);

    const turnTime = Number(await redis.get(`GameData_${lobbyCode}:turnTime`));
    transaction.set(`GameData_${lobbyCode}:turnTime`, turnTime || 0, {
        EX: turnTime || 0,
    });

    if (tokenQueueData) {
        transaction.set(`GameData_${lobbyCode}:tokenQueue`, JSON.stringify(tokenQueueData));
    }

    if (transaction.exec() === null) throw new CodedError(P_ErrorCodes.ERROR_CODES_GAME_LOCKED);
}

/** Performs the tick-turn effects when a turn ends */
async function endTurn(lobbyCode: string, gameBoard: GameBoard, currentTurn: TPlayerIDs, tokenQueueData?: TokenQueueData) {
    // ** Game board updates

    /** A list of tokens that have an effect triggered every time the round ends
     * The list is comprised in the order that the effects are meant to trigger
     * */
    const tokenTypesWithTurnTick = [P_TokenTypes.TOKEN_TYPES_BOMB, P_TokenTypes.TOKEN_TYPES_FREEZE, P_TokenTypes.TOKEN_TYPES_BURN, P_TokenTypes.TOKEN_TYPES_NEGATIVE, P_TokenTypes.TOKEN_TYPES_AURA];
    const tokenIndexesWithTurnTick = tokenTypesWithTurnTick.map((type) => gameBoard.activeInstances[type] ?? []);

    tokenIndexesWithTurnTick.forEach((instanceIndexes) => {
        const sortedCoords = Token.sortTokensSequentially(instanceIndexes);

        for (const coord of sortedCoords) {
            const tokenRow = gameBoard.tokens[coord[1]];
            if (!tokenRow) continue;

            const token = tokenRow[coord[0]];
            if (!token) continue;

            token.tickTurn(gameBoard);
        }
    });

    // ** Clear transient data before saving to Redis so it doesn't accumulate

    gameBoard.resetFallingTokens();
    gameBoard.deletedTiles = [];
    gameBoard.resetChangeTilesList();
    gameBoard.resetChangedLines();

    // **

    const nextTokenQueueData = tokenQueueData
        ? createNextTokenQueueObj(tokenQueueData, tokenQueueData.turn ? tokenQueueData.turn + 1 : undefined)
        : undefined;

    await saveGameData(lobbyCode, gameBoard, getNextPlayer(currentTurn), nextTokenQueueData);

    return nextTokenQueueData;
}

export type InsertTokenResult = {
    row: number;
    board: GameBoard;
    tokenQueue: TokenQueueData | undefined;
};

/** Takes in the selected column and calculates the game's state after inserting a token in that column.
 *
 * Automatically calculates which cell it will fall into
 * @param playerID - The identifier of the player who performed the move
 * @param tokenType - The type of token inserted into the column
 * @returns The row, game board, and token queue data
 * @throws Error code "BadData" if the column provided is invalid
 * @throws Error code "BadTurn" if it's not this player's turn
 * @throws Error code "GameExpired" if there was an error getting the game's state
 * @throws Error code "GameLocked"
 * @throws Error code "ServerError"
 * */
export async function insertToken(
    lobbyCode: string,
    column: number,
    playerID: TPlayerIDs,
    tokenType?: TTokenTypes
): Promise<InsertTokenResult> {
    if (column < 0 || column > GAME_COLUMNS - 1) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

    const turnTime = await redis.get(`GameData_${lobbyCode}:turnTime`);
    if (!turnTime) throw new CodedError(P_ErrorCodes.ERROR_CODES_GAME_EXPIRED);

    // Watch for changes to implement entry locking
    await redis.watch(`GameData_${lobbyCode}:board`);
    await redis.watch(`GameData_${lobbyCode}:turn`);

    const board = await redis.get(`GameData_${lobbyCode}:board`);
    const turn = await redis.get(`GameData_${lobbyCode}:turn`);
    const tokenQueue = await redis.get(`GameData_${lobbyCode}:tokenQueue`);

    try {
        /// ** Initial validation

        // Exit early if there was an error getting the board or turn
        if (!board || !turn) throw new CodedError(P_ErrorCodes.ERROR_CODES_GAME_EXPIRED);

        // Make sure it's this player's turn
        const turnData = Number(turn) as TPlayerIDs;
        if (turnData !== playerID) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_TURN);

        let boardData: GameBoard;
        try {
            boardData = GameBoard.revive(JSON.parse(board));
        } catch {
            throw new CodedError(P_ErrorCodes.ERROR_CODES_SERVER_ERROR);
        }

        const tokenQueueData = tokenQueue ? JSON.parse(tokenQueue) as TokenQueueData : undefined;
        /// **

        /// ** Tile insertion logic

        let i = boardData.tokens.length - 1;
        // Find the height of the lowest open cell in this column
        while (i >= 0 && boardData.tokens[i]?.[column]?.type === P_TokenTypes.TOKEN_TYPES_UNSPECIFIED) {
            i--;
        }
        i++; // i is the highest *non*-empty position. Shift it up to the lowest *empty* position

        // i >= boardData.length means that there are no empty cells in this column,
        // This means an invalid input was given, so just exit early
        if (i >= boardData.tokens.length) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

        // Create a new token and add it to the game board
        let token: Token;
        if (tokenQueueData) {
            if (!tokenType) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

            // Validates if the player can place this token
            if (tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK) {
                if (!tokenQueueData.decks) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_SETUP);

                const tmpIdx = tokenQueueData.decks[playerID]?.findIndex((val) => val === tokenType);
                if (tmpIdx === -1 || tmpIdx === undefined) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_TOKEN);

                // Remove this token from this player's deck of token
                tokenQueueData.decks[playerID]?.splice(tmpIdx, 1);
            } else if (tokenQueueData.mode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED) {
                if (!tokenQueueData.tokens) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_SETUP);

                if (tokenQueueData.tokens[playerID] !== tokenType) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_TOKEN);
            }

            token = TokenFactory.createToken(tokenType, playerID, boardData);
        } else {
            token = TokenFactory.createToken(P_TokenTypes.TOKEN_TYPES_STANDARD, playerID, boardData);
        }

        const tokenCoord = token.place(boardData, i, column);

        // ** Save transient data before endTurn clears it

        const fallingTokens = boardData.fallingTokens;
        const deletedTiles = boardData.deletedTiles;
        const changeTilesList = boardData.changeTilesList;
        const changedLines = boardData.changedLines;

        const nextTokenQueueData = await endTurn(lobbyCode, boardData, playerID, tokenQueueData);

        // Restore transient data so the caller can send it to the frontend
        boardData.fallingTokens = fallingTokens;
        boardData.deletedTiles = deletedTiles;
        boardData.changeTilesList = changeTilesList;
        boardData.changedLines = changedLines;

        return {
            row: tokenCoord[1],
            board: boardData,
            tokenQueue: nextTokenQueueData,
        };
    } finally {
        // Unwatch to prevent the locking detection from leaking into the next request
        await redis.unwatch();
    }
}
