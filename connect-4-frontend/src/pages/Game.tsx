import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import ButtonMenuContainer from "../Components/ButtonMenuContainer";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../lib/config.js";
import { makeMove } from "../lib/gameLogic";
import GameCanvas from "../lib/canvasLogic.js";
import * as proto from '../lib/proto.js';

function Game() {
    const animationRef = useRef<number | null>(null);
    const gameCanvasRef = useRef<GameCanvas | null>(null);

    const [currentBoardState, setCurrentBoardState] = useState(
        // proto.shared.GameBoard.create({
        //     rows: Array(6).fill({
        //         columns: Array(7).fill(proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED)
        //     })
        // })
        Array.from({length: 6}, items => Array(7).fill(proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED))
    );

    // Which player's turn it is
    const [currentTurn, setCurrentTurn] = useState<proto.shared.PlayerIDs>(proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1);

    // The user's assigned player
    const userPlayerID: proto.shared.PlayerIDs = proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1;

    const handleMakeMove = (column: number) => {
        if (userPlayerID !== currentTurn) return;

        const { board, nextTurn } = makeMove(
            column,
            userPlayerID,
            currentTurn,
            currentBoardState
        );

        setCurrentBoardState(board);
        setCurrentTurn(nextTurn);
    };

    const canvasRef = useCallback((canvas: HTMLCanvasElement | null) => {
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;

        const gameCanvas = new GameCanvas(canvas, ctx);
        gameCanvasRef.current = gameCanvas;

        animationRef.current = requestAnimationFrame(gameCanvas.gameLoop);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    useEffect(() => {
        gameCanvasRef.current?.setBoardState(currentBoardState);
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
                            onClick={() => handleMakeMove(col)}
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