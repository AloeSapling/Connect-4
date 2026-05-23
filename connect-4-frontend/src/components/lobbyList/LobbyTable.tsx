import { useNavigate } from "react-router-dom";
import { joinLobby } from "@/lib/api";
import { langContext } from '@/lib/contexts';
import { toast } from "sonner";
import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import * as proto from "../../lib/proto.js"

export default function LobbyTable({ lobbyData }: { lobbyData: proto.models.ILobbyData[] }) {
    const navigate = useNavigate();
    
    const joinLobby_m = useMutation({
        mutationFn: joinLobby,
        onSuccess: (_data, code) => {
            toast.success(`${texts.lobbyToast}`);
            navigate(`/lobby/${code}`);
        },
        onError: (err) => toast.error(err.message)
    });

    const selectLobby = (code: string) => joinLobby_m.mutate(code);

    const langCtx = useContext(langContext)!;
        
    if (!langCtx) return <p>Missing language context!</p>;
       
    const texts = langCtx.texts.lobbyList;

    return (
        <div className="flex flex-col min-h-0 min-w-0 select-none">
            <table className="w-full table-fixed text-left">
                <thead className="bg-amber-950">
                    <tr>
                        <th className="p-2">{texts.tableName}</th>
                        <th className="p-2 w-24">{texts.tablePlayers}</th>
                        <th className="p-2 w-24">{texts.tableHasGame}</th>
                    </tr>
                </thead>
            </table>
            <div className="
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
                ">
                <table className="w-full table-fixed">
                    <tbody>
                        {lobbyData.map((lobby) => lobby.code && (
                            <tr
                                key={lobby.code}
                                className="border-b border-amber-950 hover:bg-yellow-800 cursor-pointer"
                                onClick={() => selectLobby(lobby.code!)}
                            >
                                <td className="p-2 truncate">
                                    {lobby.lobbyName}
                                </td>

                                <td className="p-2 w-24 text-right">
                                    {lobby.memberCount}
                                </td>

                                <td className="p-2 w-24 text-right">
                                    {lobby.hasGame ? `${texts.tableYes}` : `${texts.tableNo}`}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
