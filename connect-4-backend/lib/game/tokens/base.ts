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

    /** Performs an action on the tiles / tokens in a diagonal line
     * The diagonal goes from North-West to South-East
     * @param length - Length of the line (including the token) to check
     * */
    performOnConsecutiveDiagonalNWSE(gameBoard: GameBoard, func: (token: Token) => void, length: number) {
        // From token to NW
        for (let offset = 1; offset < length; offset++) {
            // Calculated offset values for the row and column indexes
            const offsetRow = this.row + offset;
            const offsetCol = this.column - offset;

            // Bounds checking
            if (offsetRow < 0 || offsetRow >= gameBoard.length) break;

            const tempRow = gameBoard[offsetRow];
            if (tempRow && offsetCol >= 0 && offsetCol < tempRow.length) {
                const offsetToken = tempRow[offsetCol];
                if (!offsetToken) continue;

                // Break when the line is no longer consecutive
                if (offsetToken.type != this.type) break;

                func(offsetToken);
            }
        }

        // From token to SE
        for (let offset = 1; offset < length; offset++) {
            // Calculated offset values for the row and column indexes
            const offsetRow = this.row - offset;
            const offsetCol = this.column + offset;

            // Bounds checking
            if (offsetRow < 0 || offsetRow >= gameBoard.length) break;

            const tempRow = gameBoard[offsetRow];
            if (tempRow && offsetCol >= 0 && offsetCol < tempRow.length) {
                const offsetToken = tempRow[offsetCol];
                if (!offsetToken) continue;

                // Break when the line is no longer consecutive
                if (offsetToken.type != this.type) break;

                func(offsetToken);
            }
        }
    }

    /** Performs an action on the tiles / tokens in a diagonal line
     * The diagonal goes from North-East to South-West
     * @param length - Length of the line (including the token) to check
     * */
    performOnConsecutiveDiagonalNESW(gameBoard: GameBoard, func: (token: Token) => void, length: number) {
        // From token to NE
        for (let offset = 1; offset < length; offset++) {
            // Calculated offset values for the row and column indexes
            const offsetRow = this.row + offset;
            const offsetCol = this.column + offset;

            // Bounds checking
            if (offsetRow < 0 || offsetRow >= gameBoard.length) break;

            const tempRow = gameBoard[offsetRow];
            if (tempRow && offsetCol >= 0 && offsetCol < tempRow.length) {
                const offsetToken = tempRow[offsetCol];
                if (!offsetToken) continue;

                // Break when the line is no longer consecutive
                if (offsetToken.type != this.type) break;

                func(offsetToken);
            }
        }

        // From token to SW
        for (let offset = 1; offset < length; offset++) {
            // Calculated offset values for the row and column indexes
            const offsetRow = this.row - offset;
            const offsetCol = this.column - offset;

            // Bounds checking
            if (offsetRow < 0 || offsetRow >= gameBoard.length) break;

            const tempRow = gameBoard[offsetRow];
            if (tempRow && offsetCol >= 0 && offsetCol < tempRow.length) {
                const offsetToken = tempRow[offsetCol];
                if (!offsetToken) continue;

                // Break when the line is no longer consecutive
                if (offsetToken.type != this.type) break;

                func(offsetToken);
            }
        }
    }

    /** Performs an action on the tiles / tokens in a horizontal line
     * @param length - Length of the line (including the token) to check
     * */
    performOnConsecutiveHorizontal(gameBoard: GameBoard, func: (token: Token) => void, length: number) {
        if (this.row < 0 || this.row >= gameBoard.length) return;

        // From token to West
        for (let colOffset = 1; colOffset < length; colOffset++) {
            // Calculated offset values for the column index
            const offsetCol = this.column - colOffset;

            const tempRow = gameBoard[this.row];
            if (tempRow && offsetCol >= 0 && offsetCol < tempRow.length) {
                const offsetToken = tempRow[offsetCol];
                if (!offsetToken) continue;

                // Break when the line is no longer consecutive
                if (offsetToken.type != this.type) break;

                func(offsetToken);
            }
        }

        // From token to East
        for (let colOffset = 1; colOffset < length; colOffset++) {
            // Calculated offset values for the column index
            const offsetCol = this.column + colOffset;

            const tempRow = gameBoard[this.row];
            if (tempRow && offsetCol >= 0 && offsetCol < tempRow.length) {
                const offsetToken = tempRow[offsetCol];
                if (!offsetToken) continue;

                // Break when the line is no longer consecutive
                if (offsetToken.type != this.type) break;

                func(offsetToken);
            }
        }
    }

    /** Performs an action on the tiles / tokens in a vertical line
     * @param length - Length of the line (including the token) to check
     * */
    performOnConsecutiveVertical(gameBoard: GameBoard, func: (token: Token) => void, length: number) {
        if (this.column < 0) return;

        // From token to North
        for (let rowOffset = 1; rowOffset < length; rowOffset++) {
            // Calculated offset values for the row index
            const offsetRow = this.row + rowOffset;

            // Bounds checking
            if (offsetRow < 0 || offsetRow >= gameBoard.length) break;

            const tempRow = gameBoard[offsetRow];
            if (tempRow && this.column < tempRow.length) {
                const offsetToken = tempRow[this.column];
                if (!offsetToken) continue;

                // Break when the line is no longer consecutive
                if (offsetToken.type != this.type) break;

                func(offsetToken);
            }
        }

        // From token to South
        for (let rowOffset = 1; rowOffset < length; rowOffset++) {
            // Calculated offset values for the row index
            const offsetRow = this.row - rowOffset;

            // Bounds checking
            if (offsetRow < 0 || offsetRow >= gameBoard.length) break;

            const tempRow = gameBoard[offsetRow];
            if (tempRow && this.column < tempRow.length) {
                const offsetToken = tempRow[this.column];
                if (!offsetToken) continue;

                // Break when the line is no longer consecutive
                if (offsetToken.type != this.type) break;

                func(offsetToken);
            }
        }
    }
}
