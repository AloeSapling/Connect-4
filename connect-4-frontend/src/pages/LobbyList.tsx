import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LobbyData = {
    code: string,
    lobby_name: string,
    member_count: number,
    has_game: boolean
}

function LobbyList() {
    const navigate = useNavigate();
    const [lobbyDataList, setLobbyDataList] = useState<LobbyData[]>([
        {
            code: "aaa",
            lobby_name: "es",
            member_count: 1,
            has_game: false
        },
        {
            code: "bb",
            lobby_name: "ez",
            member_count: 3,
            has_game: true
        },
        {
            code: "cam",
            lobby_name: "super room",
            member_count: 1,
            has_game: false
        },
        {
            code: "carr",
            lobby_name: "uper room",
            member_count: 2,
            has_game: false
        },
    ]);

    const selectLobby = (code: string) => {
        navigate(`/lobby/${code}`);
        return;
    }

    const refreshData = () => {
        setLobbyDataList(lobbyDataList => [...lobbyDataList, { 
            code: "rfsh",
            lobby_name: "refreshed",
            member_count: 10,
            has_game: false
        }]);
        return; 
    }

    const changeNick = () => {
        navigate("/username");
        return;
    }

    return (
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] max-w-[900px]
            h-[80%]
            bg-yellow-800 text-white
            rounded-lg p-4
            flex flex-col
            overflow-hidden
          "
        >
          <div className="mb-3 border-b-[2px] border-amber-950 pb-2">
            <h1 className="text-2xl font-bold">Lobby List</h1>
          </div>

          <div className="
                grid
                grid-cols-1
                md:grid-cols-[minmax(0,1fr)_180px]
                gap-4
                flex-1
                min-h-0
            ">

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
                    {lobbyDataList.map((lobby) => (
                      <tr
                        key={lobby.code}
                        className="border-b border-amber-950 hover:bg-yellow-800 cursor-pointer"
                        onClick={() => selectLobby(lobby.code)}
                      >
                        <td className="p-2 truncate">
                          {lobby.lobby_name}
                        </td>
                    
                        <td className="p-2 text-right">
                          {lobby.member_count}
                        </td>
                    
                        <td className="p-2 text-right">
                          {lobby.has_game ? "Yes" : "No"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
                
            <div className="flex flex-col justify-between h-full">
                
              <div className="flex flex-col gap-2">
                <button className="bg-amber-900 hover:bg-amber-950 rounded p-2 font-semibold cursor-pointer">
                  Create Room
                </button>
                <button className="bg-amber-900 hover:bg-amber-950 rounded p-2 font-semibold cursor-pointer"
                    onClick={() => selectLobby("a")}>
                  Join Room with Code
                </button>
                <button className="bg-amber-900 hover:bg-amber-950 rounded p-2 font-semibold cursor-pointer"
                    onClick={refreshData}>
                  Refresh Lobbies
                </button>
              </div>
                
              <div className="flex flex-col gap-2">
                <p className="text-center">
                    Current Nick: idk
                </p>
                <button className="bg-amber-900 hover:bg-amber-950 rounded p-2 font-semibold cursor-pointer"
                    onClick={changeNick}
                >
                  Change Nick
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default LobbyList;