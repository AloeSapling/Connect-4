import { Router } from 'express';
import {
    changeLobbySettings,
    createLobby,
    deleteLobby,
    getAllLobbiesData,
    getDetailedLobbyData,
    lobbyExists,
} from '../database-sqllite/lobby.ts';
import { P_CodedError, P_ErrorCodes, P_PlayerIDs, P_PlayerTypes, type UserRequest } from '../lib/types.ts';
import { addRouteWithMethods } from '../lib/lib.ts';
import {
    assignPlayerID,
    assignPlayerType,
    becomeHost,
    getDetailedLobbyMembersData,
    getPlayerType,
    joinLobby,
    leaveLobby,
    unsetPlayerIDAndType,
    isLobbyHost as lm_isLobbyHost,
} from '../database-sqllite/lobbyMembers.ts';
import { routes, ws } from '../lib/proto.js';
import { isLobbyHost, isLobbyMember } from '../lib/auth.ts';
import { broadcastToLobbyRoom } from './ws/lobby.ts';
import { isUserBanned, preventLobbyExpiry, tempBanUser } from '../database-redis/lobby.ts';
import { TEMP_BAN_TIME } from '../config.ts';

const router = Router();

addRouteWithMethods(
    router,
    '/',
    async (req, res) => {
        // Gets a list of lobbies
        // Search params can include filters for the list of lobbies
        try {
            const lobbies = await getAllLobbiesData();
            res.status(200).send(routes.GetLobbiesResponse.encode({ lobbies: lobbies }).finish());
        } catch {
            res.status(500).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['GET']
);

addRouteWithMethods(
    router,
    '/create',
    async (req, res) => {
        // Create a new lobby and return the associated code
        let body: routes.CreateLobbyRequest;
        try {
            body = routes.CreateLobbyRequest.decode(req.body);
        } catch {
            res.status(400).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_BAD_DATA,
                }).finish()
            );
            return;
        }
        const lobbyName = body.lobbyName;

        // lobby name validation
        if (!lobbyName || lobbyName.length <= 0) {
            res.status(400).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_BAD_NAME,
                }).finish()
            );
            return;
        }

        try {
            const code = await createLobby(lobbyName);
            console.log(code);

            await joinLobby(code, (req as UserRequest).user.id);
            await becomeHost(code, (req as UserRequest).user.id);

            res.status(201).send(routes.CreateLobbyResponse.encode({ code: code }).finish());
        } catch {
            res.status(500).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['POST', 'PUT']
);

addRouteWithMethods(
    router,
    '/:code/changeSettings',
    async (req, res) => {
        const code = req.params.code as string;

        let body: routes.ChangeLobbySettingsRequest;
        try {
            body = routes.ChangeLobbySettingsRequest.decode(req.body);
        } catch {
            res.status(400).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_BAD_DATA,
                }).finish()
            );
            return;
        }

        if (!body.settings) {
            res.status(400).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_BAD_DATA,
                }).finish()
            );
            return;
        }

        const settings = body.settings;

        try {
            if (!(await lobbyExists(code))) {
                res.status(400).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_DOESNT_EXIST,
                    }).finish()
                );
                return;
            }

            await changeLobbySettings(code, settings);

            broadcastToLobbyRoom(code, {
                response: ws.LobbyResponses.LOBBY_RESPONSES_SETTINGS_CHANGED,
                settings: {
                    turnTime: settings.turnTime || -1,
                },
            });
        } catch {
            res.status(500).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['POST', 'PATCH'],
    [isLobbyHost]
);

addRouteWithMethods(
    router,
    '/:code/join',
    async (req, res) => {
        const code = req.params.code as string;
        const user = (req as UserRequest).user;

        try {
            if (!(await lobbyExists(code))) {
                res.status(400).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_DOESNT_EXIST,
                    }).finish()
                );
                return;
            }

            // While a user is banned, they are not allowed to rejoin the lobby
            if (await isUserBanned(code, user.id)) {
                res.status(403).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_USER_BANNED,
                    }).finish()
                );
                return;
            }

            await joinLobby(code, user.id);

            broadcastToLobbyRoom(code, {
                response: ws.LobbyResponses.LOBBY_RESPONSES_JOIN,
                join: {
                    users: await getDetailedLobbyMembersData(code),
                },
            });
            res.status(200).send();
        } catch {
            res.status(500).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['POST', 'PUT']
);

