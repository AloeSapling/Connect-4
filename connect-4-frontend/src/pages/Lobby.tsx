import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import * as proto from '../lib/proto.js';

type LobbyMember = {
    id: number;
    lobby_code: string;
    user_id: number;
    host: boolean;
    player_id: proto.shared.PlayerIDs;
    player_type: proto.shared.PlayerTypes;
};

function Lobby() {
    const navigate = useNavigate();
    let { lobbyCode } = useParams();
    const [lobbyMemberDataList, setLobbyMemberDataList] = useState<LobbyMember[]>([
        {
            id: 1,
            lobby_code: 'a',
            user_id: 123,
            host: true,
            player_id: proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED,
            player_type: proto.shared.PlayerTypes.PLAYER_TYPES_SPECTATOR,
        },
        {
            id: 2,
            lobby_code: 'a',
            user_id: 124,
            host: false,
            player_id: proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED,
            player_type: proto.shared.PlayerTypes.PLAYER_TYPES_PLAYER,
        },
        {
            id: 3,
            lobby_code: 'a',
            user_id: 125,
            host: false,
            player_id: proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED,
            player_type: proto.shared.PlayerTypes.PLAYER_TYPES_SPECTATOR,
        },
        {
            id: 4,
            lobby_code: 'a',
            user_id: 126,
            host: false,
            player_id: proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED,
            player_type: proto.shared.PlayerTypes.PLAYER_TYPES_UNSPECIFIED,
        },
    ]);

    // test for showing who the (user) is
    const userIDTest: number = 123;
    // test for user being the host
    const userIsHostTest: boolean = true;

    const leaveLobby = () => {
        navigate('/lobbylist');
    };

    useEffect(() => {
        // if (lobbyCode != "a") navigate("/lobbylist");
    }, []);

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
                <p>Lobby: [lobbyName]</p>
                <p>Lobby Code: {lobbyCode}</p>
            </div>

            {/* Tables */}
            <div className="flex flex-row flex-1 gap-4 min-h-0 max-h-[80%] min-w-0 select-none">
                {/* Players */}
                <div className="flex flex-col flex-2 min-w-0">
                    <table className="w-full table-fixed text-left">
                        <thead className="bg-amber-950">
                            <tr>
                                <th className="p-2">Players</th>
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
                                {lobbyMemberDataList.map((member) => (
                                    <tr key={member.id} className="border-b border-amber-950 hover:bg-yellow-800">
                                        <td className="p-2 truncate">
                                            {member.user_id} {member.host && '(host)'} {member.user_id === userIDTest && '(you)'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <button className="bg-yellow-900">buttons</button>
                    <button className="bg-yellow-900">buttons</button>
                </div>
            </div>

            <div className="flex flex-row justify-between mt-auto">
                <button className="w-[15%] bg-amber-900 hover:bg-amber-950 cursor-pointer rounded-lg" onClick={leaveLobby}>
                    Leave
                </button>
                {(userIsHostTest && (
                    <button className="w-[15%] bg-amber-900 hover:bg-amber-950 cursor-pointer rounded-lg">START GAME</button>
                )) || <button className="w-[15%] text-gray-400 bg-yellow-900 rounded-lg">START GAME</button>}
            </div>
        </div>
    );
}

export default Lobby;
