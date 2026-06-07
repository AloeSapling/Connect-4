const Directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] as const;
type TDirections = (typeof Directions)[number];

/** Vectors for the 8 possible directions. The list is in clockwise order, starting with North.
 * Each vector is [columnDelta, rowDelta]. */
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

export { Directions, type TDirections, DirectionVectors };
