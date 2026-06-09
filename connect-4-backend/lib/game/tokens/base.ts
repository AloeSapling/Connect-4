import { CodedError, P_ErrorCodes, P_PlayerIDs, P_TokenTypes, type TPlayerIDs, type TTokenTypes } from '../../types.ts';
import type { GameBoard } from '../gameBoard.ts';
import { LineObj } from '../lineObj.ts';
import { DirectionVectors, Lines, LineToDirections, type TLines } from '../types.ts';

export default abstract class Token {
    private static prototypeMap: Record<number, object> = {};

    static register(tokenType: number, proto: object) {
        Token.prototypeMap[tokenType] = proto;
    }

    static getPrototype(type: number): object | undefined {
        return Token.prototypeMap[type];
    }

    // ** Public properties
    /** The count added to a line whenever this adds itself to a line */
    public count: number = 0;

    /** A map of line axis to its index in the GameBoard object (if it exists) */
    public lines: Record<TLines, number | null> = Lines.reduce(
        (acc: Record<TLines, number | null>, line: TLines) => ({
            ...acc,
            [line]: null,
        }),
        {} as Record<TLines, number | null>
    );

    public type: TTokenTypes = P_TokenTypes.TOKEN_TYPES_UNSPECIFIED;
    public playerID: TPlayerIDs = P_PlayerIDs.PLAYER_IDS_UNSPECIFIED;

    private row: number = -1;
    private column: number = -1;
    // **


    constructor(_playerID?: TPlayerIDs, _type?: TTokenTypes) {
        if (_playerID) this.playerID = _playerID;
        if (_type) this.type = _type;
    }

    /** The function called whenever the token is removed from its current position */
    abstract remove(gameBoard: GameBoard): void;

    /** The function called whenever a turn ends */
    abstract tickTurn(gameBoard: GameBoard): void;

    /** The function called whenever the token is placed in a new position */
    place(gameBoard: GameBoard, newRow: number, newColumn: number): void {
        // Validation
        if (newRow < 0 || newRow >= gameBoard.tokens.length) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

        const tempRow = gameBoard.tokens[newRow];
        if (!tempRow) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

        // Update the token's position
        this.row = newRow;
        this.column = newColumn;

        // Add the token to the gameBoard's list of tokens
        tempRow[newColumn] = this;
    }

    // /** Adds to the total count of consecutive tiles */
    // addCount(addedCount: number, direction: TDirections) {
    //     const line: TLines = DirectionToLine[direction];
    //
    //     this.count[line] += addedCount;
    // }
    //
    /** Moves the token to the new position and handles the count changes appropriately */
    move(gameBoard: GameBoard, newRow: number, newColumn: number) {
        this.remove(gameBoard);

        this.place(gameBoard, newRow, newColumn);
    }

    // /** Performs an action on the 8 tiles / tokens surrounding this one
    //  * @param func - The action to be performed
    //  * */
    // performAround(gameBoard: GameBoard, func: (token: Token) => void) {
    //     for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    //         for (let colOffset = -1; colOffset <= 1; colOffset++) {
    //             if (rowOffset === 0 && colOffset === 0) continue; // Skip this token
    //
    //             // Calculated offset values for the row and column indexes
    //             const offsetRow = this.row + rowOffset;
    //             const offsetCol = this.column + colOffset;
    //
    //             // Bounds checking
    //             if (offsetRow < 0 || offsetRow >= gameBoard.length) continue;
    //
    //             const tempRow = gameBoard[offsetRow];
    //             // Bounds checking
    //             if (tempRow && offsetCol >= 0 && offsetCol < tempRow.length) {
    //                 const offsetToken = tempRow[offsetCol];
    //                 if (offsetToken) func(offsetToken);
    //             }
    //         }
    //     }
    // }

    addSelfToLines(gameBoard: GameBoard) {
        for (const line of Lines) {
            this.addSelfToLineObj(gameBoard, line);
        }
    }

    addSelfToLineObj(gameBoard: GameBoard, line: TLines) {
        let lineObj: LineObj | null = null;

        const directions = LineToDirections[line];

        // Find which line to add this token to
        for (const direction of directions) {
            const offsetCol = this.column + DirectionVectors[direction][0];
            const offsetRow = this.row + DirectionVectors[direction][1];

            // Bounds checking
            if (offsetRow < 0 || offsetRow >= gameBoard.tokens.length) continue;

            const tempRow = gameBoard.tokens[offsetRow];
            // Bounds checking
            if (!tempRow || offsetCol < 0 || offsetCol >= tempRow.length) continue;

            const offsetToken = tempRow[offsetCol];
            if (offsetToken && offsetToken.playerID === this.playerID) {
                const lineObjIdx = offsetToken.lines[line];

                if (lineObjIdx === null && lineObj === null) lineObj = new LineObj(gameBoard, line);
                else if (lineObjIdx !== null) {
                    const tempLineObj = gameBoard.lines[lineObjIdx];

                    if (lineObj === null) {
                        if (tempLineObj) lineObj = tempLineObj;
                        else lineObj = new LineObj(gameBoard, line);
                    } else if (tempLineObj) {
                        lineObj.merge(tempLineObj);
                    }
                }
            }
        }

        if (lineObj !== null) {
            // ** Add this token to the line
            lineObj.tokenCoordinates.push([this.column, this.row]);

            // Sort the coordinates from the left-most or bottom-most token. Left-most is prioritised over bottom-most
            const directionVector = DirectionVectors[directions[0]];
            lineObj.tokenCoordinates.sort((a, b) => {
                const val1 = a[0] * directionVector[0] + a[1] * directionVector[1];
                const val2 = b[0] * directionVector[0] + b[1] * directionVector[1];

                return val2 - val1;
            });

            lineObj.countTotal += this.count;

            this.lines[line] = lineObj.boardIdx;

            // **
        }
    }

