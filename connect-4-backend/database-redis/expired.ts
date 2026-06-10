import { redis } from '../app.ts';
import { CODE_LENGTH } from '../config.ts';
import { deleteLobby } from '../database-sqllite/lobby.ts';
import { ws } from '../lib/proto.js';
import type { TPlayerIDs } from '../lib/types.ts';
import { broadcastToGameRoom } from '../routes/ws/game.ts';
import { broadcastToLobbyRoom } from '../routes/ws/lobby.ts';
import * as gameRedis from './game.ts';

/** A function used to handle a redis entry expiring
 * @param key - The key of the entry that expired
 * */
export default async function onRedisExpire(key: string) {
    // Handle game expiration
    if (key.startsWith('GameData_') && key.endsWith('turnTime')) {
        const lobbyCode = key.slice(10, 10 + CODE_LENGTH); // "GameState_" is 10 characters long, this extracts the lobby code that is directly after the 'GameState_' prefix

        const turn = await redis.get(`GameState_${lobbyCode}:turn`);
        if (!turn) return; // Early return if the turn is null

        const turnData = Number(turn) as TPlayerIDs; // Convert the value into the numeric enumerated playerID
        const [winner, loser] = await gameRedis.forfeitGame(lobbyCode, turnData);

        // Notify the websockets of the forfeit
        broadcastToGameRoom(lobbyCode, {
            response: ws.GameResponses.GAME_RESPONSES_END,
            end: {
                endType: ws.GameEndTypes.GAME_END_TYPES_FORFEITED,
                winner: winner,
                loser: loser,
            },
        });
    }

    // Handle lobby expiration
    else if (key.startsWith('Lobby_') && key.endsWith('expireTimer')) {
        const lobbyCode = key.slice(6, 6 + CODE_LENGTH); // "Lobby_" is 6 characters long, this extracts the lobby code that is directly after the 'Lobby_' prefix

        await deleteLobby(lobbyCode);

        broadcastToLobbyRoom(lobbyCode, {
            response: ws.LobbyResponses.LOBBY_RESPONSES_HOST_LEFT,
        });
    }
}
