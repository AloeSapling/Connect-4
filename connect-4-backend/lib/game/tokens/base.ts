import { col } from 'sequelize';
import type { TPlayerIDs, TTokenTypes, WinCheckFunction } from '../../types.ts';

export default abstract class Token {
    // Public properties
    public count: number = 1;
    public type: TTokenTypes;
    public playerID: TPlayerIDs;

    // Private properties
    private board: Token[][];
    private row: number = -1;
    private column: number = -1;

    private checkForWin: WinCheckFunction;

    constructor(_type: TTokenTypes, _playerID: TPlayerIDs, _board: Token[][], _checkForWin: WinCheckFunction) {
        this.type = _type;
        this.playerID = _playerID;

        this.board = _board;

        this.checkForWin = _checkForWin;
    }

    /** The function called whenever the token is removed from its current position */
    abstract remove(): void;

    /** The function called whenever the token is placed in a new position */
    place(newRow: number, newColumn: number): void {
        // Update the token's position
        this.row = newRow;
        this.column = newColumn;
    }

    /** Adds to the total count of consecutive tiles */
    addCount(addedCount: number) {
        this.count += addedCount;

        this.checkForWin(this.count, this.playerID);
    }

    /** Moves the token to the new position and handles the count changes appropriately */
    move(newRow: number, newColumn: number) {
        this.remove();

        this.place(newRow, newColumn);
    }

    /** Performs an action on the 8 tiles / tokens surrounding this one
     * @param func - The action to be performed
     * */
    performAround(func: (token: Token) => void) {
        for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
            for (let colOffset = -1; colOffset <= 1; colOffset++) {
                if (rowOffset === 0 && colOffset === 0) continue; // Skip this token

                // Calculated offset values for the row and column indexes
                const offsetRow = this.row + rowOffset;
                const offsetCol = this.column + colOffset;

                // Bounds checking
                if (offsetRow < 0 || offsetRow >= this.board.length) continue;

                const tempRow = this.board[offsetRow];
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
    performOnConsecutiveDiagonalNWSE(func: (token: Token) => void, length: number) {
        // From token to NW
        for (let offset = 1; offset < length; offset++) {
            // Calculated offset values for the row and column indexes
            const offsetRow = this.row + offset;
            const offsetCol = this.column - offset;

            // Bounds checking
            if (offsetRow < 0 || offsetRow >= this.board.length) break;

            const tempRow = this.board[offsetRow];
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
            if (offsetRow < 0 || offsetRow >= this.board.length) break;

            const tempRow = this.board[offsetRow];
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
    performOnConsecutiveDiagonalNESW(func: (token: Token) => void, length: number) {
        // From token to NE
        for (let offset = 1; offset < length; offset++) {
            // Calculated offset values for the row and column indexes
            const offsetRow = this.row + offset;
            const offsetCol = this.column + offset;

            // Bounds checking
            if (offsetRow < 0 || offsetRow >= this.board.length) break;

            const tempRow = this.board[offsetRow];
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
            if (offsetRow < 0 || offsetRow >= this.board.length) break;

            const tempRow = this.board[offsetRow];
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
    performOnConsecutiveHorizontal(func: (token: Token) => void, length: number) {
        if (this.row < 0 || this.row >= this.board.length) return;

        // From token to West
        for (let colOffset = 1; colOffset < length; colOffset++) {
            // Calculated offset values for the column index
            const offsetCol = this.column - colOffset;

            const tempRow = this.board[this.row];
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

            const tempRow = this.board[this.row];
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
    performOnConsecutiveVertical(func: (token: Token) => void, length: number) {
        if (this.column < 0) return;

        // From token to North
        for (let rowOffset = 1; rowOffset < length; rowOffset++) {
            // Calculated offset values for the row index
            const offsetRow = this.row + rowOffset;

            // Bounds checking
            if (offsetRow < 0 || offsetRow >= this.board.length) break;

            const tempRow = this.board[offsetRow];
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
            if (offsetRow < 0 || offsetRow >= this.board.length) break;

            const tempRow = this.board[offsetRow];
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
