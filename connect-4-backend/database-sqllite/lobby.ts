import { createLobbyCode } from "../lib/lib.ts";
import { CodedError } from "../lib/types.ts";
import { Lobby } from "./models.ts";

/** Create a new lobby instance in the sql database
 * @returns The code associated with the newly created lobby
* */
async function createLobby(): Promise<string> {
	// Retry up to 15 times on collision.
	// With the amount of possible codes, 15 retries should be more than enough to create a unique code.
	for (let i = 0; i < 15; i++) {
		try {
			const code = createLobbyCode();
			await Lobby.create({
				code: code,
			});

			return code;
		} catch { } // Disregard unique constraint failure errors
	}

	throw new CodedError("LobbyCreateFail");
}

/** Deletes the lobby associated with the provided code */
async function deleteLobby(code: string) {
	await Lobby.findOne({
		where: {
			code: code,
		},
	}).then((lobby) => lobby?.destroy());
}

/** @returns A list of all of the lobbies */
async function getAllLobbies(): Promise<Lobby[]> {
	return await Lobby.findAll();
}

/** Gets the lobby associated with the provided code
 * @returns The lobby or null if the lobby wasn't found
 * */
async function getLobby(code: string): Promise<Lobby | null> {
	return await Lobby.findOne({
		where: {
			code: code,
		},
	});
}

/** Checks if a lobby associated with the specified code exists */
async function lobbyExists(code: string): Promise<boolean> {
	return await Lobby.count({ where: { code: code } }) > 0;
}

export { createLobby, deleteLobby, getAllLobbies, getLobby, lobbyExists };
