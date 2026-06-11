import { createLobbyCode } from '../lib/lib.ts';
import { CodedError, P_ErrorCodes, P_TokenQueueModes, P_TokenTypes } from '../lib/types.ts';
import { Lobby, LobbyMember } from './models.ts';
import { models } from '../lib/proto.js';
import { getDetailedLobbyMembersData } from './lobbyMembers.ts';
import { gameExists, gamesExist } from '../database-redis/game.ts';
import { Sequelize } from 'sequelize';
import { sequelize } from './database.ts';
import { DEFAULT_TURN_TIME } from '../config.ts';

/** Create a new lobby instance in the sql database
 * @returns The code associated with the newly created lobby
 * */
export async function createLobby(lobbyName: string): Promise<string> {
    // Retry up to 15 times on collision.
    // With the amount of possible codes, 15 retries should be more than enough to create a unique code.
    for (let i = 0; i < 15; i++) {
        try {
            const code = createLobbyCode();
            await Lobby.create({
                code: code,
                name: lobbyName,
            });

            return code;
            // eslint-disable-next-line no-empty
        } catch { } // Disregard unique constraint failure errors
    }

    throw new CodedError(P_ErrorCodes.ERROR_CODES_SERVER_ERROR);
}

/** Deletes the lobby associated with the provided code */
export async function deleteLobby(code: string) {
    await Lobby.findOne({
        where: {
            code: code,
        },
    }).then((lobby) => lobby?.destroy());
}

/** @returns A list of all of the lobbies */
export async function getAllLobbiesData(): Promise<models.ILobbyData[]> {
    type tmp_SelectResult = (Lobby & { memberCount: number })[];

    const lobbies: tmp_SelectResult = (await Lobby.findAll({
        attributes: ['code', 'name', [Sequelize.fn('COUNT', sequelize.col('LobbyMembers.id')), 'memberCount']],
        include: [
            {
                model: LobbyMember,
                attributes: [],
            },
        ],
        group: ['Lobby.code'],
        raw: true,
    })) as tmp_SelectResult;

    const hasGames = await gamesExist(lobbies.map((lobby) => lobby.code));

    return lobbies.map((lobby, i) => ({
        ...lobby,
        lobbyName: lobby.name,
        hasGame: hasGames[i] || false,
    }));
}

/** Gets the data of the lobby associated with the provided code
 *
 * @returns The lobby or null if the lobby wasn't found
 * */
export async function getLobby(code: string): Promise<Lobby | null> {
    return await Lobby.findOne({
        where: {
            code: code,
        },
    });
}

/** Checks if a lobby associated with the specified code exists */
export async function lobbyExists(code: string): Promise<boolean> {
    return (await Lobby.count({ where: { code: code } })) > 0;
}

/** Updates the settings of the lobby associated with the specified code */
export async function changeLobbySettings(code: string, settings: models.ILobbySettings) {
    await Lobby.update(
        {
            turn_time: settings.turnTime ?? DEFAULT_TURN_TIME,
            tokenQueueMode: settings.tokenQueueMode ?? P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED,
            allowedTokens: JSON.stringify(settings.allowedTokens ?? []),
            specialGamemode: settings.specialGamemode ?? false,
            every: settings.every ?? null,
        },
        {
            where: {
                code: code,
            },
        }
    );
}

/** Gets the settings of the lobby associated with the provided code */
export async function getLobbySettings(code: string): Promise<models.ILobbySettings> {
    const lobby = await Lobby.findOne({
        where: {
            code: code,
        },
        raw: true,
    });

    if (!lobby) throw new CodedError(P_ErrorCodes.ERROR_CODES_DOESNT_EXIST);

    return {
        turnTime: lobby.turnTime,
        tokenQueueMode: lobby.tokenQueueMode,
        allowedTokens: JSON.parse(lobby.allowedTokens ?? '[]'),
        specialGamemode: lobby.specialGamemode,
        every: lobby.every ?? undefined,
    };
}

/** Gets detailed data about a specific lobby, formatted appropriately */
export async function getDetailedLobbyData(code: string): Promise<models.IDetailedLobbyData> {
    const lobby = await Lobby.findOne({
        where: {
            code: code,
        },
        raw: true,
    });

    if (!lobby) throw new CodedError(P_ErrorCodes.ERROR_CODES_DOESNT_EXIST);

    const memberCount = await LobbyMember.count({
        where: {
            lobby_code: code,
        },
    });

    const hasGame = await gameExists(code);

    const memberData = await getDetailedLobbyMembersData(code);

    return {
        code: lobby.code,
        lobbyName: lobby.name,
        memberCount: memberCount,
        hasGame: hasGame,
        lobbyMembers: memberData,
        settings: {
            turnTime: lobby.turnTime,
            tokenQueueMode: lobby.tokenQueueMode,
            allowedTokens: JSON.parse(lobby.allowedTokens ?? '[]'),
            specialGamemode: lobby.specialGamemode,
            every: lobby.every ?? undefined,
        },
    };
}
