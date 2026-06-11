import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { changeLobbySettings, getLobbyDetails } from '@/lib/api';
import { UserContext, langContext } from '@/lib/contexts';
import { leaveLobby, createGame } from '@/lib/api';
import { LobbyWebSocket } from '@/lib/websockets';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import HostControls from '@/components/lobby/HostControls.js';
import MemberTable from '@/components/lobby/MemberTable.js';
import { Copy } from 'lucide-react';
import * as proto from '@/lib/proto.js';
import * as types from '@/lib/types.js';

function Lobby() {
    const navigate = useNavigate();
    const { lobbyCode } = useParams();
    const user = useContext(UserContext);
    const queryClient = useQueryClient();

    const {
        data: queryData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['lobby', lobbyCode],
        queryFn: () => getLobbyDetails(lobbyCode!),
        retry: 1,
    });

    const [lobbyMembersData, setLobbyMembersData] = useState(queryData?.lobbyDetails?.lobbyMembers ?? []);

    useEffect(() => {
        if (queryData?.lobbyDetails?.lobbyMembers) {
            setLobbyMembersData(queryData.lobbyDetails.lobbyMembers);
        }
    }, [queryData]);

    useEffect(() => {
        if (!error) return;

        const err = error as any;

        if (
            err.code === types.P_ErrorCodes.ERROR_CODES_UNAUTHORISED ||
            err.code === types.P_ErrorCodes.ERROR_CODES_DOESNT_EXIST
        ) {
            navigate(`/lobbylist`);
        }
    }, [error, navigate]);

    useEffect(() => {
        if (!lobbyCode) return;
        let cancelled = false;

        LobbyWebSocket.create(lobbyCode, (packet) => {
            switch (packet.response) {
                case proto.ws.LobbyResponses.LOBBY_RESPONSES_UNSPECIFIED:
                    break;
                case proto.ws.LobbyResponses.LOBBY_RESPONSES_JOIN:
                    setLobbyMembersData(packet.join?.users!);
                    break;
                case proto.ws.LobbyResponses.LOBBY_RESPONSES_LEAVE:
                    setLobbyMembersData(packet.leave?.users!);
                    break;
                case proto.ws.LobbyResponses.LOBBY_RESPONSES_CHANGE_PLAYER:
                    setLobbyMembersData(packet.changePlayer?.users!);
                    break;
                case proto.ws.LobbyResponses.LOBBY_RESPONSES_START_GAME:
                    navigate(`/game/${lobbyCode}`);
                    break;
            }
        }).then((instance) => {
            if (cancelled) {
                instance.ws.close();
            }
        });

        return () => {
            cancelled = true;
        };
    }, []);

    const leaveLobby_m = useMutation({
        mutationFn: leaveLobby,
        onSuccess: () => {
            toast.success(`${texts.leaveToast}`);
            navigate('/lobbylist');
        },
        onError: (err) => toast.error(err.message),
    });

    const leaveLobbyButton = () => leaveLobby_m.mutate(lobbyCode!);

    const createGame_m = useMutation({
        mutationFn: createGame,
        onSuccess: () => {
            toast.success(`${texts.createGameToast}`);

            queryClient.invalidateQueries({
                queryKey: ['lobby', lobbyCode],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    const createGameButton = (lobbyCode: string) => createGame_m.mutate(lobbyCode);

    const [isSpecialMode, setIsSpecialMode] = useState(false);

    const enableSpecialMode_m = useMutation({
        mutationFn: changeLobbySettings,
        onSuccess: () => {
            setIsSpecialMode(true);
            toast.success('Special mode enabled!');
        },
        onError: (err) => toast.error(err.message),
    });

    const enableSpecialModeButton = () =>
        enableSpecialMode_m.mutate({
            lobbyCode: lobbyCode!,
            settings: {
                specialGamemode: true,
                tokenQueueMode: types.P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK,
                allowedTokens: [
                    types.P_TokenTypes.TOKEN_TYPES_STANDARD,
                    types.P_TokenTypes.TOKEN_TYPES_NEGATIVE,
                    types.P_TokenTypes.TOKEN_TYPES_AURA,
                    types.P_TokenTypes.TOKEN_TYPES_BOMB,
                    types.P_TokenTypes.TOKEN_TYPES_SPLIT,
                    types.P_TokenTypes.TOKEN_TYPES_FREEZE,
                    types.P_TokenTypes.TOKEN_TYPES_BURN,
                    types.P_TokenTypes.TOKEN_TYPES_REVERSE,
                ],
            },
        });

    const copyLobbyCode = (lobbyCode: string) => {
        navigator.clipboard.writeText(lobbyCode);
    };

    useEffect(() => {
        if (queryData?.lobbyDetails?.hasGame) navigate(`/game/${lobbyCode}`);
    }, [queryData?.lobbyDetails?.hasGame, navigate]);

    const langCtx = useContext(langContext);

    if (!langCtx) return <p>Missing language context!</p>;

    const texts = langCtx.texts.lobby;

    if (isLoading || !queryData || lobbyMembersData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div
            className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[75vw] sm:w-[70vw] md:w-[65vw] lg:w-[60vw] max-w-[1000px]
            h-[80%]
            bg-yellow-800 text-white
            rounded-lg p-4
            flex flex-col
            overflow-hidden
        "
        >
            <div className="mb-3 border-b-[2px] border-amber-950 pb-2 flex justify-between">
                <p>
                    {texts.lobby} {queryData?.lobbyDetails?.lobbyName}
                </p>
                <p>
                    {texts.lobbyCode}
                    <span onClick={() => copyLobbyCode(queryData.lobbyDetails?.code!)} className="cursor-pointer">
                        {queryData?.lobbyDetails?.code} <Copy size={16} className="inline-block" />
                    </span>
                </p>
            </div>

            {/* Top */}
            <div className="flex flex-row flex-1 gap-4 min-h-0 max-h-[80%] min-w-0 select-none">
                <MemberTable membersData={lobbyMembersData} />

                {lobbyMembersData.some((member) => member.userId === user?.id && member.host) && (
                    <HostControls lobbyCode={lobbyCode!} membersData={lobbyMembersData} />
                )}
            </div>

            {/* Bottom */}
            <div className="flex flex-row justify-between mt-auto">
                <Button className="w-[15%] bg-amber-900 hover:bg-amber-950 cursor-pointer rounded-lg" onClick={leaveLobbyButton}>
                    {texts.leaveButton}
                </Button>
                {lobbyMembersData?.some((member) => member.userId === user?.id && member.host) ? (
                    <>
                        <Button
                            className={`w-[15%] cursor-pointer rounded-lg ${isSpecialMode ? 'bg-green-700 hover:bg-green-800' : 'bg-amber-900 hover:bg-amber-950'}`}
                            onClick={enableSpecialModeButton}
                        >
                            {isSpecialMode ? 'Special: ON' : 'Special: OFF'}
                        </Button>
                        <Button
                            className="w-[15%] bg-amber-900 hover:bg-amber-950 cursor-pointer rounded-lg"
                            onClick={() => createGameButton(lobbyCode!)}
                        >
                            {texts.createGameButton}
                        </Button>
                    </>
                ) : (
                    <Button className="w-[15%] text-gray-400 bg-yellow-900 rounded-lg" disabled>
                        {texts.createGameButton}
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Lobby;
