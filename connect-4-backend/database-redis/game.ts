import { redis } from '../app.ts';
import { GAME_COLUMNS, GAME_ROWS, LOBBY_KEEP_ALIVE_TIME } from '../config.ts';
import { CodedError, P_ErrorCodes, P_PlayerIDs, P_TokenTypes, type TPlayerIDs, type TTokenTypes } from '../lib/types.ts';
import { getPartialUserDataByPlayerID } from '../database-sqllite/lobbyMembers.ts';
import type { models } from '../lib/proto.js';
import Token from '../lib/game/tokens/base.ts';
import { getNextPlayer } from '../lib/game/lib.ts';
import type { GameData } from '../lib/game/types.ts';
import { GameBoard } from '../lib/game/gameBoard.ts';
import { TokenFactory } from '../lib/game/tokens/tokenFactory.ts';

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

    if (!board || !turn) throw new CodedError(P_ErrorCodes.ERROR_CODES_GAME_EXPIRED);

    try {
        const boardData = GameBoard.revive(JSON.parse(board));
        const turnData = Number(turn) as TPlayerIDs;

        return {
            board: boardData,
            turn: turnData,
        };
    } catch {
        throw new CodedError(P_ErrorCodes.ERROR_CODES_SERVER_ERROR);
    }
}

/** Performs all the actions that happen whenever a turn ends */
async function endTurn(lobbyCode: string, gameBoard: GameBoard, currentTurn: TPlayerIDs) {
    for (let i = 0; i < gameBoard.tokens.length; i++) {
        for (let j = 0; j < (gameBoard.tokens[i]?.length || 0); j++) {
            gameBoard.tokens[i]?.[j]?.tickTurn(gameBoard);
        }
    }

    /// ** Redis database update

    // Use a transaction with .exec() to handle locking redis entries
    const transaction = redis.multi();

    try {
        transaction.set(`GameData_${lobbyCode}:board`, JSON.stringify(gameBoard));
    } catch {
        throw new CodedError(P_ErrorCodes.ERROR_CODES_SERVER_ERROR);
    }

    // Set the next player's turn
    // Sets it to the next playerID in the list of playerIDs. The fallback if something goes wrong is the first element
    transaction.set(`GameData_${lobbyCode}:turn`, getNextPlayer(currentTurn));

    // Reset the game's expiry timer
    const turnTime = Number(await redis.get(`GameData_${lobbyCode}:turnTime`)); // The time for each turn is stored inside of the entry
    transaction.set(`GameData_${lobbyCode}:turnTime`, turnTime || 0, {
        EX: turnTime || 0,
    });

    if (transaction.exec() === null) throw new CodedError(P_ErrorCodes.ERROR_CODES_GAME_LOCKED);

    /// **
}

/** Takes in the selected column and calculates the game's state after inserting a token in that column.
 *
 * Automatically calculates which cell it will fall into
 * @param playerID - The identifier of the player who performed the move
 * @param tokenType - The type of token inserted into the column
 * @returns The row where the tile ended up
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
    tokenType: TTokenTypes
): Promise<number> {
    if (column < 0 || column > GAME_COLUMNS - 1) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

    // Watch for changes to implement entry locking
    await redis.watch(`GameData_${lobbyCode}:board`);
    await redis.watch(`GameData_${lobbyCode}:turn`);

    const board = await redis.get(`GameData_${lobbyCode}:board`);
    const turn = await redis.get(`GameData_${lobbyCode}:turn`);

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

        /// **

        /// ** Tile insertion logic

        let i = boardData.tokens.length - 1;
        // Find the height of the lowest open cell in this column
        while (i >= 0 && boardData.tokens[i]?.[column]?.playerID === P_PlayerIDs.PLAYER_IDS_UNSPECIFIED) {
            console.log(boardData.tokens[i]?.[column]);
            i--;
        }
        i++; // i is the highest *non*-empty position. Shift it up to the lowest *empty* position

        // i >= boardData.length means that there are no empty cells in this column,
        // This means an invalid input was given, so just exit early
        if (i >= boardData.tokens.length) throw new CodedError(P_ErrorCodes.ERROR_CODES_SERVER_ERROR);

        // Create a new token and add it to the game board
        const token = TokenFactory.createToken(tokenType, playerID);
        token.place(boardData, i, column);

        console.log(token);

        // **

        await endTurn(lobbyCode, boardData, playerID);

        return i;
    } finally {
        // Unwatch to prevent the locking detection from leaking into the next request
        await redis.unwatch();
    }
}
