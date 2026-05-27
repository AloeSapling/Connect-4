import { useEffect, useRef, useState, useCallback } from 'react';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GAME_ROWS, GAME_COLUMNS } from '../lib/config.js';
import { makeMove } from '../lib/gameLogic';
import GameCanvas from '../lib/canvasLogic.js';
import * as proto from '../lib/proto.js';

function Game() {
    const animationRef = useRef<number | null>(null);
    const gameCanvasRef = useRef<GameCanvas | null>(null);

    const [currentBoardState, setCurrentBoardState] = useState(
        proto.shared.GameBoard.create({
            rows: Array.from({ length: GAME_ROWS }, () => ({
                columns: Array.from({ length: GAME_COLUMNS }, () => proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED),
            })),
        })
    );

    // Which player's turn it is
    const [currentTurn, setCurrentTurn] = useState<proto.shared.PlayerIDs>(proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1);

    // The user's assigned player
    const userPlayerID: proto.shared.PlayerIDs = proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1;

    const handleMakeMove = (column: number) => {
        if (userPlayerID !== currentTurn) return;

        const { board, nextTurn } = makeMove(column, userPlayerID, currentTurn, currentBoardState);

        gameCanvasRef.current?.insertToken(column, 0, userPlayerID);
        // setCurrentBoardState(board);
        setCurrentTurn(nextTurn);
    };

    // Get canvas and start animation
    const canvasRef = useCallback((canvas: HTMLCanvasElement | null) => {
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
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

    // Update canvas rendering when token is inserted
    // useEffect(() => {
    //     gameCanvasRef.current?.setBoardState(currentBoardState);
    // }, [currentBoardState]);

    return (
        <>
            {/* column buttons */}
            <div className="absolute top-[4%] left-[27.3%] w-[45.85%] h-[80%] flex">
                {Array.from({ length: GAME_COLUMNS }, (_, col) => (
                    <button
                        key={col}
                        onClick={() => handleMakeMove(col)}
                        className="pointer-events-auto z-50 flex-1 h-full cursor-pointer"
                    />
                ))}
            </div>

            <canvas ref={canvasRef} className="gameCanvas absolute top-0 right-0 bottom-0 left-0 w-full h-full z-0">
                Your browser does not support canvas. Sorry! :(
            </canvas>
        </>
    );
}

export default Game;
