import { GAME_WIN_COUNT } from '../../config.ts';
import type { shared } from '../proto.js';
import { P_TokenTypes, type GameBoard, type GameStates, type TPlayerIDs } from '../types.ts';
import type Token from './tokens/base.ts';

/** Formats the boardData found on the server into the appropriate protobuf message
 * @returns The formatted data
 * */
function boardDataToProtobufBoard(boardData: GameBoard): shared.IGameBoard {
    return {
        rows: boardData.map((columns: Token[]) => ({
            tokens: columns.map((token: Token) => ({
                playerId: token.playerID,
                tokenType: token.type,
            })),
        })),
    };
}

/** @returns The playerID that will play after this player */
function getNextPlayer(currentPlayer: TPlayerIDs): TPlayerIDs {
    return (currentPlayer % 2) + 1;
}

/** Checks whether a draw or win exists
 *
 * A win exists when a token has a high enough count / is connected to enough other consecutive tokens. This count is defined in the config.
 * A draw exists if both players have a win or the board is full
 *
 * @returns An object containing the state and the player ID of the winner if there is a winner
 * */
function checkGameState(gameBoard: GameBoard): {
    state: GameStates;
    winner?: TPlayerIDs;
} {
    const gameState: {
        state: GameStates;
        winner?: TPlayerIDs;
    } = {
        state: 'NOT_FINISHED',
    };

    let isFull = true;

    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < (gameBoard[i]?.length || 0); j++) {
            const token = gameBoard[i]?.[j];

            if (!token) continue;

            // Check if any tile is empty
            if (token.type === P_TokenTypes.TOKEN_TYPES_UNSPECIFIED) isFull = false;

            // We only need to know if the *highest* count passes the check
            const maxCount = Object.values(token.count).reduce((acc, cur) => {
                if (cur > acc) return cur;
                return acc;
            }, 0);

            // Check if a token is connected with enough other tokens
            if (maxCount >= GAME_WIN_COUNT) {
                // If both players win at the same time then it is considered a draw
                if (gameState.state === 'WIN' && gameState.winner === token.playerID) {
                    gameState.state = 'DRAW';
                    return gameState;
                } else {
                    gameState.state = 'WIN';
                    gameState.winner = token.playerID;
                }
            }
        }
    }

    if (gameState.state !== 'WIN' && isFull) gameState.state = 'DRAW';

    return gameState;
}

export { boardDataToProtobufBoard, getNextPlayer, checkGameState };
