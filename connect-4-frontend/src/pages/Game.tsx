import GameBoardCanvas from '@/components/game/GameBoardCanvas';
import { getGameState, leaveLobby } from '@/lib/api';
import {
    P_ErrorCodes,
    P_PlayerIDs,
    P_TokenQueueModes,
    P_TokenTypes,
    type SelectedToken,
    type TPlayerIDs,
    type TTokenQueueData,
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
        console.log(error, lobbyCode);
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
    const [tokenQueueData, setTokenQueueData] = useState<TTokenQueueData>({
        mode: queryData?.game?.tokenQueueMode,
        decks: queryData?.game?.decks,
        tokens: queryData?.game?.currentTokens,
    });
    const [selectedToken, setSelectedToken] = useState<SelectedToken>({ type: P_TokenTypes.TOKEN_TYPES_UNSPECIFIED, key: '' });
    const [currentTurnState, setCurrentTurnState] = useState<TPlayerIDs>(P_PlayerIDs.PLAYER_IDS_PLAYER1);

    // Ref variables
    const wsRef = useRef<GameWebSocket | null>(null);
    const cancelled = useRef(false);
    const userPlayerIDRef = useRef<TPlayerIDs>(P_PlayerIDs.PLAYER_IDS_UNSPECIFIED);
    const gameCanvasRef = useRef<GameCanvas | null>(null);
    const currentTurn = useRef<TPlayerIDs>(P_PlayerIDs.PLAYER_IDS_PLAYER1);
    const tokenQueueDataRef = useRef<TTokenQueueData>({
        mode: queryData?.game?.tokenQueueMode,
        decks: queryData?.game?.decks,
        tokens: queryData?.game?.currentTokens,
    });
    const selectedTokenRef = useRef<TTokenTypes>(P_TokenTypes.TOKEN_TYPES_UNSPECIFIED);

    const setTurn = useCallback(
        (turn: TPlayerIDs) => {
            currentTurn.current = turn;
            setCurrentTurnState(turn);
        },
        [setCurrentTurnState]
    );

    useEffect(() => {
        if (queryData?.game?.turn != null) {
            setTurn(queryData.game.turn);
        }
    }, [queryData?.game?.turn]);

    useEffect(() => {
        if (!queryData?.game) return;

        setTokenQueueDataObject({
            mode: queryData.game.tokenQueueMode,
            decks: queryData.game.decks,
            tokens: queryData.game.currentTokens,
        });
    }, [queryData]);

    // Preselect the correct token once both player identity and token queue data are known
    useEffect(() => {
        if (userPlayerID === P_PlayerIDs.PLAYER_IDS_UNSPECIFIED) return;
        if (!tokenQueueData.mode) return;

        if (
            tokenQueueData.mode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK &&
            tokenQueueData.mode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED
        ) {
            if (userPlayerID === P_PlayerIDs.PLAYER_IDS_PLAYER1) {
                setSelectedTokenType({ type: tokenQueueData.tokens?.player1 ?? P_TokenTypes.TOKEN_TYPES_UNSPECIFIED, key: '1' });
            } else if (userPlayerID === P_PlayerIDs.PLAYER_IDS_PLAYER2) {
                setSelectedTokenType({ type: tokenQueueData.tokens?.player2 ?? P_TokenTypes.TOKEN_TYPES_UNSPECIFIED, key: '2' });
            }
        }
    }, [userPlayerID, tokenQueueData]);

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
        (info: SelectedToken) => {
            setSelectedToken(info);
            selectedTokenRef.current = info.type;
        },
        [setSelectedToken]
    );
    const setTokenQueueDataObject = useCallback(
        (tokenQueueData: TTokenQueueData) => {
            setTokenQueueData(tokenQueueData);
            tokenQueueDataRef.current = tokenQueueData;
        },
        [setTokenQueueData]
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
            tokenQueueDataRef,
            setPlayerID,
            setGameResults,
            setTokenQueueDataObject,
            setSelectedTokenType,
            setTurn,
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

    const backToLobbyButton = () => navigate(`/lobby/${lobbyCode}`, { state: { fromGame: true } });

    const forfeitGameButton = () => wsRef.current?.forfeit();

    // Wait for everything to load properly
    if (isLoading || !queryData || !lobbyCode || !texts) return <p>{texts?.loading ?? 'Loading'}</p>;

    return (
        <div className='flex flex-col flex-1 gap-2 pb-4'>
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
            <div className="flex flex-row justify-evenly items-center p-5 gap-8 rounded-lg bg-yellow-800">
                <div className="flex flex-col items-center gap-5">
                    {userPlayerID !== P_PlayerIDs.PLAYER_IDS_UNSPECIFIED ? (
                        <Button
                            className="bg-amber-900 hover:bg-amber-950 w-45 h-[60%] text-2xl rounded-lg p-2 font-semibold cursor-pointer z-20"
                            onClick={forfeitGameButton}
                            disabled={results !== ''}
                        >
                            {texts.forfeitButton}
                        </Button>
                    ) : (
                        <Button
                            className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer z-20"
                            onClick={leaveLobbyButton}
                        >
                            {texts.resultsLeaveButton}
                        </Button>
                    )}
                    <p className="text-white text-xl font-semibold italic">
                        {currentTurnState === P_PlayerIDs.PLAYER_IDS_PLAYER1 ? texts.player1Turn : texts.player2Turn}
                    </p>
                </div>
                <TokenView
                    tokenQueueData={tokenQueueData}
                    playerID={userPlayerID}
                    selectedToken={selectedToken}
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
                    <h1 className="text-3xl font-serif font-semibold">{results}</h1>

                    <div className="flex flex-row gap-4 justify-between">
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
            return texts.endUnspecified;
        default:
            return texts.endDefault;
    }
}

