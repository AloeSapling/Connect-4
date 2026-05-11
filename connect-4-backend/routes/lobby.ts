import { Router } from 'express';
import { createLobby, getAllLobbies, getLobby, lobbyExists } from '../database-sqllite/lobby.ts';
import { type UserRequest } from '../lib/types.ts';
import { addRouteWithMethods } from '../lib/lib.ts';
import { assignPlayerID, becomeHost, joinLobby } from '../database-sqllite/lobbyMembers.ts';
import * as proto from '../lib/proto.js';

const router = Router();

addRouteWithMethods(
    router,
    '/',
    async (req, res) => {
        // Search params can include the code (to get a specific lobby) or include filters for the list of lobbies
        if (req.query.code) {
            try {
                res.status(200).send(
                    proto.routes.GetLobbyResponse.encode({
                        lobby: await getLobby(req.query.code.toString()),
                    }).finish()
                );
            } catch {
                res.status(400).send(
                    proto.shared.CodedError.encode({
                        code: proto.shared.ErrorCodes.ERROR_CODES_BAD_LOBBY_CODE,
                    }).finish()
                );
            }
        }

        // If no code was provided, return all lobbies
        else {
            try {
                res.status(200).send(proto.routes.GetLobbiesResponse.encode({ lobbies: await getAllLobbies() }).finish());
            } catch {
                res.status(500).send(
                    proto.shared.CodedError.encode({
                        code: proto.shared.ErrorCodes.ERROR_CODES_SERVER_ERROR,
                    }).finish()
                );
            }
        }
    },
    ['GET']
);

addRouteWithMethods(
    router,
    '/create/',
    async (req, res) => {
        // Create a new lobby and return the associated code
        try {
            const code = await createLobby();
            console.log(code);

            await joinLobby(code, (req as UserRequest).user.id);
            await becomeHost(code, (req as UserRequest).user.id);

            await assignPlayerID(code, (req as UserRequest).user.id, proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1);

            res.status(201).send(proto.routes.CreateLobbyResponse.encode({ code: code }).finish());
        } catch {
            res.status(500).send(
                proto.shared.CodedError.encode({
                    code: proto.shared.ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['POST', 'PUT']
);

addRouteWithMethods(
    router,
    '/join',
    async (req, res) => {
        const body = req.body as proto.routes.JoinLobbyRequest;

	const code = body.code;

        try {
            if (!code || !(await lobbyExists(code))) {
                res.status(400).send(
                    proto.shared.CodedError.encode({
                        code: proto.shared.ErrorCodes.ERROR_CODES_BAD_LOBBY_CODE,
                    }).finish()
                );
                return;
            }

            await joinLobby(code, (req as UserRequest).user.id);
            await assignPlayerID(code, (req as UserRequest).user.id, proto.shared.PlayerIDs.PLAYER_IDS_PLAYER2);

            res.status(200).send();
        } catch {
            res.status(500).send(
                proto.shared.CodedError.encode({
                    code: proto.shared.ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['POST']
);
export default router;
