import { useContext } from 'react';
import { UserContext, langContext } from '@/lib/contexts';
import * as proto from '@/lib/proto.js';

export default function MemberTable({ membersData = [] }: { membersData?: proto.models.IDetailedLobbyMemberData[] }) {
    const user = useContext(UserContext);

    const langCtx = useContext(langContext);
            
    if (!langCtx) return <p>Missing language context!</p>;
        
    const texts = langCtx.texts.lobby;

    return (
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
                        {membersData.map((member) => (
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
    )
}