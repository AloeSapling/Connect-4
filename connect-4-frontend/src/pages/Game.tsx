import GameBoardCanvas from "@/components/game/GameBoardCanvas";
import { getGameState } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function Game() {

    const { lobbyCode } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data: queryData, isLoading, error } = useQuery({
        queryKey: ['lobby', lobbyCode],
        queryFn: () => getGameState(lobbyCode!),
        refetchOnWindowFocus: false,
        retry: 1,
    });

    if (!queryData || !lobbyCode) return <p>Loading</p>;

    return (
        <div>
            <GameBoardCanvas queryData={queryData} lobbyCode={lobbyCode} />
        </div>
    )
}
