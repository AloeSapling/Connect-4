import { useContext } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from "@tanstack/react-query";
import { getLobbyDetails } from '@/lib/api';
import { UserContext, langContext } from '@/lib/contexts';
import { leaveLobby } from '@/lib/api';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import * as proto from '../lib/proto.js';
import HostControls from '@/components/lobby/HostControls.js';

// type LobbyMember = {
//     id: number;
//     lobby_code: string;
//     user_id: number;
//     host: boolean;
//     player_id: proto.shared.PlayerIDs;
//     player_type: proto.shared.PlayerTypes;
// };

function Lobby() {
    const navigate = useNavigate();
    let { lobbyCode } = useParams();
    const user = useContext(UserContext);

    const { data: queryData, refetch } = useQuery({
        queryKey: [lobbyCode],
        queryFn: () => getLobbyDetails(lobbyCode!),
    });
    console.log(queryData);

    const leaveLobby_m = useMutation({
        mutationFn: leaveLobby,
        onSuccess: () => {
            toast.success(`${texts.leaveToast}`);
            navigate('/lobbylist');
        },
        onError: (err) => toast.error(err.message)
    });

    const leaveLobbyButton = () => leaveLobby_m.mutate(lobbyCode!);

    const startGameButton = () => {
        // placeholder
        return;
    };

    const langCtx = useContext(langContext)!;
        
    if (!langCtx) return <p>Missing language context!</p>;
        
    const texts = langCtx.texts.lobby;

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
                <p>{texts.lobby} {queryData?.lobbyDetails?.lobbyName}</p>
                <p>{texts.lobbyCode} {queryData?.lobbyDetails?.code}</p>
            </div>

            {/* Tables */}
            <div className="flex flex-row flex-1 gap-4 min-h-0 max-h-[80%] min-w-0 select-none">
                {/* Players */}
                <div className="flex flex-col flex-2 min-w-0">
                    <table className="w-full table-fixed text-left">
                        <thead className="bg-amber-950">
                            <tr>
                                <th className="p-2">{texts.players}</th>
                            </tr>
                        </thead>
                    </table>

                    <div
                        className="
                        flex-1
                        overflow-y-auto
                        overflow-x-hidden
                        bg-yellow-900
                        rounded-b
                        pr-2
                        scrollbar-thin
                        scrollbar-track-yellow-900
                        scrollbar-thumb-amber-800
                        hover:scrollbar-thumb-amber-700
                    "
                    >
                        <table className="w-full table-fixed">
                            <tbody>
                                {queryData?.lobbyDetails?.lobbyMembers!.map((member) => (
                                    <tr key={member.userId} className="border-b border-amber-950 hover:bg-yellow-800">
                                        <td className="p-2 truncate">
                                            {member.playerId === proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1 && 'P1: '}
                                            {member.playerId === proto.shared.PlayerIDs.PLAYER_IDS_PLAYER2 && 'P2: '}
                                            {member.username} {member.host && '(host)'} {member.userId === user?.id && `${texts.labelYou}`}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {queryData?.lobbyDetails?.lobbyMembers?.some(
                    (member) => member.userId === user?.id && member.host
                ) && (
                    <HostControls lobbyCode={lobbyCode!} membersData={queryData?.lobbyDetails?.lobbyMembers!} />
                )}
            </div>

            <div className="flex flex-row justify-between mt-auto">
                <Button className="w-[15%] bg-amber-900 hover:bg-amber-950 cursor-pointer rounded-lg" onClick={leaveLobbyButton}>
                    {texts.leaveButton}
                </Button>
                {queryData?.lobbyDetails?.lobbyMembers?.some(
                    (member) => member.userId === user?.id && member.host
                ) ? (
                    <Button className="w-[15%] bg-amber-900 hover:bg-amber-950 cursor-pointer rounded-lg" onClick={startGameButton}>
                        {texts.startGameButton}
                    </Button>
                ) : (
                    <Button className="w-[15%] text-gray-400 bg-yellow-900 rounded-lg" disabled>
                        {texts.startGameButton}
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Lobby;
