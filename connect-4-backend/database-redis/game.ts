import { redis } from "../app.ts";
import { GAME_COLUMNS, GAME_EXPIRY_TIME, GAME_ROWS } from "../config.ts";
import { CodedError, PlayerTypes, type CellState, type GameBoard, type GameRow, type GameState, type TPlayerTypes } from "../lib/types.ts";

/** The game state used when creating a new game */
const initialGameState: GameState = {
	board: Array(GAME_ROWS).fill(null).map(() => Array(GAME_COLUMNS).fill("EMPTY")),
	turn: "PLAYER1",
};

/** Create a new game using the provided lobby code
* @throws Error code "GameAlreadyExists" 
* */
export async function createGame(lobbyCode: string) {
	// Don't accidentally overwrite an existing game
	if (await redis.exists(`GameState_${lobbyCode}:board`) || await redis.exists(`GameState_${lobbyCode}:turn`))
		throw new CodedError("GameAlreadyExists");

	await redis.set(
		`GameState_${lobbyCode}:board`,
		JSON.stringify(initialGameState.board), // Set initial board state
		{
			EX: GAME_EXPIRY_TIME // In seconds
		},
	);
	await redis.set(`GameState_${lobbyCode}:turn`, initialGameState.turn, {
		EX: GAME_EXPIRY_TIME, // In seconds
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
export async function getGameState(
	lobbyCode: string,
): Promise<GameState> {
	const board = await redis.get(`GameState_${lobbyCode}:board`);
	const turn = await redis.get(`GameState_${lobbyCode}:turn`);

	if (!board || !turn)
		throw new CodedError("GameExpired");

	try {
		const boardJSON = await JSON.parse(board);
		return {
			board: boardJSON as GameBoard,
			turn: turn as TPlayerTypes,
		};
	} catch {
		throw new CodedError("ServerError");
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
export async function updateGameState(
	lobbyCode: string,
	playerID: TPlayerTypes,
	column: number,
): Promise<number> {
	if (column < 0 || column > GAME_COLUMNS - 1) throw new CodedError("BadData");
	if (await redis.exists(`GameState_${lobbyCode}:lock`)) throw new CodedError("GameLocked");

	const board = await redis.get(`GameState_${lobbyCode}:board`);
	const turn = (await redis.get(
		`GameState_${lobbyCode}:turn`,
	)) as TPlayerTypes | null;

	// Exit early if there was an error getting the board or turn or if it's not this player's turn
	if (!board || !turn) throw new CodedError("GameExpired");
	// if (turn !== playerID) throw new CodedError("BadTurn");

	// Lock the game from being updated until the turn calculations finish
	await redis.set(`GameState_${lobbyCode}:lock`, "1", {
		NX: true,
		EX: 5, // Expires in 5 seconds
	});

	try {
		const boardData = (await JSON.parse(board)) as GameBoard;
		let i = boardData.length - 1;
		// Find the height of the lowest open cell in this column
		while (i >= 0 && (boardData[i] as GameRow)[column] === "EMPTY") {
			i--;
		}
		i++; // i is the highest *non*-empty position. Shift it up to the lowest *empty* position
		// i === boardData.length means that there are no empty cells in this column,
		// This means an invalid input was given, so just exit early
		if (i === boardData.length || !boardData[i]) throw new CodedError("BadData");

		// Update the cell
		(boardData[i] as Array<CellState>)[column] = playerID;

		await redis.set(`GameState_${lobbyCode}:board`, JSON.stringify(boardData));
		// Set the next player's turn
		// Sets it to the next playerID in the list of playerIDs. The fallback if something goes wrong is the first element
		await redis.set(`GameState_${lobbyCode}:turn`, PlayerTypes.at((PlayerTypes.findIndex((elem) => elem === playerID) + 1) % PlayerTypes.length) ?? PlayerTypes[0]);

		return i;
	} catch {
		throw new CodedError("ServerError");
	} finally {
		// Unlock the game / allow the game's state to be updated again
		await redis.del(`GameState_${lobbyCode}:lock`);
	}
}
