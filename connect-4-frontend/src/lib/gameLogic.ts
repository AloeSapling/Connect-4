import * as proto from "./proto.js";

type MoveResult = {
    board: proto.shared.GameBoard;
    nextTurn: proto.shared.PlayerIDs;
};

/**
 * Inserts a token into the appropriate column inside the game board and determines which player's turn it will be after a successful insertion.
 * @param {number} column - The column in which the token is to be inserted
 * @param {proto.shared.PlayerIDs} userPlayerID - The user's assigned player
 * @param {proto.shared.PlayerIDs} currentTurn - Which player's turn it is
 * @param {proto.shared.GameBoard} board - The current state of the board
 * @returns {MoveResult} The updated state of the board and player turn value
 */
export function makeMove(
    column: number,
    userPlayerID: proto.shared.PlayerIDs,
    currentTurn: proto.shared.PlayerIDs,
    board: proto.shared.GameBoard
): MoveResult {
    const newBoard = board;

    let placed = false;


    for (let row = 0; row < newBoard.rows.length; row++) {
        if (newBoard.rows[row].columns![column] === proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED) {
            newBoard.rows[row].columns![column] = userPlayerID;
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