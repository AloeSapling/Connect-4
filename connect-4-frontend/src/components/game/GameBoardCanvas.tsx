import { useEffect, useRef, useState, useCallback, useContext, type RefObject } from 'react';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GAME_ROWS, GAME_COLUMNS } from '@/lib/config.js';
import { langContext } from '@/lib/contexts';
import { GameWebSocket } from '@/lib/websockets.js';
// import { makeMove } from '@/lib/gameLogic';
import GameCanvas from '@/lib/canvasLogic.js';
import * as proto from '@/lib/proto.js';
import { P_PlayerIDs, P_TokenTypes, type TPlayerIDs, type TTokenTypes } from '@/lib/types';

function GameBoardCanvas({
    queryData,
    wsRef,
    gameCanvasRef,
    userPlayerID,
    userPlayerIDRef,
    currentTurn,
    selectedTokenRef,
}: {
    queryData: proto.routes.GetGameResponse;
    wsRef: RefObject<GameWebSocket | null>;
    gameCanvasRef: RefObject<GameCanvas | null>;
    userPlayerID: TPlayerIDs;
    userPlayerIDRef: RefObject<TPlayerIDs>;
    currentTurn: RefObject<TPlayerIDs | null>;
    selectedTokenRef: RefObject<TTokenTypes>;
}) {
    const animationRef = useRef<number | null>(null);

    const [currentBoardState, setCurrentBoardState] = useState<proto.shared.IGameBoard>({
        rows: Array.from({ length: GAME_ROWS }, () => ({
            tokens: Array.from({ length: GAME_COLUMNS }, () => ({
                playerId: P_PlayerIDs.PLAYER_IDS_UNSPECIFIED,
                tokenType: P_TokenTypes.TOKEN_TYPES_UNSPECIFIED,
            })),
        })),
    });

    if (queryData?.game?.board && queryData.game.board !== currentBoardState) {
        setCurrentBoardState(queryData.game.board);
    }

    useEffect(() => {
        if (!gameCanvasRef.current) return;

        gameCanvasRef.current.setBoardState(currentBoardState);
    }, [currentBoardState]);

    // Sync frozen columns to canvas
    useEffect(() => {
        if (!gameCanvasRef.current || !queryData?.game?.frozenColumns) return;
        gameCanvasRef.current.setFrozenColumns(queryData.game.frozenColumns);
    }, [queryData?.game?.frozenColumns]);

    // Which player's turn it is
    console.log(queryData);
    console.log(queryData?.game);

    const handleMakeMove = (column: number) => {
        console.log(userPlayerID, currentTurn.current);
        if (userPlayerIDRef.current !== currentTurn.current) return;

        const tokenType = selectedTokenRef.current !== P_TokenTypes.TOKEN_TYPES_UNSPECIFIED
            ? selectedTokenRef.current
            : P_TokenTypes.TOKEN_TYPES_STANDARD;
        wsRef.current?.insertToken(column, tokenType);
    };

    const handleColumnEnter = (column: number) => {
        gameCanvasRef.current?.displayColumnIndicator(true, column);
    };

    const handleColumnLeave = () => {
        gameCanvasRef.current?.displayColumnIndicator(false, 0);
    };

    // Get canvas and start animation
    const canvasRef = useCallback(
        (canvas: HTMLCanvasElement | null) => {
            if (!canvas) return;
            const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
            if (!ctx) return;

            canvas.width = CANVAS_WIDTH;
            canvas.height = CANVAS_HEIGHT;

            const gameCanvas = new GameCanvas(canvas, ctx);
            gameCanvasRef.current = gameCanvas;
            gameCanvasRef.current.setBoardState(currentBoardState);

            animationRef.current = requestAnimationFrame(gameCanvas.gameLoop);

            return () => {
                if (animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                }
            };
        },
        [currentBoardState]
    );

    const langCtx = useContext(langContext);

    const texts = langCtx?.texts.game;

    if (!texts || !queryData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative w-full max-w-[1100px] aspect-video">
            {/* column buttons */}
            {userPlayerID !== P_PlayerIDs.PLAYER_IDS_UNSPECIFIED && (
                <div className="absolute top-[4%] left-[27.3%] w-[45.85%] h-[80%] flex">
                    {Array.from({ length: GAME_COLUMNS }, (_, col) => (
                        <button
                            key={col}
                            onClick={() => {
                                handleMakeMove(col);
                            }}
                            onMouseEnter={() => handleColumnEnter(col)}
                            onMouseLeave={() => handleColumnLeave()}
                            className="pointer-events-auto z-30 flex-1 h-full cursor-pointer"
                        />
                    ))}
                </div>
            )}

            <canvas ref={canvasRef} className="gameCanvas w-full h-full z-0">
                Your browser does not support canvas. Sorry! :(
            </canvas>
        </div>
    );
}

export default GameBoardCanvas;
