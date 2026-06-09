import { useEffect, useRef, useState, useCallback, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GAME_ROWS, GAME_COLUMNS } from '@/lib/config.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getGameState, leaveLobby } from '@/lib/api';
import { langContext } from '@/lib/contexts';
import { toast } from 'sonner';
import { GameWebSocket } from '@/lib/websockets.js';
// import { makeMove } from '@/lib/gameLogic';
import GameCanvas from '@/lib/canvasLogic.js';
import * as proto from '@/lib/proto.js';
import * as types from '@/lib/types.js';
import { Button } from '@/components/ui/button';

function Game() {
    const navigate = useNavigate();
    const { lobbyCode } = useParams();
    const animationRef = useRef<number | null>(null);
    const gameCanvasRef = useRef<GameCanvas | null>(null);

    const { data: queryData, isLoading, error } = useQuery({
        queryKey: ['lobby', lobbyCode],
        queryFn: () => getGameState(lobbyCode!),
        refetchOnWindowFocus: false,
        retry: 1,
    });

    const [currentBoardState, setCurrentBoardState] = useState(queryData?.game?.board ??
        proto.shared.GameBoard.create({
            rows: Array.from({ length: GAME_ROWS }, () => ({
                tokens: Array.from({ length: GAME_COLUMNS }, () => ({
                    playerId: types.P_PlayerIDs.PLAYER_IDS_UNSPECIFIED,
                    tokenType: types.P_TokenTypes.TOKEN_TYPES_UNSPECIFIED
                })),
            })),
        })
    );

    useEffect(() => {
        if (queryData?.game?.board) {
            setCurrentBoardState(queryData.game.board);
        }
    }, [queryData]);

    useEffect(() => {
        if (!gameCanvasRef.current) return;

        gameCanvasRef.current.setBoardState(currentBoardState);
    }, [currentBoardState]);

    useEffect(() => {
        if (!error) return;

        const err = error as any;

        if (err.code === types.P_ErrorCodes.ERROR_CODES_UNAUTHORISED ||
            err.code === types.P_ErrorCodes.ERROR_CODES_GAME_EXPIRED ||
            err.code === types.P_ErrorCodes.ERROR_CODES_GAME_LOCKED ||
            err.code === types.P_ErrorCodes.ERROR_CODES_DOESNT_EXIST ||
            err.status === 400) {
            wsRef.current?.ws.close();
            navigate(`/lobby/${lobbyCode}`);
        }
    }, [error, navigate, lobbyCode]);

    const [canMove, setCanMove] = useState<boolean>(true);

    // Which player's turn it is
    const [currentTurn, setCurrentTurn] = useState<types.TPlayerIDs>(types.P_PlayerIDs.PLAYER_IDS_PLAYER1);

    // The user's assigned player
    const [userPlayerID, setUserPlayerID] = useState<types.TPlayerIDs>(types.P_PlayerIDs.PLAYER_IDS_UNSPECIFIED);

    const [results, setResults] = useState<string>("");

    const leaveLobby_m = useMutation({
        mutationFn: leaveLobby,
        onSuccess: () => {
            toast.success(`${texts.leaveToast}`);
            navigate('/lobbylist');
        },
        onError: (err) => toast.error(err.message)
    });

    const leaveLobbyButton = () =>
        leaveLobby_m.mutate(lobbyCode!);

    const backToLobbyButton = () =>
        navigate(`/lobby/${lobbyCode}`);

    const forfeitGameButton = () =>
        wsRef.current?.forfeit();

    const wsRef = useRef<GameWebSocket | null>(null);

    useEffect(() => {
        if (!lobbyCode) return;
        let cancelled = false;
        console.log("Test");

        GameWebSocket.create(lobbyCode, (packet) => {

            console.log(packet.toJSON());
            switch (packet.response) {
                case proto.ws.GameResponses.GAME_RESPONSES_UNSPECIFIED:
                    if (currentTurn === userPlayerID) setCanMove(true);
                    console.log("unknown");
                    break;
                case proto.ws.GameResponses.GAME_RESPONSES_ERROR:
                    if (currentTurn === userPlayerID) setCanMove(true);
                    console.log(packet.toJSON())
                    break;
                case proto.ws.GameResponses.GAME_RESPONSES_INIT:
                    setUserPlayerID(packet.init?.playerId || types.P_PlayerIDs.PLAYER_IDS_UNSPECIFIED);
                    break;
                case proto.ws.GameResponses.GAME_RESPONSES_MOVE:
                    console.log(packet.toJSON());
                    if (!packet.move?.turn) return;

                    setCurrentTurn(packet.move?.turn); // temp

                    if (packet.move.turn === userPlayerID) setCanMove(true);

                    gameCanvasRef.current?.insertToken(packet.move?.tile?.column!, packet.move?.tile?.row!, packet.move.tile.token?.playerId!);

                    break;
                case proto.ws.GameResponses.GAME_RESPONSES_END:
                    console.log(packet.toJSON());
                    if (!packet.end) return;

                    if (packet.end.tile?.token) gameCanvasRef.current?.insertToken(packet.end?.tile?.column!, packet.end?.tile?.row!, packet.end.tile.token?.playerId!);

                    switch (packet.end.endType) {
                        case proto.ws.GameEndTypes.GAME_END_TYPES_DRAW:
                            setResults(texts.resultsDrawText);
                            break;
                        case proto.ws.GameEndTypes.GAME_END_TYPES_STANDARD_WIN:
                            setResults(`${packet.end?.winner?.username} ${texts.resultsWinText}`);
                            break;
                        case proto.ws.GameEndTypes.GAME_END_TYPES_FORFEITED:
                            setResults(`${packet.end.loser?.username} ${texts.resultsForfeitText} ${packet.end.winner?.username} ${texts.resultsWinText}`);
                            break;
                        case proto.ws.GameEndTypes.GAME_END_TYPES_UNSPECIFIED:
                            setResults(`unspecified`);
                            break;
                        default:
                            setResults(`default`);
                    }
                    break;
            }
        }).then((instance) => {
            if (cancelled)
                instance.ws.close();
            else
                wsRef.current = instance;
        });

        return () => {
            wsRef.current?.ws.close();
            wsRef.current = null;
            cancelled = true;
        };
    }, []);

    const [tokenType, setTokenType] = useState(types.P_TokenTypes.TOKEN_TYPES_STANDARD);

    const handleMakeMove = (column: number) => {
        if (userPlayerID !== currentTurn || !canMove) return;

        setCanMove(false);
        wsRef.current?.insertToken(column, tokenType);
    };

    const handleColumnEnter = (column: number) => {
        gameCanvasRef.current?.displayColumnIndicator(true, column);
    }

    const handleColumnLeave = () => {
        gameCanvasRef.current?.displayColumnIndicator(false, 0);
    }

    // Get canvas and start animation
    const canvasRef = useCallback((canvas: HTMLCanvasElement | null) => {
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
    }, []);

    const langCtx = useContext(langContext);

    if (!langCtx) return <p>Missing language context!</p>;

    const texts = langCtx.texts.game;

    if (isLoading || !queryData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {/* column buttons */}
            {userPlayerID !== types.P_PlayerIDs.PLAYER_IDS_UNSPECIFIED &&
                <div className="absolute top-[4%] left-[27.3%] w-[45.85%] h-[80%] flex">
                    {Array.from({ length: GAME_COLUMNS }, (_, col) => (
                        <button
                            key={col}
                            onClick={() => {
                                handleMakeMove(col)
                            }}
                            onMouseEnter={() => handleColumnEnter(col)}
                            onMouseLeave={() => handleColumnLeave()}
                            className="pointer-events-auto z-30 flex-1 h-full cursor-pointer"
                        />
                    ))}
                </div>
            }

            {userPlayerID !== types.P_PlayerIDs.PLAYER_IDS_UNSPECIFIED ?
                <>
                    {results === "" &&
                        <Button className="absolute top-[3%] left-[3%] bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer z-20" onClick={forfeitGameButton}>
                            {texts.forfeitButton}
                        </Button>
                    }
                    <input value={tokenType} onChange={(e) => setTokenType(Number(e.target.value) as types.TTokenTypes)} />
                </>
                :
                <Button className="absolute top-[3%] left-[3%] bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer z-20" onClick={leaveLobbyButton}>
                    {texts.resultsLeaveButton}
                </Button>
            }


            {results !== "" &&
                <div className="
                    bg-yellow-800
                    text-white
                    text-center
                    justify-center
                    content-center
                    items-center-safe
                    text-xl
                    rounded-md
                    flex flex-col
                    gap-y-10
                    z-50
                    absolute w-[300px] md:w-[350px]
                    h-[150px] md:h-[200px]
                    top-[50%] left-[50%]
                    translate-x-[-50%] translate-y-[-50%]
                ">
                    <h1 className='text-3xl'>{results}</h1>

                    <div className="flex flex-row justify-between">
                        <Button className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer" onClick={leaveLobbyButton}>
                            {texts.resultsLeaveButton}
                        </Button>
                        <Button className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer" onClick={backToLobbyButton}>
                            {texts.resultsBackToLobbyButton}
                        </Button>
                    </div>
                </div>
            }

            <canvas ref={canvasRef} className="gameCanvas absolute top-0 right-0 bottom-0 left-0 w-full h-full z-0">
                Your browser does not support canvas. Sorry! :(
            </canvas>
        </>
    );
}

export default Game;
