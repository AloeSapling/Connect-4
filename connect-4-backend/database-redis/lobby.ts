import { redis } from '../app.ts';

/** Stops the lobby from expiring after a game ends */
export async function preventLobbyExpiry(lobbyCode: string) {
    await redis.del(`Lobby_${lobbyCode}:expireTimer`); // Stop the lobby expiration
}
