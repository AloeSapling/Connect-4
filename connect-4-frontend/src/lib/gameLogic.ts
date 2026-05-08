import * as proto from "./proto.js";

// placeholder
type Board = proto.shared.PlayerIDs[][];

type MoveResult = {
    board: Board;
    nextTurn: proto.shared.PlayerIDs;
};

/**
 * Inserts a token into the appropriate column inside the game board and determines which player's turn it will be after a successful insertion.
 * @param {number} column - The column in which the token is to be inserted
 * @param {proto.shared.PlayerIDs} userPlayerID - The user's assigned player
 * @param {proto.shared.PlayerIDs} currentTurn - Which player's turn it is
 * @param {Board} board - The current state of the board
 * @returns {MoveResult} The updated state of the board and player turn value
 */
export function makeMove(
    column: number,
    userPlayerID: proto.shared.PlayerIDs,
    currentTurn: proto.shared.PlayerIDs,
    board: Board
): MoveResult {
    const newBoard = board.map(row => [...row]);

    let placed = false;

    for (let row = 0; row < newBoard.length; row++) {
        if (newBoard[row][column] === proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED) {
            newBoard[row][column] = userPlayerID;
            placed = true;
            break;
        }
    }

    // Prevent skipping turns by placing tokens in filled columns
    if (!placed) {
        return {
            board,
            nextTurn: currentTurn
        };
    }

    const nextTurn = currentTurn === proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1
        ? proto.shared.PlayerIDs.PLAYER_IDS_PLAYER2
        : proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1;

    return {
        board: newBoard,
        nextTurn
    };
}