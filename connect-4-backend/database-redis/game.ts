import { redis } from '../app.ts';
import { GAME_COLUMNS, GAME_EXPIRY_TIME, GAME_ROWS } from '../config.ts';
import {
    CodedError,
    P_ErrorCodes,
    P_PlayerIDs,
    type GameBoard,
    type GameRow,
    type GameState,
    type TPlayerIDs,
} from '../lib/types.ts';
import { getNextPlayer } from '../lib/lib.ts';

/** The game state used when creating a new game */
const initialGameState: GameState = {
    board: {
        rows: Array.from({ length: GAME_ROWS }, () => ({
            columns: Array.from({ length: GAME_COLUMNS }, () => P_PlayerIDs.PLAYER_IDS_UNSPECIFIED),
        })),
    },
    turn: P_PlayerIDs.PLAYER_IDS_PLAYER1,
};

/** Create a new game using the provided lobby code
 * @throws Error code "GameAlreadyExists"
 * */
export async function createGame(lobbyCode: string) {
    // Don't accidentally overwrite an existing game
    if (await gameExists(lobbyCode)) throw new CodedError(P_ErrorCodes.ERROR_CODES_GAME_ALREADY_EXISTS);

    await redis.set(
        `GameState_${lobbyCode}:board`,
        JSON.stringify(initialGameState.board), // Set initial board state
        {
            EX: GAME_EXPIRY_TIME, // In seconds
        }
    );
    await redis.set(`GameState_${lobbyCode}:turn`, initialGameState.turn, {
        EX: GAME_EXPIRY_TIME, // In seconds
    });
}

/** Checks if a game exists for the given lobby */
export async function gameExists(lobbyCode: string): Promise<boolean> {
    return (
        (await redis.exists(`GameState_${lobbyCode}:board`)) === 1 && (await redis.exists(`GameState_${lobbyCode}:turn`)) === 1
    );
}

/** Checks if a game exist for each lobby code in the list
 *
 * @returns A list where each value indicates if a game exists for the code at the same index in the provided list of code
 * */
export async function gamesExist(lobbyCodes: string[]): Promise<boolean[]> {
    const pipeline = redis.multi();

    lobbyCodes.forEach((code) => {
        pipeline.exists(`GameState_${code}:board`);
        pipeline.exists(`GameState_${code}:turn`);
    });

    const res = (await pipeline.exec()) as unknown as [Error | null, number][];

    return lobbyCodes.map((_, i) => {
        return Boolean(res[i * 2] && res[i * 2 + 1] && res[i * 2]![1] === 1 && res[i * 2 + 1]![1] === 1);
    });
}

/** Deletes all data associated with the game in the redis storage */
export async function deleteGame(lobbyCode: string) {
    await redis.del(`GameState_${lobbyCode}:board`);
    await redis.del(`GameState_${lobbyCode}:turn)`);
}

/** @returns The game's state
 * @throws Error code "GameExpired" if game wasn't found
 * @throws Error code "ServerError"
 * */
export async function getGameState(lobbyCode: string): Promise<GameState> {
    const board = await redis.get(`GameState_${lobbyCode}:board`);
    const turn = await redis.get(`GameState_${lobbyCode}:turn`);

    if (!board || !turn) throw new CodedError(P_ErrorCodes.ERROR_CODES_GAME_EXPIRED);

    if (await redis.exists(`GameState_${lobbyCode}:lock`)) throw new CodedError(P_ErrorCodes.ERROR_CODES_GAME_LOCKED);

    try {
        const boardData = (await JSON.parse(board)) as GameBoard;
        const turnData = Number(turn) as TPlayerIDs;

        return {
            board: boardData,
            turn: turnData,
        };
    } catch {
        throw new CodedError(P_ErrorCodes.ERROR_CODES_SERVER_ERROR);
    }
}

/** Takes in the selected column and calculates the game's state after inserting a tile in that column.
 *
 * Automatically calculates which cell it will fall into
 * @param playerID The identifier of the player who performed the move
 * @returns The row where the tile ended up
 * @throws Error code "BadData" if the column provided is invalid
 * @throws Error code "BadTurn" if it's not this player's turn
 * @throws Error code "GameExpired" if there was an error getting the game's state
 * @throws Error code "GameLocked"
 * @throws Error code "ServerError"
 * */
export async function insertTile(lobbyCode: string, playerID: TPlayerIDs, column: number): Promise<number> {
    if (column < 0 || column > GAME_COLUMNS - 1) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);
    if (await redis.exists(`GameState_${lobbyCode}:lock`)) throw new CodedError(P_ErrorCodes.ERROR_CODES_GAME_LOCKED);

    // Lock the game from being updated until the turn calculations finish
    await redis.set(`GameState_${lobbyCode}:lock`, '1', {
        EX: 5, // Expires in 5 seconds
    });

    const board = await redis.get(`GameState_${lobbyCode}:board`);
    const turn = await redis.get(`GameState_${lobbyCode}:turn`);

    // Exit early if there was an error getting the board or turn
    if (!board || !turn) {
        await redis.del(`GameState_${lobbyCode}:lock`);
        throw new CodedError(P_ErrorCodes.ERROR_CODES_GAME_EXPIRED);
    }

    // Make sure it's this player's turn
    const turnData = Number(turn) as TPlayerIDs;
    if (turnData !== playerID) {
        await redis.del(`GameState_${lobbyCode}:lock`);
        throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_TURN);
    }

    try {
        const boardData = (await JSON.parse(board)) as GameBoard;

        let i = boardData.rows.length - 1;
        // Find the height of the lowest open cell in this column
        while (i >= 0 && (boardData.rows[i] as GameRow).columns[column] === P_PlayerIDs.PLAYER_IDS_UNSPECIFIED) {
            i--;
        }
        i++; // i is the highest *non*-empty position. Shift it up to the lowest *empty* position

        // i === boardData.length means that there are no empty cells in this column,
        // This means an invalid input was given, so just exit early
        if (i === boardData.rows.length || !boardData.rows[i]) throw new CodedError(P_ErrorCodes.ERROR_CODES_SERVER_ERROR);

        // Update the cell
        (boardData.rows[i] as GameRow).columns[column] = playerID;

        await redis.set(`GameState_${lobbyCode}:board`, JSON.stringify(boardData));
        // Set the next player's turn
        // Sets it to the next playerID in the list of playerIDs. The fallback if something goes wrong is the first element
        await redis.set(`GameState_${lobbyCode}:turn`, getNextPlayer(playerID));

        return i;
    } catch {
        throw new CodedError(P_ErrorCodes.ERROR_CODES_SERVER_ERROR);
    } finally {
        // Unlock the game / allow the game's state to be updated again
        await redis.del(`GameState_${lobbyCode}:lock`);
    }
}