addRouteWithMethods(
    router,
    '/:code/leave',
    async (req, res) => {
        const code = req.params.code as string;
        const user = (req as UserRequest).user;

        try {
            if (!(await lobbyExists(code))) {
                res.status(400).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_DOESNT_EXIST,
                    }).finish()
                );
                return;
            }

            // If the host leaves the lobby, the lobby gets deleted
            if (await lm_isLobbyHost(code, (req as UserRequest).user.id)) {
                await deleteLobby(code);

                broadcastToLobbyRoom(code, {
                    response: ws.LobbyResponses.LOBBY_RESPONSES_HOST_LEFT,
                });

                res.status(204).send();
                return; // Return early to not send more data to the websocket
            }

            await leaveLobby(code, user.id);

            broadcastToLobbyRoom(code, {
                response: ws.LobbyResponses.LOBBY_RESPONSES_LEAVE,
                leave: {
                    users: await getDetailedLobbyMembersData(code),
                },
            });
            res.status(204).send();
        } catch {
            res.status(500).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['POST', 'PUT', 'DELETE'],
    [isLobbyMember]
);

addRouteWithMethods(
    router,
    '/:code/tempBanUser',
    async (req, res) => {
        // Temporarilly bans a player from joining the lobby
        const code = req.params.code as string;

        const user = (req as UserRequest).user;

        let body: routes.KickPlayerRequest;
        try {
            body = routes.KickPlayerRequest.decode(req.body);
        } catch {
            res.status(400).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_BAD_DATA,
                }).finish()
            );
            return;
        }

        // Prevent the host from kicking themselves from the lobby
        if (body.userId === user.id) {
            res.status(400).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_BAD_USER,
                }).finish()
            );
            return;
        }

        try {
            if (!(await lobbyExists(code))) {
                res.status(400).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_DOESNT_EXIST,
                    }).finish()
                );
                return;
            }

            // Remove the user from the lobby
            await leaveLobby(code, body.userId);

            // Ban the user from rejoining
            tempBanUser(code, body.userId, TEMP_BAN_TIME);

            broadcastToLobbyRoom(code, {
                response: ws.LobbyResponses.LOBBY_RESPONSES_LEAVE,
                leave: {
                    users: await getDetailedLobbyMembersData(code),
                },
            });
            res.status(204).send();
        } catch {
            res.status(500).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['POST', 'PUT', 'DELETE'],
    [isLobbyHost]
);

addRouteWithMethods(
    router,
    '/:code/changePlayerID',
    async (req, res) => {
        // Sets the player id of the specified player to the provided player id
        const code = req.params.code as string;

        let body: routes.ChangePlayerIDRequest;
        try {
            body = routes.ChangePlayerIDRequest.decode(req.body);
        } catch {
            res.status(400).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_BAD_DATA,
                }).finish()
            );
            return;
        }

        if (body.playerId === undefined || body.playerId === null || !body.userId) {
            res.status(400).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_BAD_DATA,
                }).finish()
            );
            return;
        }

        const userID = body.userId;
        const playerID = body.playerId;

        try {
            if (!(await lobbyExists(code))) {
                res.status(400).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_DOESNT_EXIST,
                    }).finish()
                );
                return;
            }

            const userPlayerType = await getPlayerType(code, userID);
            // Inactive / AFK player
            if (userPlayerType === P_PlayerTypes.PLAYER_TYPES_UNSPECIFIED) {
                res.status(400).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_BAD_USER,
                    }).finish()
                );
                return;
            }

            await unsetPlayerIDAndType(code, playerID);
            await assignPlayerID(code, userID, playerID);

            // Assign the appropriate player type
            if (playerID === P_PlayerIDs.PLAYER_IDS_UNSPECIFIED)
                await assignPlayerType(code, userID, P_PlayerTypes.PLAYER_TYPES_SPECTATOR); // Spectator is the default player type
            else await assignPlayerType(code, userID, P_PlayerTypes.PLAYER_TYPES_PLAYER);

            broadcastToLobbyRoom(code, {
                response: ws.LobbyResponses.LOBBY_RESPONSES_CHANGE_PLAYER,
                changePlayer: {
                    users: await getDetailedLobbyMembersData(code),
                },
            });
            res.status(200).send();
        } catch {
            res.status(500).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['POST', 'PUT']
);

addRouteWithMethods(
    router,
    '/:code/details',
    async (req, res) => {
        // Get lobby details
        const code = req.params.code as string;
        const user = (req as UserRequest).user;

        try {
            if (!(await lobbyExists(code))) {
                res.status(400).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_DOESNT_EXIST,
                    }).finish()
                );
                return;
            }

            // Lobbies are prevented from expiring if the host goes back to the lobby's details page
            if (await lm_isLobbyHost(code, user.id)) {
                preventLobbyExpiry(code);
            }

            const lobbyDetails = await getDetailedLobbyData(code);
            res.status(200).send(
                routes.GetLobbyDetailsResponse.encode({
                    lobbyDetails: lobbyDetails,
                }).finish()
            );
        } catch {
            res.status(500).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['GET'],
    [isLobbyMember]
);

export default router;
