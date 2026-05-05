import type { PlayerIDs } from "../lib/types.ts";
import { LobbyMember } from "./models.ts";

/** Makes the specified user becom a host of the lobby associated with the provided code */
async function becomeHost(lobbyCode: string, userID: number) {
        await LobbyMember.update({ host: true }, {
                where: {
                        "lobby_code": lobbyCode,
                        "user_id": userID
                }
        })
}

/** Makes the specified user join the lobby associated with the provided code */
async function joinLobby(lobbyCode: string, userID: number) {
        await LobbyMember.create({
                "lobby_code": lobbyCode,
                "user_id": userID,
        });
}

/** Changes the player type of the specified user in the lobby associated with the specified code */
async function assignPlayerID(lobbyCode: string, userID: number, playerID: PlayerIDs) {
        await LobbyMember.update({ player_id: playerID }, {
                where: {
                        "lobby_code": lobbyCode,
                        "user_id": userID,
                }
        })
}

/** Gets the player type of the specified user in the lobby associated with the provided code 
 * @returns The player type
 * @returns Null if no player with the provided id was found in the specified lobby
 * */
async function getPlayerID(lobbyCode: string, userID: number): Promise<PlayerIDs | null> {
        const lobbyMember = await LobbyMember.findOne({
                where: {
                        "lobby_code": lobbyCode,
                        "user_id": userID,
                }
        })
        return lobbyMember?.player_id || null;
}

export { becomeHost, joinLobby, assignPlayerID, getPlayerID };
