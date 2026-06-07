import type { TPlayerIDs } from '../types.ts';
import type { GameBoard } from './gameBoard.ts';

export type GameData = {
    board: GameBoard;
    turn: TPlayerIDs;
};

export type GameStates = 'NOT_FINISHED' | 'WIN' | 'DRAW';

export type Coordinate = [number, number];

export const Directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] as const;
export type TDirections = (typeof Directions)[number];

export const Lines = ['NWSE', 'NESW', 'HORIZONTAL', 'VERTICAL'] as const;
export type TLines = (typeof Lines)[number];

/** Vectors for the 8 possible directions. The list is in clockwise order, starting with North.
 * Each vector is [columnDelta, rowDelta].
 * */
export const DirectionVectors: Record<TDirections, [number, number]> = {
    N: [0, 1],
    NE: [1, 1],
    E: [1, 0],
    SE: [1, -1],
    S: [0, -1],
    SW: [-1, -1],
    W: [-1, 0],
    NW: [-1, 1],
} as const;

/** A map mapping each direction to the line it lies on.
 *
 * The list is in clockwise order, starting with North.
 * */
export const DirectionToLine: Record<TDirections, TLines> = {
    N: 'VERTICAL',
    NE: 'NESW',
    E: 'HORIZONTAL',
    SE: 'NWSE',
    S: 'VERTICAL',
    SW: 'NESW',
    W: 'HORIZONTAL',
    NW: 'NWSE',
} as const;

/** A map mapping each line to the directions that it includes */
export const LineToDirections: Record<TLines, [TDirections, TDirections]> = {
    VERTICAL: ['N', 'S'],
    HORIZONTAL: ['E', 'W'],
    NESW: ['NE', 'SW'],
    NWSE: ['NW', 'SE'],
} as const;
