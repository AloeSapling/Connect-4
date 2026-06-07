import {
    CodedError,
    P_ErrorCodes,
    P_PlayerIDs,
    P_TokenTypes,
    type GameBoard,
    type TPlayerIDs,
    type TTokenTypes,
} from '../../types.ts';
import { EmptyToken } from './empty.ts';
import { StandardToken } from './regular.ts';
import { DirectionVectors } from '../constants.ts';

export default abstract class Token {
    // Public properties
    public count: number = 1;
    public type: TTokenTypes = P_TokenTypes.TOKEN_TYPES_UNSPECIFIED;
    public playerID: TPlayerIDs = P_PlayerIDs.PLAYER_IDS_UNSPECIFIED;

    // Private properties
    private row: number = -1;
    private column: number = -1;

    constructor(_playerID?: TPlayerIDs, _type?: TTokenTypes) {
        if (_playerID) this.playerID = _playerID;
        if (_type) this.type = _type;
    }

    /** The function called whenever the token is removed from its current position */
    abstract remove(gameBoard: GameBoard): void;

    /** The function called whenever the token is placed in a new position */
    place(gameBoard: GameBoard, newRow: number, newColumn: number): void {
        // Validation
        if (newRow < 0 || newRow >= gameBoard.length) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

        // Update the token's position
        this.row = newRow;
        this.column = newColumn;

        const tempRow = gameBoard[newRow];
        if (!tempRow) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

        tempRow[newColumn] = this;
    }

    /** Adds to the total count of consecutive tiles */
    addCount(addedCount: number) {
        this.count += addedCount;
    }

    /** Moves the token to the new position and handles the count changes appropriately */
    move(gameBoard: GameBoard, newRow: number, newColumn: number) {
        this.remove(gameBoard);

        this.place(gameBoard, newRow, newColumn);
    }

    static createToken(tokenType: TTokenTypes, playerID: TPlayerIDs): Token {
        switch (tokenType) {
            case P_TokenTypes.TOKEN_TYPES_STANDARD:
                return new StandardToken(playerID);
            default:
                return new EmptyToken();
        }
    }

    /** Performs an action on the 8 tiles / tokens surrounding this one
     * @param func - The action to be performed
     * */
    performAround(gameBoard: GameBoard, func: (token: Token) => void) {
        for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
            for (let colOffset = -1; colOffset <= 1; colOffset++) {
                if (rowOffset === 0 && colOffset === 0) continue; // Skip this token

                // Calculated offset values for the row and column indexes
                const offsetRow = this.row + rowOffset;
                const offsetCol = this.column + colOffset;

                // Bounds checking
                if (offsetRow < 0 || offsetRow >= gameBoard.length) continue;

                const tempRow = gameBoard[offsetRow];
                // Bounds checking
                if (tempRow && offsetCol >= 0 && offsetCol < tempRow.length) {
                    const offsetToken = tempRow[offsetCol];
                    if (offsetToken) func(offsetToken);
                }
            }
        }
    }

    /** Private helper function to shorten repeated logic */
    private performInDirection(gameBoard: GameBoard, func: (token: Token) => void, direction: readonly [number, number]) {
        let offset = 1;
        while (true) {
            // Calculated offset values for the row and column indexes
            const offsetCol = this.column + direction[0] * offset;
            const offsetRow = this.row + direction[1] * offset;

            // Bounds checking
            if (offsetRow < 0 || offsetRow >= gameBoard.length) break;
            if (offsetCol < 0) break;

            const tempRow = gameBoard[offsetRow];
            if (tempRow) {
                // Bounds checking
                if (offsetCol >= tempRow.length) break;

                const offsetToken = tempRow[offsetCol];
                if (!offsetToken) {
                    offset++;
                    continue;
                }

                // Break when the line is no longer consecutive
                if (offsetToken.playerID != this.playerID) break;

                func(offsetToken);
            }
            offset++;
        }
    }

    /** Performs an action on the tiles / tokens in a diagonal line
     * The diagonal goes from North-West to South-East
     * */
    performOnConsecutiveDiagonalNWSE(gameBoard: GameBoard, func: (token: Token) => void) {
        // From token to NW
        this.performInDirection(gameBoard, func, DirectionVectors.NW);
        // From token to SE
        this.performInDirection(gameBoard, func, DirectionVectors.SE);
    }

    /** Performs an action on the tiles / tokens in a diagonal line
     * The diagonal goes from North-East to South-West
     * */
    performOnConsecutiveDiagonalNESW(gameBoard: GameBoard, func: (token: Token) => void) {
        // From token to NE
        this.performInDirection(gameBoard, func, DirectionVectors.NE);
        // From token to SW
        this.performInDirection(gameBoard, func, DirectionVectors.SW);
    }

    /** Performs an action on the tiles / tokens in a horizontal line
     * */
    performOnConsecutiveHorizontal(gameBoard: GameBoard, func: (token: Token) => void) {
        // From token to West
        this.performInDirection(gameBoard, func, DirectionVectors.W);
        // From token to East
        this.performInDirection(gameBoard, func, DirectionVectors.E);
    }

    /** Performs an action on the tiles / tokens in a vertical line
     * */
    performOnConsecutiveVertical(gameBoard: GameBoard, func: (token: Token) => void) {
        // From token to North
        this.performInDirection(gameBoard, func, DirectionVectors.N);
        // From token to South
        this.performInDirection(gameBoard, func, DirectionVectors.S);
    }
}