    removeSelfFromLines(gameBoard: GameBoard) {
        for (const line of Lines) {
            this.removeSelfFromLineObj(gameBoard, line);
        }
    }

    removeSelfFromLineObj(gameBoard: GameBoard, line: TLines) {
        const lineObjIdx: number | null = this.lines[line];
        if (!lineObjIdx) return;

        const lineObj = gameBoard.lines[lineObjIdx];
        if (!lineObj) return;

        /** The index of this token in the list */
        const idx = lineObj.tokenCoordinates.findIndex((val) => val[0] === this.column && val[1] === this.row);

        // The line will now be split into two since this token was removed and so consecutivity is lost

        // ** The second line formed from the split
        // Second line goes first because it removes elements from the current lineObj when it is formed

        /** The tokens that will be in the second split list */
        const tokenCoordinates2 = lineObj.tokenCoordinates.splice(idx + 1);

        // If the line would be composed of only one token
        // then don't create a line and remove the line from the token
        if (tokenCoordinates2.length === 1) {
            const loneTokenCoords = tokenCoordinates2[0];

            const loneTokenRow = gameBoard.tokens[loneTokenCoords![1]];
            if (loneTokenRow) {
                const loneTokenObj = loneTokenRow[loneTokenCoords![0]];
                if (loneTokenObj) {
                    loneTokenObj.lines[line] = null;
                }
            }
        }

        // If the line would have more than 1 token
        // then create it and update each token appropriately
        else if (tokenCoordinates2.length !== 0) {
            const lineObj2 = new LineObj(gameBoard, line, tokenCoordinates2);

            gameBoard.lines.push(lineObj2);

            for (const coords of tokenCoordinates2) {
                // Coords are of form [column / x, row / y];
                const tmpTokenRow = gameBoard.tokens[coords[1]];
                if (!tmpTokenRow) continue;

                const tmpToken = tmpTokenRow[coords[0]];
                if (!tmpToken) continue;

                // Line will be added at the end of gameBoard so it's index will be the last one
                tmpToken.lines[line] = gameBoard.lines.length - 1;

                lineObj2.countTotal += tmpToken.count;
                lineObj.countTotal -= tmpToken.count;
            }
        }

        // **

        // ** The first line formed from the split
        // The lineObj is reused

        // After forming the second line, this token is the last one in the array
        lineObj.tokenCoordinates.splice(idx);

        lineObj.countTotal -= this.count;

        // The other tokens in the line already have this one set as their line obj
        // It wouldn't be worth removing empty or 1-element lines, so they are kept despite that

        // **
    }

    // /** Helper method to shorten repeated logic */
    // performInDirection(gameBoard: GameBoard, func: (token: Token, direction: TDirections) => void, direction: TDirections) {
    //     let offset = 1;
    //
    //     const directionVector = DirectionVectors[direction];
    //     while (true) {
    //         // Calculated offset values for the row and column indexes
    //         const offsetCol = this.column + directionVector[0] * offset;
    //         const offsetRow = this.row + directionVector[1] * offset;
    //
    //         // Bounds checking
    //         if (offsetRow < 0 || offsetRow >= gameBoard.length) break;
    //         if (offsetCol < 0) break;
    //
    //         const tempRow = gameBoard[offsetRow];
    //         if (tempRow) {
    //             // Bounds checking
    //             if (offsetCol >= tempRow.length) break;
    //
    //             const offsetToken = tempRow[offsetCol];
    //             if (!offsetToken) {
    //                 offset++;
    //                 continue;
    //             }
    //
    //             // Break when the line is no longer consecutive
    //             if (offsetToken.playerID != this.playerID) break;
    //
    //             func(offsetToken, direction);
    //         }
    //         offset++;
    //     }
    // }
    //
    // /** Performs an act..ion on the tiles / tokens in a diagonal line
    //  * The diagonal goes from North-West to South-East
    //  * */
    // performOnConsecutiveDiagonalNWSE(gameBoard: GameBoard, func: (token: Token, direction: TDirections) => void) {
    //     // From token to NW
    //     this.performInDirection(gameBoard, func, 'NW');
    //     // From token to SE
    //     this.performInDirection(gameBoard, func, 'SE');
    // }
    //
    // /** Performs an act..ion on the tiles / tokens in a diagonal line
    //  * The diagonal goes from North-East to South-West
    //  * */
    // performOnConsecutiveDiagonalNESW(gameBoard: GameBoard, func: (token: Token, direction: TDirections) => void) {
    //     // From token to NE
    //     this.performInDirection(gameBoard, func, 'NE');
    //     // From token to SW
    //     this.performInDirection(gameBoard, func, 'SW');
    // }
    //
    // /** Performs an act..ion on the tiles / tokens in a horizontal line
    //  * */
    // performOnConsecutiveHorizontal(gameBoard: GameBoard, func: (token: Token, direction: TDirections) => void) {
    //     // From token to West
    //     this.performInDirection(gameBoard, func, 'W');
    //     // From token to East
    //     this.performInDirection(gameBoard, func, 'E');
    // }
    //
    // /** Performs an act..ion on the tiles / tokens in a vertical line
    //  * */
    // performOnConsecutiveVertical(gameBoard: GameBoard, func: (token: Token, direction: TDirections) => void) {
    //     // From token to North
    //     this.performInDirection(gameBoard, func, 'N');
    //     // From token to South
    //     this.performInDirection(gameBoard, func, 'S');
    // }
}
