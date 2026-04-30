export const GAME_COLUMNS = 7 as const;
export const GAME_ROWS = 6 as const;

export const ALL_CODE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789" as const;
export const CODE_LENGTH = 8 as const;

export const SERVER_PORT: string = process.env.SERVER_PORT ?? '8080' as const;
export const CLIENT_URL: string = process.env.CLIENT_URL ?? 'localhost:3000' as const;

