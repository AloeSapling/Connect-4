import { GAME_WIN_COUNT } from '../../config.ts';
import { ws, type models, type shared } from '../proto.js';
import { P_TokenTypes, type TPlayerIDs } from '../types.ts';
import type { GameBoard } from './gameBoard.ts';
import { LineObj } from './lineObj.ts';
import type Token from './tokens/base.ts';
import type { Coordinate, GameStates } from './types.ts';

/** Formats the boardData found on the server into the appropriate protobuf message
 * @returns The formatted data
 * */
function boardDataToProtobufBoard(boardData: GameBoard): shared.IGameBoard {
    return {
        rows: boardData.tokens.map((columns: Token[]) => ({
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
 * Resets the list of changed lines
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

    // Check if the board is full
    let isFull = true;
    for (let i = 0; i < gameBoard.tokens.length; i++) {
        for (let j = 0; j < (gameBoard.tokens[i]?.length || 0); j++) {
            const tokenRow = gameBoard.tokens[i];
            if (!tokenRow) continue;

            const token = tokenRow[j];

            if (!token) continue;

            // Check if any tile is empty
            if (token.type === P_TokenTypes.TOKEN_TYPES_UNSPECIFIED) isFull = false;
        }
    }

    for (const lineIdx of LineObj.changedLines) {
        const line = gameBoard.lines[lineIdx];
        if (!line) continue;

        line.recalculateCountEffects(gameBoard);

        let fullCount = line.countTotal;

        Object.values(line.countEffects).forEach((val) => (fullCount += val));

        if (line.tokenCoordinates.length >= 1 && fullCount >= GAME_WIN_COUNT) {
            const tokenCoords = line.tokenCoordinates[0];
            if (!tokenCoords) continue;

            const tokenRow = gameBoard.tokens[tokenCoords[1]];
            if (!tokenRow) continue;

            const token = tokenRow[tokenCoords[0]];
            if (!token) continue;

            if (gameState.state === 'WIN') {
                if (gameState.winner !== token.playerID) gameState.state = 'DRAW';
            } else {
                gameState.state = 'WIN';
                gameState.winner = token.playerID;
            }
        }
    }

    LineObj.resetChangedLines();

    if (gameState.state !== 'WIN' && isFull) gameState.state = 'DRAW';

    return gameState;
}

/** Converts a list of coordinates to tiles
 *
 * @param gameBoard - the board which is indexed with the coordinates to get the tile data
 * */
function coordinatesToProtoTiles(gameBoard: GameBoard, coords: Coordinate[]): ws.Tile[] {
    const tiles: ws.Tile[] = [];

    for (const coord of coords) {
        // Coords are of form [column / x, row / y];
        const tokenRow = gameBoard.tokens[coord[1]];
        if (!tokenRow) continue;

        const token = tokenRow[coord[0]];
        if (!token) continue;

        tiles.push(
            ws.Tile.create({
                row: token.row,
                column: token.column,
                token: {
                    playerId: token.playerID,
                    tokenType: token.type,
                },
            })
        );
    }

    return tiles;
}

export { boardDataToProtobufBoard, getNextPlayer, checkGameState, coordinatesToProtoTiles };
