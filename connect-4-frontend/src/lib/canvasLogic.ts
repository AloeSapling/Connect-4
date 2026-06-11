import { BOARD_START_HEIGHT, BOARD_START_WIDTH, BOARD_SLOT_DISTANCE, GAME_ROWS, GAME_COLUMNS, TOKEN_GRAVITY_REVERSE, TOKEN_GRAVITY_NORMAL, STEP } from './config.js';
import * as types from '@/lib/types.js';
import * as proto from './proto.js';

import BoardTable from '@/assets/board_table.png';
import BoardFront from '@/assets/board_front.png';
import BoardShadow from '@/assets/board_shadow.png';
import BoardBack from '@/assets/board_back.png';
import ColIndic from '@/assets/board_indicator.png';

import TokenP1 from '@/assets/board_token1.png';
import TokenP2 from '@/assets/board_token2.png';
import TokenAuraP1 from '@/assets/board_token_aura1.png';
import TokenAuraP2 from '@/assets/board_token_aura2.png';
import TokenNegativeP1 from '@/assets/board_token_negative1.png';
import TokenNegativeP2 from '@/assets/board_token_negative2.png';
import TokenReverseP1 from '@/assets/board_token_reverse1.png';
import TokenReverseP2 from '@/assets/board_token_reverse2.png';
import TokenBomb from '@/assets/board_token_bomb.png';
import TokenBurn from '@/assets/board_token_burn.png';

type FallingToken = {
    column: number;
    targetRow: number;
    player: types.TPlayerIDs;
    type: types.TTokenTypes;

    x: number;
    y: number;
    targetY: number;

    velocity: number;
};

type ColumnIndicator = {
    display: boolean;
    column: number;
};

class GameCanvas {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private fallingTokens: FallingToken[] = [];
    private columnIndicator: ColumnIndicator = {
        display: false,
        column: 0,
    };

    private boardTable = new Image();
    private boardFront = new Image();
    private boardShadow = new Image();
    private boardBack = new Image();
    private colIndic = new Image();

    private tokenP1 = new Image();
    private tokenP2 = new Image();
    private tokenAuraP1 = new Image();
    private tokenAuraP2 = new Image();
    private tokenNegativeP1 = new Image();
    private tokenNegativeP2 = new Image();
    private tokenReverseP1 = new Image();
    private tokenReverseP2 = new Image();
    private tokenBomb = new Image();
    private tokenBurn = new Image();

    public constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.boardTable.src = BoardTable;
        this.boardFront.src = BoardFront;
        this.boardShadow.src = BoardShadow;
        this.boardBack.src = BoardBack;
        this.colIndic.src = ColIndic;

