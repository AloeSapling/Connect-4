import { createLobbyCode } from '../lib/lib.ts';
import { CodedError, P_ErrorCodes } from '../lib/types.ts';
import { Lobby, LobbyMember } from './models.ts';
import * as proto from '../lib/proto.js';
import { getDetailedLobbyMembersData } from './lobbyMembers.ts';
import { gameExists, gamesExist } from '../database-redis/game.ts';
import { Sequelize } from 'sequelize';
import { sequelize } from './database.ts';

/** Create a new lobby instance in the sql database
 * @returns The code associated with the newly created lobby
 * */
export async function createLobby(): Promise<string> {
    // Retry up to 15 times on collision.
    // With the amount of possible codes, 15 retries should be more than enough to create a unique code.
    for (let i = 0; i < 15; i++) {
        try {
            const code = createLobbyCode();
            await Lobby.create({
                code: code,
            });

            return code;
            // eslint-disable-next-line no-empty
        } catch {} // Disregard unique constraint failure errors
    }

    throw new CodedError(P_ErrorCodes.ERROR_CODES_LOBBY_CREATE_FAIL);
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
export async function getAllLobbiesData(): Promise<proto.models.ILobbyData[]> {
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
    })) as tmp_SelectResult;

    const hasGames = await gamesExist(lobbies.map((lobby) => lobby.code));

    return lobbies.map((lobby, i) => ({
        ...lobby,
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

/** Gets detailed data about a specific lobby, formatted appropriately */
export async function getDetailedLobbyData(code: string): Promise<proto.models.IDetailedLobbyData> {
    const lobby = await Lobby.findOne({
        where: {
            code: code,
        },
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
    };
}
