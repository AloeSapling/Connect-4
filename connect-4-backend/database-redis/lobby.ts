import { redis } from '../app.ts';

/** Stops the lobby from expiring after a game ends */
export async function preventLobbyExpiry(lobbyCode: string) {
    await redis.del(`Lobby_${lobbyCode}:expireTimer`); // Stop the lobby expiration
}

/** Temporarilly bans a user from joining the given lobby
 * @param time - The time in seconds to ban the user for
 * */
export async function tempBanUser(lobbyCode: string, userID: number, time: number) {
    await redis.set(`Lobby_${lobbyCode}::${userID}:banned`, 1, {
        EX: time,
    });
}

/** Checks if the user is banned from joining the given lobby */
export async function isUserBanned(lobbyCode: string, userID: number) {
    return redis.exists(`Lobby_${lobbyCode}::${userID}:banned`);
}
