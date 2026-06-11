import 'dotenv';
import type { Languages } from './lang';

export const SERVER_URL = import.meta.env.SERVER_URL ?? 'http://localhost:8080/';
export const SERVER_URL_WS = import.meta.env.SERVER_URL_WS ?? 'ws://localhost:8080';

export const DEFAULT_LANGUAGE: Languages = 'en_UK';

export const CANVAS_WIDTH: number = 1280;
export const CANVAS_HEIGHT: number = 720;
// Board token area starts at 86*4px width, 25*4px height; 21*4px width and height distance between token squares
export const BOARD_START_WIDTH: number = 86 * 4;
export const BOARD_START_HEIGHT: number = 25 * 4;
export const BOARD_SLOT_DISTANCE: number = 21 * 4;
export const GAME_ROWS: number = 6;
export const GAME_COLUMNS: number = 7;
// Token properties
export const TOKEN_GRAVITY_NORMAL: number = 5000;
export const TOKEN_GRAVITY_REVERSE: number = -5000;
// Spritesheet animation properties
export const ANIMATION_EXPLOSION_FPS: number = 15;
export const ANIMATION_EXPLOSION_FRAMES: number = 5;

export const FPS: number = 30;
// ms per game state update; ~16.666666(...)ms at 60 FPS
export const STEP: number = 1000 / FPS;
