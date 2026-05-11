import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ButtonMenuContainer from "../Components/ButtonMenuContainer";
import * as proto from '../lib/proto.js';

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

// Map of token sources used for token rendering
const tokenMap: Map<proto.shared.PlayerIDs, HTMLImageElement | undefined> = new Map();
tokenMap.set(proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, undefined);
tokenMap.set(proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1, tokenP1);
tokenMap.set(proto.shared.PlayerIDs.PLAYER_IDS_PLAYER2, tokenP2);

function Game() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationRef = useRef<number | null>(null);
    const [currentBoardState, setCurrentBoardState] = useState([
        [proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1, proto.shared.PlayerIDs.PLAYER_IDS_PLAYER2, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED],
        [proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED],
        [proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED],
        [proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED],
        [proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED],
        [proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED, proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED]
    ]);

    // Which player's turn it is
    const [currentTurn, setCurrentTurn] = useState<proto.shared.PlayerIDs>(proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1);

    const updateGameState = (column: number) => {
        if (userPlayerID !== currentTurn) return;

        setCurrentBoardState(prevBoard => {
            const newBoard = prevBoard.map(row => [...row]);
            for (let row = 0; row < newBoard.length; row++) {
                // Preventing index out of bounds errors
                if (row-1 < 0 && newBoard[row][column] === proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED) {
                    newBoard[row][column] = userPlayerID;
                    break;
                }
                if (newBoard[row][column] === proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED && newBoard[row-1][column] !== proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED) {
                    newBoard[row][column] = userPlayerID;
                    break;
                }
            }

            return newBoard;
        });
        if (currentTurn === proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1) setCurrentTurn(proto.shared.PlayerIDs.PLAYER_IDS_PLAYER2);
        if (currentTurn === proto.shared.PlayerIDs.PLAYER_IDS_PLAYER2) setCurrentTurn(proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1);
    };

    // The user's assigned player
    const userPlayerID: proto.shared.PlayerIDs = proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1;

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (!ctx) return;

        // Board token area starts at 86*4px width, 25*4px height; 21*4px width and height distance between token squares
        canvas.width = 1280;
        canvas.height = 720;
        const boardStartWidth: number = 86*4;
        const boardStartHeight: number = 25*4;
        const boardSlotDistance: number = 21*4;

        const FPS: number = 30;
        // ms per game state update; ~16.666666(...)ms at 60 FPS
        const step: number = 1000 / FPS;

        // Last time that the loop was called 
        let lastTime: number = 0;
        // How many ms have passed since last game state update
        let accumulator: number = 0;

        ///// Square animation; for testing animation, delta, framerate etc.
        let x: number = 50;
        let speed: number = 120; // px/sec

        const updateSquare = (dt: number) => {
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
                    const token = currentBoardState[i][j];
                    if (token) {
                        ctx.drawImage(tokenMap.get(currentBoardState[i][j])!, ((j * boardSlotDistance) + boardStartWidth), ((((currentBoardState.length - 1) - i) * boardSlotDistance) + boardStartHeight));
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

            // Updates board state until it is up-to-date
            while (accumulator >= step) {
                // ms -> seconds
                updateSquare(step / 1000);
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
    }, [currentBoardState]);

    return (
        <>
            <ButtonMenuContainer
            buttons = {
                <>
                    {/* temporary test buttons */}
                    {[0, 1, 2, 3, 4, 5, 6].map(col => (
                        <button
                            key={col}
                            onClick={() => updateGameState(col)}
                        >
                            Column {col}
                        </button>
                    ))}

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