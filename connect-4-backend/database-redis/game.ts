import { col } from "sequelize";
import { redis } from "../app.ts";
import { GAME_COLUMNS, GAME_EXPIRY_TIME, GAME_ROWS } from "../config.ts";
import { CodedError, PlayerIDs, type CellState, type GameBoard, type GameState, type TPlayerIDs } from "../lib/types.ts";

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
			turn: turn as TPlayerIDs,
		};
	} catch {
		throw new CodedError("ServerError");
	}
}

/** Takes in the selected column and calculates the game's state after inserting a tile in that column.
 *
 * Automatically calculates which cell it will fall into
 * @param playerID The identifier of the player who performed the move
 * */
export async function updateGameState(
	lobbyCode: string,
	playerID: TPlayerIDs,
	column: number,
) {
	if (column < 0 || column > GAME_COLUMNS - 1) return;
	// Exit early if the game isn't allowed to be updated
	if (await redis.exists(`GameState_${lobbyCode}:lock`)) return;

	const board = await redis.get(`GameState_${lobbyCode}:board`);
	const turn = (await redis.get(
		`GameState_${lobbyCode}:turn`,
	)) as TPlayerIDs | null;

	// Exit early if there was an error getting the board or turn or if it's not this player's turn
	if (!board || !turn || turn !== playerID) return;

	// Lock the game from being updated until the turn calculations finish
	await redis.set(`GameState_${lobbyCode}:lock`, "1", {
		EX: 5, // Expires in 5 seconds
	});

	try {
		const boardData = (await JSON.parse(board)) as GameBoard;
		let i = 0;
		// Find the height of the lowest open cell in this column
		while (boardData.at(i) && (boardData.at(i) as Array<CellState>).at(column) === "EMPTY") {
			i++;
		}
		// i === 0 means that there are no empty cells in this column,
		// This means an invalid input was given, so just exit early
		if (i === 0 || !boardData.at(i - 1)) return;

		// Update the cell
		(boardData.at(i - 1) as Array<CellState>)[column] = playerID;

		await redis.set(`GameState_${lobbyCode}:board`, JSON.stringify(boardData), {
			EX: GAME_EXPIRY_TIME
		});
		// Set the next player's turn
		// Sets it to the next playerID in the list of playerIDs. The fallback if something goes wrong is the first element
		await redis.set(`GameState_${lobbyCode}:turn`, PlayerIDs.at((PlayerIDs.findIndex((elem) => elem === playerID) + 1) % PlayerIDs.length) ?? PlayerIDs[0], {
			EX: GAME_EXPIRY_TIME
		});
	} catch {
	} finally {
		// Unlock the game / allow the game's state to be updated again
		await redis.del(`GameState_${lobbyCode}:lock`);
	}
}
