import { type TPlayerIDs, P_PlayerTypes, type TPlayerTypes, P_PlayerIDs, type LobbyMemberSelectResult } from '../lib/types.ts';
import { LobbyMember, User } from './models.ts';
import { models } from '../lib/proto.js';

/** Makes the specified user becom a host of the lobby associated with the provided code */
export async function becomeHost(lobbyCode: string, userID: number) {
	await LobbyMember.update(
		{ host: true },
		{
			where: {
				lobby_code: lobbyCode,
				user_id: userID,
			},
		}
	);
}

/** Makes the specified user join the lobby associated with the provided code */
export async function joinLobby(lobbyCode: string, userID: number) {
	await LobbyMember.create({
		lobby_code: lobbyCode,
		user_id: userID,
	});
}

/** Makes the specified player leave the lobby associated with the provided code */
export async function leaveLobby(lobbyCode: string, userID: number) {
	await LobbyMember.destroy({
		where: {
			lobby_code: lobbyCode,
			user_id: userID,
		},
	});
}

/** Changes the player id of the specified user in the lobby associated with the specified code */
export async function assignPlayerID(lobbyCode: string, userID: number, playerID: TPlayerIDs) {
	await LobbyMember.update(
		{ player_id: playerID },
		{
			where: {
				lobby_code: lobbyCode,
				user_id: userID,
			},
		}
	);
}

/** Changes the player type of the specified user in the lobby associated with the specified code */
export async function assignPlayerType(lobbyCode: string, userID: number, playerType: TPlayerTypes) {
	await LobbyMember.update(
		{ player_type: playerType },
		{
			where: {
				lobby_code: lobbyCode,
				user_id: userID,
			},
		}
	);
}

/** Unsets the player id and player type of players with the given player id in the lobby associated with the provided code */
export async function unsetPlayerIDAndType(lobbyCode: string, playerID: TPlayerIDs) {
	await LobbyMember.update(
		{
			player_type: P_PlayerTypes.PLAYER_TYPES_SPECTATOR, // Spectator is the default player type
			player_id: P_PlayerIDs.PLAYER_IDS_UNSPECIFIED,
		},
		{
			where: {
				lobby_code: lobbyCode,
				player_id: playerID,
			},
		}
	);
}

/** Gets the player id of the specified user in the lobby associated with the provided code
 *
 * @returns The player id
 * @returns Null if no player with the provided id was found in the specified lobby
 * */
export async function getPlayerID(lobbyCode: string, userID: number): Promise<TPlayerIDs | null> {
	const lobbyMember = await LobbyMember.findOne({
		where: {
			lobby_code: lobbyCode,
			user_id: userID,
		},
		raw: true,
	});

	return lobbyMember?.player_id || null;
}

/** Gets the player type of the specified user in the lobby associated with the provided code
 *
 * @returns The player type
 * @returns Null if no player with the provided id was found in the specified lobby
 * */
export async function getPlayerType(lobbyCode: string, userID: number): Promise<TPlayerTypes | null> {
	const lobbyMember = await LobbyMember.findOne({
		where: {
			lobby_code: lobbyCode,
			user_id: userID,
		},
		raw: true,
	});

	return lobbyMember?.player_type || null;
}

/** Checks if the user is a member of the lobby associated with the provided code */
export async function isLobbyMember(lobbyCode: string, userID: number): Promise<boolean> {
	return (
		(await LobbyMember.count({
			where: {
				lobby_code: lobbyCode,
				user_id: userID,
			},
		})) > 0
	);
}

/** Checks if the user is the host of the lobby associated with the provided code */
export async function isLobbyHost(lobbyCode: string, userID: number): Promise<boolean> {
	return (
		(await LobbyMember.count({
			where: {
				lobby_code: lobbyCode,
				user_id: userID,
				host: true,
			},
		})) > 0
	);
}

/** @returns The detailed data of the lobby's host
 * @returns Null if the host wasn't found
 * */
export async function getLobbyHostMemberData(lobbyCode: string): Promise<models.IDetailedLobbyMemberData | null> {
	const host: LobbyMemberSelectResult = (await LobbyMember.findOne({
		where: {
			lobby_code: lobbyCode,
			host: true,
		},
		include: [
			{
				model: User,
			},
		],
		raw: true,
	})) as LobbyMemberSelectResult;

	if (!host) return null;

	return {
		userId: host.User.id,
		username: host.User.username,
		playerType: host.player_type,
		playerId: host.player_id,
		host: host.host,
	};
}

/** Get a list of the lobby members along with some additional data
 *
 * @returns A list of detailed lobby member data, formatted appropriately
 * */
export async function getDetailedLobbyMembersData(lobbyCode: string): Promise<models.IDetailedLobbyMemberData[]> {
	// Get all the necessary data
	const tmp_members: LobbyMemberSelectResult[] = (await LobbyMember.findAll({
		where: {
			lobby_code: lobbyCode,
		},
		include: [
			{
				model: User,
			},
		],
		raw: true,
	})) as LobbyMemberSelectResult[];

	// Organise the gotten data in the appropriate format
	return tmp_members.map((elem) => ({
		userId: elem.User.id,
		username: elem.User.username,
		playerType: elem.player_type,
		playerId: elem.player_id,
		host: elem.host,
	}));
}
