import { useEffect, useRef, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GAME_ROWS, GAME_COLUMNS } from '@/lib/config.js';
import { GameWebSocket } from '@/lib/websockets.js';
import { makeMove } from '../lib/gameLogic';
import GameCanvas from '../lib/canvasLogic.js';
import * as proto from '../lib/proto.js';

function Game() {
    const { lobbyCode } = useParams();
    const animationRef = useRef<number | null>(null);
    const gameCanvasRef = useRef<GameCanvas | null>(null);

    const [currentBoardState, setCurrentBoardState] = useState(
        proto.shared.GameBoard.create({
            rows: Array.from({ length: GAME_ROWS }, () => ({
                columns: Array.from({ length: GAME_COLUMNS }, () => proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED),
            })),
        })
    );

    const wsRef = useRef<GameWebSocket | null>(null);

    useEffect(() => {
        if (!lobbyCode) return;

        GameWebSocket.create(lobbyCode, (packet) => {
            switch (packet.response) {
                case proto.ws.WSGameResponses.WS_GAME_RESPONSES_UNSPECIFIED:
                    if (currentTurn === userPlayerID) setCanMove(true);
                    break;
                case proto.ws.WSGameResponses.WS_GAME_RESPONSES_ERROR:
                    if (currentTurn === userPlayerID) setCanMove(true);
                    break;
                case proto.ws.WSGameResponses.WS_GAME_RESPONSES_MOVE:
                    setCurrentTurn(packet.move?.turn!); // temp
                    setUserPlayerID(packet.move?.turn!); // TESTING
                    if (currentTurn === userPlayerID) setCanMove(true);
                    gameCanvasRef.current?.insertToken(packet.move?.column, packet.move?.row, userPlayerID);
                    break;
                case proto.ws.WSGameResponses.WS_GAME_RESPONSES_END:
                    if (packet.end?.draw) {
                        console.log("Draw");
                    }
                    else {
                        console.log(`${packet.end?.user?.username} Wins`);
                    }
                    break;
            }
        }).then((instance) => {
            wsRef.current = instance;
        });

        return () => {
            wsRef.current?.ws.close();
            wsRef.current = null;
        };
    }, []);

    const [canMove, setCanMove] = useState<boolean>(true);

    // Which player's turn it is
    const [currentTurn, setCurrentTurn] = useState<proto.shared.PlayerIDs>(proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1);

    // The user's assigned player
    const [userPlayerID, setUserPlayerID] = useState<proto.shared.PlayerIDs>(proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1);

    const handleMakeMove = (column: number) => {
        if (userPlayerID !== currentTurn || !canMove) return;

        setCanMove(false);
        wsRef.current?.insertTile(column);
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

    return (
        <>
            {/* column buttons */}
            {userPlayerID !== proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED &&
                <div className="absolute top-[4%] left-[27.3%] w-[45.85%] h-[80%] flex">
                    {Array.from({ length: GAME_COLUMNS }, (_, col) => (
                        <button
                            key={col}
                            onClick={() => handleMakeMove(col)}
                            className="pointer-events-auto z-50 flex-1 h-full cursor-pointer"
                        />
                    ))}
                </div>
            }

            <canvas ref={canvasRef} className="gameCanvas absolute top-0 right-0 bottom-0 left-0 w-full h-full z-0">
                Your browser does not support canvas. Sorry! :(
            </canvas>
        </>
    );
}

export default Game;
