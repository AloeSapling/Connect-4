import { redis } from "../app";
import { GameBoard, GameState, PlayerIDs } from "../lib/types";

const nextPlayerMap: Record<PlayerIDs, PlayerIDs> = {
  PLAYER1: "PLAYER2",
  PLAYER2: "PLAYER1",
};

const initialGameState: GameState = {
  board: Array(GAME_ROWS).map(() => Array(GAME_COLUMNS).fill("EMPTY")),
  turn: "PLAYER1",
};

export async function createGame(lobbyCode: string) {
  await redis.set(
    `GameState_${lobbyCode}:board`,
    JSON.stringify(initialGameState.board),
    { NX: true },
  );
  await redis.set(`GameState_${lobbyCode}:turn`, initialGameState.turn, {
    NX: true,
  });
}

export async function getGameState(
  lobbyCode: string,
): Promise<GameState | null> {
  const board = await redis.get(`GameState_${lobbyCode}:board`);
  const turn = await redis.get(`GameState_${lobbyCode}:turn`);
  if (!board || !turn) return null;

  try {
    const boardJSON = await JSON.parse(board);
    return {
      board: boardJSON as GameBoard,
      turn: turn as PlayerIDs,
    };
  } catch {
    return null;
  }
}

export async function updateGameState(
  lobbyCode: string,
  playerID: PlayerIDs,
  column: number,
) {
  if (column < 0 || column > GAME_COLUMNS - 1) return;
  if (await redis.exists(`GameState_${lobbyCode}:lock`)) return;

  const board = await redis.get(`GameState_${lobbyCode}:board`);
  const turn = (await redis.get(
    `GameState_${lobbyCode}:turn`,
  )) as PlayerIDs | null;

  if (!board || !turn || turn !== playerID) return;

  await redis.set(`GameState_${lobbyCode}:lock`, "1", {
    NX: true,
    EX: 5,
  }); // Lock the game from being updated until the turn calculations finish

  try {
    const boardData = (await JSON.parse(board)) as GameBoard;
    let i = 0;
    while (boardData[i][column] !== "EMPTY") {
      i++;
    }
    if (i === 0) return;
    boardData[i - 1][column] = playerID;

    await redis.set(`GameState_${lobbyCode}:board`, JSON.stringify(boardData));
    await redis.set(`GameState_${lobbyCode}:turn`, nextPlayerMap[playerID]); // Set the next player's turn
  } catch {
  } finally {
    await redis.del(`GameState_${lobbyCode}:lock`);
  }
}
