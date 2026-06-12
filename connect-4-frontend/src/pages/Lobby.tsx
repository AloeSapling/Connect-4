import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getLobbyDetails } from '@/lib/api';
import { UserContext, langContext } from '@/lib/contexts';
import { leaveLobby, createGame } from '@/lib/api';
import { LobbyWebSocket } from '@/lib/websockets';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import MemberTable from '@/components/lobby/MemberTable.js';
import LobbySettingsCard from '@/components/lobby/LobbySettingsCard.js';
import { Copy } from 'lucide-react';
import * as proto from '@/lib/proto.js';
import * as types from '@/lib/types.js';

function Lobby() {
    const navigate = useNavigate();
    const location = useLocation();
    const { lobbyCode } = useParams();
    const user = useContext(UserContext);
    const queryClient = useQueryClient();
    const fromGame = (location.state as { fromGame?: boolean } | null)?.fromGame;

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
    const [lobbySettings, setLobbySettings] = useState(queryData?.lobbyDetails?.settings ?? {});

    useEffect(() => {
        if (queryData?.lobbyDetails?.lobbyMembers) {
            setLobbyMembersData(queryData.lobbyDetails.lobbyMembers);
        }
        if (queryData?.lobbyDetails?.settings) {
            setLobbySettings(queryData.lobbyDetails.settings);
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
                case proto.ws.LobbyResponses.LOBBY_RESPONSES_SETTINGS_CHANGED:
                    setLobbySettings(packet.settings!);
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

    const copyLobbyCode = (lobbyCode: string) => {
        navigator.clipboard.writeText(lobbyCode);
    };

    useEffect(() => {
        if (queryData?.lobbyDetails?.hasGame && !fromGame) navigate(`/game/${lobbyCode}`);
    }, [queryData?.lobbyDetails?.hasGame, fromGame, navigate]);

    const langCtx = useContext(langContext);

    if (!langCtx) return <p>Missing language context!</p>;

    const texts = langCtx.texts.lobby;

    if (isLoading || !queryData || lobbyMembersData.length === 0) {
        return <div>{langCtx.texts.lobby.loading}</div>;
    }

    return (
        <div className="w-11/12 max-w-6xl p-4 flex flex-col bg-yellow-800/80 text-white rounded-lg">
            <div className="mb-3 border-b-[2px] border-amber-950 pb-3 flex justify-between items-center text-lg">
                <p className="font-semibold">
                    {texts.lobby} {queryData?.lobbyDetails?.lobbyName}
                </p>
                <p className="font-semibold">
                    {texts.lobbyCode}
                    <span onClick={() => copyLobbyCode(queryData.lobbyDetails?.code!)} className="cursor-pointer ml-1">
                        {queryData?.lobbyDetails?.code} <Copy size={22} className="inline-block ml-0.5" />
                    </span>
                </p>
            </div>

            {/* Top */}
            <div className="flex flex-row flex-1 gap-6 min-h-0 max-h-[80%] min-w-0 select-none">
                <MemberTable
                    membersData={lobbyMembersData}
                    lobbyCode={lobbyCode}
                    isHost={lobbyMembersData.some((member) => member.userId === user?.id && member.host)}
                />

                <LobbySettingsCard
                    lobbyCode={lobbyCode!}
                    membersData={lobbyMembersData}
                    settings={lobbySettings}
                    isHost={lobbyMembersData.some((member) => member.userId === user?.id && member.host)}
                />
            </div>

            {/* Bottom */}
            <div className="flex flex-row justify-between mt-4">
                <Button
                    className="w-[17%] py-5 text-base bg-amber-900 hover:bg-amber-950 cursor-pointer rounded-lg"
                    onClick={leaveLobbyButton}
                >
                    {texts.leaveButton}
                </Button>
                {lobbyMembersData?.some((member) => member.userId === user?.id && member.host) ? (
                    <Button
                        className="w-[17%] py-5 text-base bg-amber-900 hover:bg-amber-950 cursor-pointer rounded-lg"
                        onClick={() => createGameButton(lobbyCode!)}
                    >
                        {texts.createGameButton}
                    </Button>
                ) : (
                    <Button className="w-[17%] py-5 text-base text-gray-400 bg-yellow-900 rounded-lg" disabled>
                        {texts.createGameButton}
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Lobby;
