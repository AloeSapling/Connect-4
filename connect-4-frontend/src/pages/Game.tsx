import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import ButtonMenuContainer from "../Components/ButtonMenuContainer";

import BoardTable from "../assets/board_table.png";
const boardTable = new Image();
boardTable.src = BoardTable;
import BoardFront from "../assets/board_front.png";
const boardFront = new Image();
boardFront.src = BoardFront;
import BoardBack from "../assets/board_back.png";
const boardBack = new Image();
boardBack.src = BoardBack;
import ColIndic from "../assets/board_indicator.png";
const colIndic = new Image();
colIndic.src = ColIndic;
import TokenP1 from "../assets/board_token1.png";
const tokenP1 = new Image();
tokenP1.src = TokenP1;
import TokenP2 from "../assets/board_token2.png";
const tokenP2 = new Image();
tokenP2.src = TokenP2;

function Game() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (!ctx) return;

        // board token area starts at 86*4px width, 25*4px height; 21*4px width and height distance between token squares
        canvas.width = 1280;
        canvas.height = 720;
        const boardStartWidth: number = 86*4;
        const boardStartHeight: number = 25*4;
        const boardSlotDistance: number = 21*4;

        const FPS: number = 30;
        // ms per game state update; ~16.666666(...)ms at 60 FPS
        const step: number = 1000 / FPS;

        // Last time that loop was called 
        let lastTime: number = 0;
        // How many ms have passed since last game state update
        let accumulator: number = 0;

        const currentBoardState = [
            ["PLAYER1", "PLAYER2", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
            ["EMPTY", "PLAYER2", "EMPTY", "EMPTY", "PLAYER2", "EMPTY", "EMPTY"],
            ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
            ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
            ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
            ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "PLAYER1", "EMPTY", "EMPTY"]
        ];

        // placeholder
        let currentTurn: string = "PLAYER1";

        ///// square animation; for testing animation, delta, framerate etc.
        let x: number = 50;
        let speed: number = 120; // px/sec

        const update = (dt: number) => {
            x += speed * dt;

            if (x > canvas.width - 50 || x < 0) {
                speed *= -1;
            }
        };
        ///// ***************************************************************

        const drawGame = () => {
            // Clear canvas before drawing
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();

            ctx.drawImage(boardTable, 0, 0);
            ctx.drawImage(boardBack, 0, 0);
            drawTokens();
            ctx.drawImage(boardFront, 0, 0);

            ctx.fillStyle = "blue";
            ctx.fillRect(x, 50, 50, 50);
        };

        const drawTokens = () => {
            for (let i = 0; i < currentBoardState.length; i++) {
                for (let j = 0; j < currentBoardState[i].length; j++) {
                    switch (currentBoardState[i][j]) {
                        case "PLAYER1":
                            ctx.drawImage(tokenP1, ((j * boardSlotDistance) + boardStartWidth), (((5 - i) * boardSlotDistance) + boardStartHeight));
                            break;
                        case "PLAYER2":
                            ctx.drawImage(tokenP2, ((j * boardSlotDistance) + boardStartWidth), (((5 - i) * boardSlotDistance) + boardStartHeight));
                            break;
                        default:
                            break;
                    }
                }
            }
        }

        // time - current time of loop update
        const gameLoop = (time: number) => {
            if (!lastTime) lastTime = time;

            let delta: number = time - lastTime;

            // Prevents crashes due to tab inactivity
            if (delta > 1000) delta = step;

            lastTime = time;
            // Add ms; when greater than or equal to step, update game state
            accumulator += delta;

            // Updates board state until up-to-date
            while (accumulator >= step) {
                // ms -> seconds
                update(step / 1000);
                accumulator -= step;
            }

            drawGame();

            animationRef.current = requestAnimationFrame(gameLoop);
        };

        animationRef.current = requestAnimationFrame(gameLoop);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <>
            <ButtonMenuContainer
            buttons = {
                <>
                    <Link to="/">
                        <button>
                            Home
                        </button>
                    </Link>
                </>
            }
            display = {
                <>
                    <canvas ref={canvasRef} id='gameCanvas'>
                        Your browser does not support canvas. Sorry! :(
                    </canvas>
                </>
            }
            />
        </>
    );
}

export default Game;