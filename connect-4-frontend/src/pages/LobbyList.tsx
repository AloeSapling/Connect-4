import { useQuery } from "@tanstack/react-query";
import { getLobbies } from "@/lib/api";
import { langContext } from '@/lib/contexts';
import { useContext } from 'react';
import { Button } from "@/components/ui/button";
import LobbyTable from "@/components/lobbyList/LobbyTable";
import CreateLobbyForm from "@/components/lobbyList/CreateLobbyForm";
import JoinLobbyForm from "@/components/lobbyList/JoinLobbyForm";
import ChangeUsernameForm from "@/components/lobbyList/ChangeUsernameForm";

function LobbyList() {
	const { data: queryData, refetch } = useQuery({
		queryKey: ["lobbies"],
		queryFn: getLobbies,
	})

	const langCtx = useContext(langContext);
	
	if (!langCtx) return <p>Missing language context!</p>;
	
	const texts = langCtx.texts.lobbyList;

	return (
		<div
			className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]
            h-[80%]
            bg-yellow-800 text-white
            rounded-lg p-4
            flex flex-col
            overflow-hidden
          "
		>
			<div className="mb-3 border-b-[2px] border-amber-950 pb-2">
				<h1 className="text-2xl font-bold">{texts.listHeader}</h1>
			</div>

			<div className="
                grid
                grid-cols-1
                md:grid-cols-[minmax(0,1fr)_200px]
                gap-4
                flex-1
                min-h-0
            ">

				{/* table of available lobbies */}
				{queryData?.lobbies && <LobbyTable lobbyData={queryData.lobbies} />}

				{/* side buttons */}
				<div className="flex flex-col justify-between h-full">

					{/* top buttons */}
					<div className="flex flex-col gap-2">
						<CreateLobbyForm />
						<JoinLobbyForm />
						<Button className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer"
							onClick={() => refetch()}>
							{texts.refresh}
						</Button>
					</div>

					<ChangeUsernameForm />

				</div>
			</div>
		</div >
	)
}

export default LobbyList;
