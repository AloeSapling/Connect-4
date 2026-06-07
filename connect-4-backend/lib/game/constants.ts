const Directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] as const;
type TDirections = (typeof Directions)[number];

const Lines = ['NWSE', 'NESW', 'HORIZONTAL', 'VERTICAL'] as const;
type TLines = (typeof Lines)[number];

/** Vectors for the 8 possible directions. The list is in clockwise order, starting with North.
 * Each vector is [columnDelta, rowDelta].
 * */
const DirectionVectors: Record<TDirections, [number, number]> = {
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
const DirectionToLine: Record<TDirections, TLines> = {
    N: 'VERTICAL',
    NE: 'NESW',
    E: 'HORIZONTAL',
    SE: 'NWSE',
    S: 'VERTICAL',
    SW: 'NESW',
    W: 'HORIZONTAL',
    NW: 'NWSE',
} as const;

export { Directions, type TDirections, Lines, type TLines, DirectionVectors, DirectionToLine };
