import 'dotenv/config';

export const GAME_COLUMNS = 7 as const;
export const GAME_ROWS = 6 as const;
export const GAME_EXPIRY_TIME = 300 as const; // 5 minutes (60 * 5)

export const GAME_WIN_LENGTH = 4 as const; // Amount of consecutive tiles needed to win

export const ALL_CODE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789' as const;
export const CODE_LENGTH = 8 as const;

export const SERVER_PORT: string = process.env.SERVER_PORT ?? ('8080' as const);
export const CLIENT_URL: string = process.env.CLIENT_URL ?? ('http://localhost:5173' as const);
export const REDIS_HOST: string = process.env.REDIS_HOST ?? ('redis' as const);
export const REDIS_PORT: string = process.env.REDIS_PORT ?? ('6379' as const);

export const SILENT_SEQUELIZE: boolean = true as const;
