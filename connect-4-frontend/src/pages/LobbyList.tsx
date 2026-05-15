import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getLobbies } from "../lib/api";
import { Button } from "../components/ui/button";
import LobbyTable from "../components/lobbyList/LobbyTable";
import CreateLobbyForm from "@/components/lobbyList/CreateLobbyForm";
import ChangeUsernameForm from "@/components/lobbyList/ChangeUsernameForm";

function LobbyList() {
	const navigate = useNavigate();

	const { data: queryData, refetch } = useQuery({
		queryKey: ["lobbies"],
		queryFn: getLobbies,
	})
	console.log(queryData);

	const selectLobby = (code: string) => {
		navigate(`/lobby/${code}`);
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

				{queryData?.lobbies && <LobbyTable lobbyData={queryData.lobbies} />}

				<div className="flex flex-col justify-between h-full">

					<div className="flex flex-col gap-2">
						<CreateLobbyForm />
						<Button className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer"
							onClick={() => selectLobby("a")}>
							Join Room with Code
						</Button>
						<Button className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer"
							onClick={() => refetch()}>
							Refresh Lobbies
						</Button>
					</div>

					<ChangeUsernameForm />

				</div>
			</div>
		</div >
	)
}

export default LobbyList;
