import { BOARD_START_HEIGHT, BOARD_START_WIDTH, BOARD_SLOT_DISTANCE, STEP } from "./config.js";
import * as proto from "./proto.js";

import BoardTable from "../assets/board_table.png";
import BoardFront from "../assets/board_front.png";
import BoardBack from "../assets/board_back.png";
import ColIndic from "../assets/board_indicator.png";
import TokenP1 from "../assets/board_token1.png";
import TokenP2 from "../assets/board_token2.png";

// placeholder
type Board = proto.shared.PlayerIDs[][];

class GameCanvas {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;

    private boardTable = new Image();
    private boardFront = new Image();
    private boardBack = new Image();
    private colIndic = new Image();
    private tokenP1 = new Image();
    private tokenP2 = new Image();

    public constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.boardTable.src = BoardTable;
        this.boardFront.src = BoardFront;
        this.boardBack.src = BoardBack;
        this.colIndic.src = ColIndic;
        this.tokenP1.src = TokenP1;
        this.tokenP2.src = TokenP2;
    }

    // Map of token sources used for token rendering
    private tokenMap: Map<
        proto.shared.PlayerIDs,
        HTMLImageElement | undefined
    > = new Map([
        [proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, undefined],
        [proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1, this.tokenP1],
        [proto.shared.PlayerIDs.PLAYER_IDS_PLAYER2, this.tokenP2]
    ]);

    private currentBoardState: Board = [[]];

    public setBoardState(board: Board) {
        this.currentBoardState = board;
    }

    // Last time that the loop was called 
    private lastTime: number = 0;
    // How many ms have passed since last game state update
    private accumulator: number = 0;

    ///// Square animation; for testing animation, delta, framerate etc.
    private x: number = 50;
    private speed: number = 120; // px/sec
    private updateSquare = (dt: number) => {
        this.x += this.speed * dt;
        if (this.x > this.canvas.width - 50 || this.x < 0) {
            this.speed *= -1;
        }
    };
    ///// ***************************************************************

    private drawGame = () => {
        // Clear canvas before drawing
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();

        this.ctx.drawImage(this.boardTable, 0, 0);
        this.ctx.drawImage(this.boardBack, 0, 0);
        this.drawTokens();

        this.ctx.drawImage(this.boardFront, 0, 0);
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, 50, 50, 50);
    };

    private drawTokens = () => {
        for (let i = 0; i < this.currentBoardState.length; i++) {
            for (let j = 0; j < this.currentBoardState[i].length; j++) {
                const token = this.currentBoardState[i][j];
                if (token) {
                    this.ctx.drawImage(this.tokenMap.get(this.currentBoardState[i][j])!, ((j * BOARD_SLOT_DISTANCE) + BOARD_START_WIDTH), ((((this.currentBoardState.length - 1) - i) * BOARD_SLOT_DISTANCE) + BOARD_START_HEIGHT));
                }
            }
        }
    }

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
            this.updateSquare(STEP / 1000);
            this.accumulator -= STEP;
        }
        this.drawGame();

        requestAnimationFrame(this.gameLoop);
    };
}

export default GameCanvas;