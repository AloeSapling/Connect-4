import GameBoardCanvas from '@/components/game/GameBoardCanvas';
import { getGameState, leaveLobby } from '@/lib/api';
import {
    P_ErrorCodes,
    P_PlayerIDs,
    P_TokenQueueModes,
    P_TokenTypes,
    type TPlayerIDs,
    type TTokenQueueModes,
    type TTokenTypes,
} from '@/lib/types';
import { GameWebSocket } from '@/lib/websockets';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useCallback, useContext, useEffect, useRef, useState, type RefObject } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ws as p_ws } from '@/lib/proto';
import type GameCanvas from '@/lib/canvasLogic';
import type { PageTexts } from '@/lib/lang';
import { langContext } from '@/lib/contexts';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import TokenView from '@/components/game/TokenView';

export default function Game() {
    const navigate = useNavigate();
    const { lobbyCode } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
        data: queryData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['game', lobbyCode],
        queryFn: () => getGameState(lobbyCode!),
        refetchOnWindowFocus: false,
        retry: 1,
    });

    // Handle errors gracefully
    useEffect(() => {
        if (!error || !lobbyCode) return;

        const err = error as any;

        if (
            err.code === P_ErrorCodes.ERROR_CODES_UNAUTHORISED ||
            err.code === P_ErrorCodes.ERROR_CODES_GAME_EXPIRED ||
            err.code === P_ErrorCodes.ERROR_CODES_GAME_LOCKED ||
            err.code === P_ErrorCodes.ERROR_CODES_DOESNT_EXIST ||
            err.status === 400
        ) {
            navigate(`/lobby/${lobbyCode}`);
        }
    }, [error, navigate, lobbyCode]);

    const langCtx = useContext(langContext);
    const texts = langCtx?.texts.game;

    // State variables
    const [userPlayerID, setUserPlayerID] = useState<TPlayerIDs>(P_PlayerIDs.PLAYER_IDS_UNSPECIFIED);
    const [results, setResults] = useState<string>('');
    const [selectedToken, setSelectedToken] = useState<TTokenTypes>(P_TokenTypes.TOKEN_TYPES_STANDARD);

    // Ref variables
    const wsRef = useRef<GameWebSocket | null>(null);
    const cancelled = useRef(false);
    const userPlayerIDRef = useRef<TPlayerIDs>(P_PlayerIDs.PLAYER_IDS_UNSPECIFIED);
    const gameCanvasRef = useRef<GameCanvas | null>(null);
    const currentTurn = useRef<TPlayerIDs>(P_PlayerIDs.PLAYER_IDS_PLAYER1);

    useEffect(() => {
        if (queryData?.game?.turn != null) {
            currentTurn.current = queryData.game.turn;
        }
    }, [queryData?.game?.turn]);
    const selectedTokenRef = useRef<TTokenTypes>(P_TokenTypes.TOKEN_TYPES_STANDARD);

    // Set state variable callbacks
    const setPlayerID = useCallback((pid: TPlayerIDs) => {
        setUserPlayerID(pid);
        userPlayerIDRef.current = pid;
    }, []);
    const setGameResults = useCallback(
        (res: string) => {
            setResults(res);
        },
        [setResults]
    );
    const setSelectedTokenType = useCallback(
        (type: TTokenTypes) => {
            setSelectedToken(type);
            selectedTokenRef.current = type;
        },
        [setSelectedToken]
    );

    // Set up the game websocket and set the ref
    useEffect(() => {
        if (!lobbyCode || !texts) return;

        cancelled.current = false;

        setUpGameWebsocket(
            lobbyCode,
            wsRef,
            userPlayerIDRef,
            gameCanvasRef,
            currentTurn,
            cancelled,
            queryData?.game?.tokenQueueMode ?? P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED,
            setPlayerID,
            setGameResults,
            setSelectedToken,
            texts
        );

        return () => {
            wsRef.current?.ws.close();
            wsRef.current = null;
            cancelled.current = true;
        };
    }, [lobbyCode, texts]);

    // Button actions
    const leaveLobby_m = useMutation({
        mutationFn: leaveLobby,
        onSuccess: () => {
            toast.success(`${texts?.leaveToast}`);
            navigate('/lobbylist');
        },
        onError: (err) => toast.error(err.message),
    });

    const leaveLobbyButton = () => leaveLobby_m.mutate(lobbyCode!);

    const backToLobbyButton = () => navigate(`/lobby/${lobbyCode}`);

    const forfeitGameButton = () => wsRef.current?.forfeit();

    // Wait for everything to load properly
    if (isLoading || !queryData || !lobbyCode || !texts) return <p>Loading</p>;

    return (
        <div>
            {/* The game's board canvas element, handles all of the on-board game playing logic */}
            <GameBoardCanvas
                queryData={queryData}
                wsRef={wsRef}
                gameCanvasRef={gameCanvasRef}
                userPlayerID={userPlayerID}
                userPlayerIDRef={userPlayerIDRef}
                currentTurn={currentTurn}
                selectedTokenRef={selectedTokenRef}
            />
            <div className="flex flex-row items-center p-5 gap-20">
                {userPlayerID !== P_PlayerIDs.PLAYER_IDS_UNSPECIFIED ? (
                    <>
                        {results === '' && (
                            <Button
                                className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer z-20"
                                onClick={forfeitGameButton}
                            >
                                {texts.forfeitButton}
                            </Button>
                        )}
                    </>
                ) : (
                    <Button
                        className="absolute top-[3%] left-[3%] bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer z-20"
                        onClick={leaveLobbyButton}
                    >
                        {texts.resultsLeaveButton}
                    </Button>
                )}
                <TokenView
                    tokenQueueData={{
                        mode: queryData.game?.tokenQueueMode,
                        decks: queryData.game?.decks,
                        tokens: queryData.game?.currentTokens,
                    }}
                    playerID={userPlayerID}
                    onTokenSelect={setSelectedTokenType}
                />
            </div>

            {/* Results dialog */}
            {results !== '' && (
                <div
                    className="
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
                "
                >
                    <h1 className="text-3xl">{results}</h1>

                    <div className="flex flex-row justify-between">
                        <Button
                            className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer"
                            onClick={leaveLobbyButton}
                        >
                            {texts.resultsLeaveButton}
                        </Button>
                        <Button
                            className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer"
                            onClick={backToLobbyButton}
                        >
                            {texts.resultsBackToLobbyButton}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

function getResults(packet: p_ws.GameResponsePacket, texts: PageTexts['game']): string {
    if (!packet.end) return '';

    switch (packet.end.endType) {
        case p_ws.GameEndTypes.GAME_END_TYPES_DRAW:
            return texts.resultsDrawText;
        case p_ws.GameEndTypes.GAME_END_TYPES_STANDARD_WIN:
            return `${packet.end?.winner?.username} ${texts.resultsWinText}`;
        case p_ws.GameEndTypes.GAME_END_TYPES_FORFEITED:
            return `${packet.end.loser?.username} ${texts.resultsForfeitText} ${packet.end.winner?.username} ${texts.resultsWinText}`;
        case p_ws.GameEndTypes.GAME_END_TYPES_UNSPECIFIED:
            return `unspecified`;
        default:
            return `default`;
    }
}

function setUpGameWebsocket(
    lobbyCode: string,
    wsRef: RefObject<GameWebSocket | null>,
    userPlayerID: RefObject<TPlayerIDs | null>,
    gameCanvasRef: RefObject<GameCanvas | null>,
    currentTurn: RefObject<TPlayerIDs>,
    cancelled: RefObject<boolean>,
    tokenQueueMode: TTokenQueueModes,
    setUserPlayerID: (pid: TPlayerIDs) => void,
    setGameResults: (res: string) => void,
    setSelectedTokenType: (type: TTokenTypes) => void,
    texts: PageTexts['game']
) {
    GameWebSocket.create(lobbyCode, (packet) => {
        console.log(packet.toJSON());
        switch (packet.response) {
            case p_ws.GameResponses.GAME_RESPONSES_UNSPECIFIED:
                // if (currentTurn.current === userPlayerID.current) setCanMove(true);
                console.log('unknown');
                break;
            case p_ws.GameResponses.GAME_RESPONSES_ERROR:
                // if (currentTurn.current === userPlayerID.current) setCanMove(true);
                console.log(packet.toJSON());
                break;
            case p_ws.GameResponses.GAME_RESPONSES_INIT:
                console.log(packet.init?.playerId);

                userPlayerID.current = packet.init?.playerId || P_PlayerIDs.PLAYER_IDS_UNSPECIFIED;
                setUserPlayerID(userPlayerID.current);

                break;
            case p_ws.GameResponses.GAME_RESPONSES_MOVE:
                console.log(packet.toJSON());
                if (!packet.move?.turn) return;

                currentTurn.current = packet.move?.turn; // temp

                console.log(userPlayerID.current);
                // if (packet.move.turn === userPlayerID.current) setCanMove(true);

                console.log('placeToken', gameCanvasRef.current, packet.move?.tile?.column, packet.move?.tile?.row);
                gameCanvasRef.current?.placeToken(
                    packet.move?.tile?.column!,
                    packet.move?.tile?.row!,
                    packet.move.tile!.token?.playerId!,
                    packet.move.tile?.token?.tokenType!,
                    packet.move.deletedTiles!,
                    packet.move.fallingTokens!,
                    packet.move.frozenColumns!
                );

                if (
                    tokenQueueMode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK &&
                    tokenQueueMode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED
                ) {
                    if (userPlayerID.current === P_PlayerIDs.PLAYER_IDS_PLAYER1) {
                        setSelectedTokenType(packet.move.currentTokens?.player1 ?? P_TokenTypes.TOKEN_TYPES_UNSPECIFIED);
                    } else if (userPlayerID.current === P_PlayerIDs.PLAYER_IDS_PLAYER2) {
                        setSelectedTokenType(packet.move.currentTokens?.player2 ?? P_TokenTypes.TOKEN_TYPES_UNSPECIFIED);
                    }
                }

                break;
            case p_ws.GameResponses.GAME_RESPONSES_END:
                console.log(packet.toJSON());
                if (!packet.end) return;

                if (packet.end.tile?.token)
                    gameCanvasRef.current?.placeToken(
                        packet.end?.tile?.column!,
                        packet.end?.tile?.row!,
                        packet.end.tile.token?.playerId!,
                        packet.end.tile?.token?.tokenType!,
                        packet.end.deletedTiles!,
                        packet.end.fallingTokens!,
                        packet.end.frozenColumns!
                    );

                if (
                    tokenQueueMode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK &&
                    tokenQueueMode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED
                ) {
                    if (userPlayerID.current === P_PlayerIDs.PLAYER_IDS_PLAYER1) {
                        setSelectedTokenType(packet.end.currentTokens?.player1 ?? P_TokenTypes.TOKEN_TYPES_UNSPECIFIED);
                    } else if (userPlayerID.current === P_PlayerIDs.PLAYER_IDS_PLAYER2) {
                        setSelectedTokenType(packet.end.currentTokens?.player2 ?? P_TokenTypes.TOKEN_TYPES_UNSPECIFIED);
                    }
                }

                setGameResults(getResults(packet, texts));

                break;
        }
    }).then((instance) => {
        if (cancelled.current) instance.ws.close();
        else wsRef.current = instance;
    });
}
