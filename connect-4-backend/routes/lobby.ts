import { Router } from 'express';
import { createLobby, getAllLobbiesData, getDetailedLobbyData, lobbyExists } from '../database-sqllite/lobby.ts';
import { P_CodedError, P_ErrorCodes, P_PlayerIDs, P_PlayerTypes, type UserRequest } from '../lib/types.ts';
import { addRouteWithMethods } from '../lib/lib.ts';
import {
    assignPlayerID,
    becomeHost,
    getPlayerType,
    joinLobby,
    leaveLobby,
    unsetPlayerIDAndType,
} from '../database-sqllite/lobbyMembers.ts';
import { routes } from '../lib/proto.js';
import { isLobbyMember } from '../lib/auth.ts';

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

            await joinLobby(code, user.id);

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

            await leaveLobby(code, user.id);

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

        if (!body.playerId || !body.userId) {
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

        try {
            if (!(await lobbyExists(code))) {
                res.status(400).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_DOESNT_EXIST,
                    }).finish()
                );
                return;
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