        this.tokenP1.src = TokenP1;
        this.tokenP2.src = TokenP2;
        this.tokenAuraP1.src = TokenAuraP1;
        this.tokenAuraP2.src = TokenAuraP2;
        this.tokenNegativeP1.src = TokenNegativeP1;
        this.tokenNegativeP2.src = TokenNegativeP2;
        this.tokenReverseP1.src = TokenReverseP1;
        this.tokenReverseP2.src = TokenReverseP2;
        this.tokenBomb.src = TokenBomb;
        this.tokenBurn.src = TokenBurn;
    }

    // Map of token sources used for token rendering
    private tokenMap: Map<
            types.TTokenTypes, 
            Map<types.TPlayerIDs, HTMLImageElement> | undefined
        > = new Map([
        [types.P_TokenTypes.TOKEN_TYPES_UNSPECIFIED, undefined],
        [types.P_TokenTypes.TOKEN_TYPES_STANDARD, new Map<types.TPlayerIDs, HTMLImageElement>([
            [types.P_PlayerIDs.PLAYER_IDS_PLAYER1, this.tokenP1],
            [types.P_PlayerIDs.PLAYER_IDS_PLAYER2, this.tokenP2],
        ])],
        [types.P_TokenTypes.TOKEN_TYPES_AURA, new Map([
            [types.P_PlayerIDs.PLAYER_IDS_PLAYER1, this.tokenAuraP1],
            [types.P_PlayerIDs.PLAYER_IDS_PLAYER2, this.tokenAuraP2],
        ])],
        [types.P_TokenTypes.TOKEN_TYPES_NEGATIVE, new Map([
            [types.P_PlayerIDs.PLAYER_IDS_PLAYER1, this.tokenNegativeP1],
            [types.P_PlayerIDs.PLAYER_IDS_PLAYER2, this.tokenNegativeP2],
        ])],
        [types.P_TokenTypes.TOKEN_TYPES_REVERSE, new Map([
            [types.P_PlayerIDs.PLAYER_IDS_PLAYER1, this.tokenReverseP1],
            [types.P_PlayerIDs.PLAYER_IDS_PLAYER2, this.tokenReverseP2],
        ])],
        [types.P_TokenTypes.TOKEN_TYPES_BOMB, new Map([
            [types.P_PlayerIDs.PLAYER_IDS_UNSPECIFIED, this.tokenBomb],
        ])],
        [types.P_TokenTypes.TOKEN_TYPES_BURN, new Map([
            [types.P_PlayerIDs.PLAYER_IDS_UNSPECIFIED, this.tokenBurn],
        ])],
    ]);

    private currentBoardState: proto.shared.IGameBoard = proto.shared.GameBoard.create({
        rows: Array.from({ length: GAME_ROWS }, () => ({
            tokens: Array.from({ length: GAME_COLUMNS }, () => ({
                playerId: types.P_PlayerIDs.PLAYER_IDS_UNSPECIFIED,
                tokenType: types.P_TokenTypes.TOKEN_TYPES_UNSPECIFIED,
            })),
        })),
    });

    public setBoardState(board: proto.shared.IGameBoard) {
        this.currentBoardState = structuredClone(board);
    }

    // Last time that the loop was called
    private lastTime: number = 0;
    // How many ms have passed since last game state update
    private accumulator: number = 0;

    ///// Square animation; for testing animation, delta, framerate etc.
    // private x: number = 50;
    // private speed: number = 120; // px/sec
    // private updateSquare = (dt: number) => {
    //     this.x += this.speed * dt;
    //     if (this.x > this.canvas.width - 50 || this.x < 0) {
    //         this.speed *= -1;
    //     }
    // };
    ///// ***************************************************************

    public displayColumnIndicator(display: boolean, column: number) {
        this.columnIndicator.display = display;
        this.columnIndicator.column = column;
    }

    private drawColumnIndicator() {
        if (this.columnIndicator.display === false) return;

        this.ctx.drawImage(this.colIndic, this.columnIndicator.column * BOARD_SLOT_DISTANCE + BOARD_START_WIDTH + 4, 20);
    }

    public placeToken(column: number, row: number, player: types.TPlayerIDs, tokenType: types.TTokenTypes) {
        const x = column * BOARD_SLOT_DISTANCE + BOARD_START_WIDTH;

        const targetY = (GAME_ROWS - 1 - row) * BOARD_SLOT_DISTANCE + BOARD_START_HEIGHT;

        this.fallingTokens.push({
            column,
            targetRow: row,
            player,
            type: tokenType,

            x,
            y: (tokenType === types.P_TokenTypes.TOKEN_TYPES_REVERSE)
            ? 2 * BOARD_START_HEIGHT + (GAME_ROWS * BOARD_SLOT_DISTANCE)
            : 0,
            targetY,

            velocity: 0,
        });
    }

    private updateFallingTokens(dt: number) {
        for (let i = this.fallingTokens.length - 1; i >= 0; i--) {
            const token = this.fallingTokens[i];
            const gravity: number = (token.type === types.P_TokenTypes.TOKEN_TYPES_REVERSE)
            ? TOKEN_GRAVITY_REVERSE
            : TOKEN_GRAVITY_NORMAL;

            token.velocity += gravity * dt;
            token.y += token.velocity * dt;

            if ((token.type !== types.P_TokenTypes.TOKEN_TYPES_REVERSE && token.y >= token.targetY) ||
                (token.type === types.P_TokenTypes.TOKEN_TYPES_REVERSE && token.y <= token.targetY)) {
                token.y = token.targetY;

                // Commit token to board state
                this.currentBoardState.rows![token.targetRow].tokens![token.column] = {
                    playerId: token.player,
                    tokenType: token.type,
                };

                this.fallingTokens.splice(i, 1);
            }
        }
    }

    private drawFallingTokens() {
        for (const token of this.fallingTokens) {
            const type = this.tokenMap.get(token.type);
            const img = type?.get(token.player);

            if (!img) continue;

            this.ctx.drawImage(img, token.x, token.y);
        }
    }

    private drawGame = () => {
        // Clear canvas before drawing
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();

        this.ctx.drawImage(this.boardTable, 0, 0);
        this.ctx.drawImage(this.boardShadow, 0, 0);
        this.ctx.drawImage(this.boardBack, 0, 0);

        this.drawTokens();
        this.drawFallingTokens();
        this.drawColumnIndicator();

        this.ctx.drawImage(this.boardFront, 0, 0);

        // square anim
        // this.ctx.fillStyle = "blue";
        // this.ctx.fillRect(this.x, 50, 50, 50);
    };

    private drawTokens = () => {
        for (let i = 0; i < this.currentBoardState.rows!.length; i++) {
            for (let j = 0; j < this.currentBoardState.rows![i].tokens!.length; j++) {
                const token = this.currentBoardState.rows![i].tokens![j];
                if (token && token.tokenType !== types.P_TokenTypes.TOKEN_TYPES_UNSPECIFIED) {
                    const type = this.tokenMap.get(token.tokenType!);
                    const img = type!.get(token.playerId!);
                    
                    this.ctx.drawImage(
                        img!,
                        j * BOARD_SLOT_DISTANCE + BOARD_START_WIDTH,
                        (this.currentBoardState.rows!.length - 1 - i) * BOARD_SLOT_DISTANCE + BOARD_START_HEIGHT
                    );
                }
            }
        }
    };

    // time - current time of loop update
    public gameLoop = (time: number) => {
        if (!this.lastTime) this.lastTime = time;
        let delta: number = time - this.lastTime;

        // Prevents crashes due to tab inactivity
        if (delta > 1000) delta = STEP;

        this.lastTime = time;

        // Add ms; when greater than or equal to STEP, update game state
        this.accumulator += delta;

        // Updates board state until it is up-to-date
        while (this.accumulator >= STEP) {
            // ms -> seconds
            // square anim
            // this.updateSquare(STEP / 1000);
            this.updateFallingTokens(STEP / 1000);

            this.accumulator -= STEP;
        }
        this.drawGame();

        requestAnimationFrame(this.gameLoop);
    };
}

export default GameCanvas;
