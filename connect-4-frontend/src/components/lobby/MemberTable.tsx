import { useContext, useState } from 'react';
import { UserContext, langContext } from '@/lib/contexts';
import { toast } from 'sonner';
import * as proto from '@/lib/proto.js';
import { useMutation } from '@tanstack/react-query';
import { tempBanUser } from '@/lib/api';
import { ShieldBan, Pencil } from 'lucide-react';
import PlayerSelectDialog from './PlayerSelectDialog';

export default function MemberTable({
    membersData = [],
    isHost = false,
    lobbyCode,
}: {
    membersData?: proto.models.IDetailedLobbyMemberData[];
    isHost?: boolean;
    lobbyCode?: string;
}) {
    const user = useContext(UserContext);
    const [editUserId, setEditUserId] = useState<number | null>(null);

    const langCtx = useContext(langContext);

    if (!langCtx) return <p>Missing language context!</p>;

    const texts = langCtx.texts.lobby;

    const tempBan_m = useMutation({
        mutationFn: (userId: number) => tempBanUser(lobbyCode!, userId),
        onSuccess: () => toast.success(texts.userTempbanned),
        onError: (err) => toast.error(err.message),
    });

    const editMember = membersData.find((m) => m.userId === editUserId);

    return (
        <div className="flex flex-col flex-2 min-w-0">
            <table className="w-full table-fixed text-left">
                <thead className="bg-amber-950">
                    <tr>
                        <th className="p-3 text-base">{texts.players}</th>
                        {isHost && <th className="p-3 w-24" />}
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
                        {membersData.map((member) => (
                            <tr key={member.userId} className="border-b border-amber-950 hover:bg-yellow-800">
                                <td
                                    className={`p-3 truncate text-base ${member.playerId === proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1 ? 'text-red-500' : member.playerId === proto.shared.PlayerIDs.PLAYER_IDS_PLAYER2 ? 'text-yellow-300' : 'text-gray-400'}`}
                                >
                                                                        {member.playerId === proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1 && texts.p1}
                                    {member.playerId === proto.shared.PlayerIDs.PLAYER_IDS_PLAYER2 && texts.p2}
                                    {member.username} {member.host && <span className="text-sky-400 font-bold">{texts.host}</span>} {' '}
                                    {member.userId === user?.id && (
                                        <span className="text-sky-400 font-bold">{texts.labelYou}</span>
                                    )}
                                </td>
                                {isHost && (
                                    <td className="p-3 w-24 text-right">
                                        <span className="inline-flex gap-2">
                                            <button
                                                onClick={() => setEditUserId(member.userId!)}
                                                title={texts.changePlayerId}
                                                className="cursor-pointer"
                                            >
                                                <Pencil
                                                    size={20}
                                                    className="text-gray-400 hover:text-sky-300 transition-colors"
                                                />
                                            </button>
                                            {member.userId !== user?.id && !member.host && (
                                                <button
                                                    onClick={() => tempBan_m.mutate(member.userId!)}
                                                    title={texts.tempban}
                                                    className="cursor-pointer"
                                                >
                                                    <ShieldBan
                                                        size={20}
                                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                                    />
                                                </button>
                                            )}
                                        </span>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {editMember && lobbyCode && (
                <PlayerSelectDialog
                    lobbyCode={lobbyCode}
                    userId={editMember.userId!}
                    currentPlayerId={editMember.playerId ?? proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED}
                    onClose={() => setEditUserId(null)}
                />
            )}
        </div>
    );
}
