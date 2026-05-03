import type { TPlayerTypes } from "../lib/types.ts";
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
async function assignPlayerType(lobbyCode: string, userID: number, playerType: TPlayerTypes) {
	await LobbyMember.update({ player_type: playerType }, {
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
async function getPlayerType(lobbyCode: string, userID: number): Promise<TPlayerTypes | null> {
	const lobbyMember = await LobbyMember.findOne({
		where: {
			"lobby_code": lobbyCode,
			"user_id": userID,
		}
	})
	return lobbyMember?.player_type || null;
}

export { becomeHost, joinLobby, assignPlayerType, getPlayerType };
