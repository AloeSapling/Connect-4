import { CodedError, P_ErrorCodes, P_PlayerIDs, P_TokenTypes, type TChangeTokenActions, type TPlayerIDs, type TTokenTypes } from '../../types.ts';
import type { GameBoard } from '../gameBoard.ts';
import { LineObj } from '../lineObj.ts';
import { DirectionVectors, Lines, LineToDirections, type ChangeTile, type Coordinate, type TDirections, type TLines } from '../types.ts';

export default abstract class Token {
    // ** Static properties and methods

    private static prototypeMap: Record<number, object> = {};

    static register(tokenType: number, proto: object) {
        Token.prototypeMap[tokenType] = proto;
    }

    static getPrototype(type: number): object | undefined {
        return Token.prototypeMap[type];
    }

    /** List of indexes of tokens that caused a change in the board that requires the frontend's attention */
    static changeTilesList: ChangeTile[] = [];

    static resetChangeTilesList() {
        Token.changeTilesList = [];
    }

    static removeFromActiveInstances(instances: Coordinate[], col: number, row: number): Coordinate[] {
        return instances.filter((elem) => !(elem[0] === col && elem[1] === row));
    }

    //**

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

    public row: number = -1;
    public column: number = -1;

    public isFrozen: boolean = false;

    // ** Private properties

    private countEffects: Record<string, number> = {};

    // **

    constructor(_playerID?: TPlayerIDs, _type?: TTokenTypes) {
        if (_playerID) this.playerID = _playerID;
        if (_type) this.type = _type;
    }

    /** Sort the list of token coordinates, sequentially from the top, down, from left to right */
    static sortTokensSequentially(tokenCoords: Coordinate[]): Coordinate[] {
        return tokenCoords.sort((a, b) => {
            // Coords are of form [column / x, row / y];
            // The element with the higher row goes first
            if (a[1] !== b[1]) return b[1] - a[1];

            // The element with the lower column goes first
            return a[0] - b[0];
        });
    }



    /** Adds this token to the list of tiles that caused some kind of change at the end of the round
     *
     * Only adds it to the list if the list doesn't include it already
     * */
    addToChangeTilesList(action: TChangeTokenActions) {
        const thisCoordinate: Coordinate = [this.column, this.row];
        if (Token.changeTilesList.findIndex((val) => val.tileCoord === thisCoordinate) === -1) {
            Token.changeTilesList.push({
                action: action,
                tileCoord: thisCoordinate
            });
        }
    }

    // ** Placement and board logic

    /** The function called whenever the token is removed from its current position */
    remove(gameBoard: GameBoard): void {
        // Replace this token with an empty one
        const emptyToken = new EmptyToken();
        emptyToken.place(gameBoard, this.row, this.column)

        // Unset this token's position
        this.row = -1;
        this.column = -1;
    };

    /** The function called whenever a turn ends */
    abstract tickTurn(gameBoard: GameBoard): void;

    /** The function called whenever the token is placed in a new position 
    *@returns the coordinate where this token ended up being placed
    * */
    place(gameBoard: GameBoard, newRow: number, newColumn: number): Coordinate {
        // Validation
        if (newRow < 0 || newRow >= gameBoard.tokens.length) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

        const tempRow = gameBoard.tokens[newRow];
        if (!tempRow) throw new CodedError(P_ErrorCodes.ERROR_CODES_BAD_DATA);

        // Update the token's position
        this.row = newRow;
        this.column = newColumn;

        // Add the token to the gameBoard's list of tokens
        tempRow[newColumn] = this;

        return [newColumn, newRow];
    }

    /** Moves the token to the new position and handles the count changes appropriately */
    move(gameBoard: GameBoard, newRow: number, newColumn: number) {
        this.remove(gameBoard);

        this.place(gameBoard, newRow, newColumn);
    }

    addCountEffect(gameBoard: GameBoard, countEffect: string, value: number) {
        this.countEffects[countEffect] = value;

        Object.values(this.lines).forEach((val) => {
            if (val !== null) {
                if (val >= 0 && val < gameBoard.lines.length) {

                    const line = gameBoard.lines[val];

                    if (line) {
                        line.lineChanged();
                        line.shouldRecalculate = true;
                    }
                }
            }
        })
    }

    removeCountEffect(gameBoard: GameBoard, countEffect: string) {
        delete this.countEffects[countEffect];

        Object.values(this.lines).forEach((val) => {
            if (val !== null) {
                if (val >= 0 && val < gameBoard.lines.length) {

                    const line = gameBoard.lines[val];

                    if (line) {
                        line.lineChanged();
                        line.shouldRecalculate = true;
                    }
                }
            }
        })

    }

    getCountEffects(): Record<string, number> {
        return this.countEffects;
    }

    // **

    // ** Lines logic

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

                if (lineObjIdx === null && lineObj === null) {
                    lineObj = new LineObj(gameBoard, line);

                    lineObj.addToken(gameBoard, offsetToken);
                } else if (lineObjIdx !== null) {
                    const tempLineObj = gameBoard.lines[lineObjIdx];

                    if (lineObj === null) {
                        if (tempLineObj) lineObj = tempLineObj;
                        else {
                            lineObj = new LineObj(gameBoard, line);

                            lineObj.addToken(gameBoard, offsetToken);
                        }
                    } else if (tempLineObj) {
                        lineObj.merge(gameBoard, tempLineObj);
                    }
                }
            }
        }

        if (lineObj !== null) {
            // ** Add this token to the line
            lineObj.tokenCoordinates.push([this.column, this.row]);

            // Keep the tokens sorted - very important
            lineObj.sortTokens();

            lineObj.addToken(gameBoard, this);

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
        const tokenCoordinates2 = lineObj.removeTokensFromIdx(gameBoard, idx + 1);

        // If the line would be composed of only one token
        // then don't create a line

        // If the line would have more than 1 token
        // then create it and update each token appropriately
        if (tokenCoordinates2.length > 1) {
            const lineObj2 = new LineObj(gameBoard, line, tokenCoordinates2);

            for (const coords of tokenCoordinates2) {
                // Coords are of form [column / x, row / y];
                const tmpTokenRow = gameBoard.tokens[coords[1]];
                if (!tmpTokenRow) continue;

                const tmpToken = tmpTokenRow[coords[0]];
                if (!tmpToken) continue;

                lineObj2.addToken(gameBoard, tmpToken);
            }
        }

        // **

        // ** The first line formed from the split
        // The lineObj is reused

        // Remove this token from the line
        lineObj.removeTokenAtIdx(gameBoard, idx);

        // Don't keep track of 1-element lines
        if (lineObj.tokenCoordinates.length === 1) lineObj.removeTokenAtIdx(gameBoard, 0);

        // The other tokens in the line already have this one set as their line obj
        // It wouldn't be worth removing empty lines, so they are kept despite that

        // **
    }

    // **
}

export class EmptyToken extends Token {
    static {
        Token.register(P_TokenTypes.TOKEN_TYPES_UNSPECIFIED, EmptyToken.prototype);
    }

    remove() { }
    tickTurn() { }
}
