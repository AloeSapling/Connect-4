import type { shared } from '../proto.js';
import type { TPlayerIDs, WinCheckFunction } from '../types.ts';
import type Token from './tokens/base.ts';

/** Formats the boardData found on the server into the appropriate protobuf message
 * @returns The formatted data
 * */
function boardDataToProtobufBoard(boardData: Token[][]): shared.IGameBoard {
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

export { boardDataToProtobufBoard, getNextPlayer };
