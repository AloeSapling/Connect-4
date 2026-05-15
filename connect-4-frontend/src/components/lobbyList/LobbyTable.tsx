import { useNavigate } from "react-router-dom";
import { joinLobby } from "@/lib/api";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import * as proto from "../../lib/proto.js"

export default function LobbyTable({ lobbyData }: { lobbyData: proto.models.ILobbyData[] }) {
    const navigate = useNavigate();
    
    const joinLobby_m = useMutation({
        mutationFn: joinLobby,
        onSuccess: (_data, code) => {
            toast.success("Joining lobby...");
            navigate(`/lobby/${code}`);
        },
        onError: (err) => toast.error(err.message)
    });

    const selectLobby = (code: string) => joinLobby_m.mutate(code);

    return (
        <div className="flex flex-col min-h-0 min-w-0 select-none">
            <table className="w-full table-fixed text-left">
                <thead className="bg-amber-950">
                    <tr>
                        <th className="p-2">Name</th>
                        <th className="p-2 w-24">Players</th>
                        <th className="p-2 w-24">Has Game</th>
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
                                    {lobby.hasGame ? "Yes" : "No"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
