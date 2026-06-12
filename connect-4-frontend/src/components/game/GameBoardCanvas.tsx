import { useEffect, useLayoutEffect, useRef, useState, useContext, type RefObject } from 'react';
import { GAME_ROWS, GAME_COLUMNS } from '@/lib/config.js';
import { langContext } from '@/lib/contexts';
import { GameWebSocket } from '@/lib/websockets.js';
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
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [scale, setScale] = useState(1);

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

    // Compute CSS scale and set container height to match canvas aspect ratio
    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const syncSize = () => {
            const rect = container.getBoundingClientRect();
            const s = rect.width / 1280;
            setScale(s);
            container.style.height = `${rect.width * (720 / 1280)}px`;
        };

        syncSize();
        const observer = new ResizeObserver(syncSize);
        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    // Initialize GameCanvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = 1280;
        canvas.height = 720;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const gameCanvas = new GameCanvas(canvas, ctx);
        gameCanvasRef.current = gameCanvas;
        gameCanvasRef.current.setBoardState(currentBoardState);

        animationRef.current = requestAnimationFrame(gameCanvas.gameLoop);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const handleMakeMove = (column: number) => {
        if (userPlayerIDRef.current !== currentTurn.current) return;

        wsRef.current?.insertToken(column, selectedTokenRef.current ?? P_TokenTypes.TOKEN_TYPES_STANDARD);
    };

    const handleColumnEnter = (column: number) => {
        gameCanvasRef.current?.displayColumnIndicator(true, column);
    };

    const handleColumnLeave = () => {
        gameCanvasRef.current?.displayColumnIndicator(false, 0);
    };

    const langCtx = useContext(langContext);

    const texts = langCtx?.texts.game;

    if (!texts || !queryData) {
        return <div>{texts?.loading ?? 'Loading...'}</div>;
    }

    return (
        <div ref={containerRef} className="relative w-full max-w-[1100px] overflow-hidden">
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

            <canvas
                ref={canvasRef}
                width={1280}
                height={720}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            >
                {texts.canvasUnsupported}
            </canvas>
        </div>
    );
}

export default GameBoardCanvas;