function setUpGameWebsocket(
    lobbyCode: string,
    wsRef: RefObject<GameWebSocket | null>,
    userPlayerID: RefObject<TPlayerIDs | null>,
    gameCanvasRef: RefObject<GameCanvas | null>,
    currentTurn: RefObject<TPlayerIDs>,
    cancelled: RefObject<boolean>,
    tokenQueueDataRef: RefObject<TTokenQueueData>,
    setUserPlayerID: (pid: TPlayerIDs) => void,
    setGameResults: (res: string) => void,
    setTokenQueueDataObject: (tokenQueueData: TTokenQueueData) => void,
    setSelectedTokenType: (type: TTokenTypes) => void,
    setTurn: (turn: TPlayerIDs) => void,
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

                if (
                    tokenQueueDataRef.current.mode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK &&
                    tokenQueueDataRef.current.mode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED
                ) {
                    if (userPlayerID.current === P_PlayerIDs.PLAYER_IDS_PLAYER1) {
                        setSelectedTokenType(tokenQueueDataRef.current.tokens?.player1 ?? P_TokenTypes.TOKEN_TYPES_UNSPECIFIED);
                    } else if (userPlayerID.current === P_PlayerIDs.PLAYER_IDS_PLAYER2) {
                        setSelectedTokenType(tokenQueueDataRef.current.tokens?.player2 ?? P_TokenTypes.TOKEN_TYPES_UNSPECIFIED);
                    }
                }

                break;
            case p_ws.GameResponses.GAME_RESPONSES_MOVE:
                console.log(packet.toJSON());
                if (!packet.move?.turn) return;

                if (packet.move.turn) setTurn(packet.move.turn);

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

                setTokenQueueDataObject({
                    mode: tokenQueueDataRef.current.mode,
                    tokens: packet.move.currentTokens,
                    decks: packet.move.decks,
                });

                if (
                    tokenQueueDataRef.current.mode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK &&
                    tokenQueueDataRef.current.mode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED
                ) {
                    if (userPlayerID.current === P_PlayerIDs.PLAYER_IDS_PLAYER1) {
                        setSelectedTokenType({
                            type: packet.move.currentTokens?.player1 ?? P_TokenTypes.TOKEN_TYPES_UNSPECIFIED,
                            key: '1',
                        });
                    } else if (userPlayerID.current === P_PlayerIDs.PLAYER_IDS_PLAYER2) {
                        setSelectedTokenType({
                            type: packet.move.currentTokens?.player2 ?? P_TokenTypes.TOKEN_TYPES_UNSPECIFIED,
                            key: '2',
                        });
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

                setTokenQueueDataObject({
                    mode: tokenQueueDataRef.current.mode,
                    tokens: packet.end.currentTokens,
                    decks: packet.end.decks,
                });

                if (
                    tokenQueueDataRef.current.mode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK &&
                    tokenQueueDataRef.current.mode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED
                ) {
                    if (userPlayerID.current === P_PlayerIDs.PLAYER_IDS_PLAYER1) {
                        setSelectedTokenType({
                            type: packet.end.currentTokens?.player1 ?? P_TokenTypes.TOKEN_TYPES_UNSPECIFIED,
                            key: '1',
                        });
                    } else if (userPlayerID.current === P_PlayerIDs.PLAYER_IDS_PLAYER2) {
                        setSelectedTokenType({
                            type: packet.end.currentTokens?.player2 ?? P_TokenTypes.TOKEN_TYPES_UNSPECIFIED,
                            key: '2',
                        });
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
