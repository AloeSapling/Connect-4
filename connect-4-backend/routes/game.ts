import * as GameRedis from '../database-redis/game.ts';
import { Router } from 'express';
import { lobbyExists } from '../database-sqllite/lobby.ts';
import { CodedError, P_CodedError, P_ErrorCodes } from '../lib/types.ts';
import { addRouteWithMethods } from '../lib/lib.ts';
import { routes, ws } from '../lib/proto.js';
import { isLobbyHost, isLobbyMember } from '../lib/auth.ts';
import { broadcastToLobbyRoom } from './ws/lobby.ts';

const router = Router();

addRouteWithMethods(
    router,
    '/:code/create',
    async (req, res) => {
        // Create a new game using the provided code
        const code = req.params.code as string;
        try {
            // Make sure a lobby exists with the provided code
            if (!(await lobbyExists(code))) {
                res.status(400).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_DOESNT_EXIST,
                    }).finish()
                );
                return;
            }

            try {
                await GameRedis.createGame(code);

                broadcastToLobbyRoom(code, {
                    response: ws.LobbyResponses.LOBBY_RESPONSES_START_GAME,
                })
                res.status(201).send();
            } catch (err) {
                const formattedError = {
                    code: (err as CodedError).code,
                    error: (err as CodedError).error.toString(),
                };
                res.status(400).send(P_CodedError.encode(formattedError).finish());
            }
        } catch {
            res.status(500).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['POST', 'PUT'],
    [isLobbyHost]
);

addRouteWithMethods(
    router,
    '/:code',
    async (req, res) => {
        // Get the gameState of the game associated with the provided code
        const code = req.params.code as string;
        try {
            // Make sure a lobby exists with the provided code
            if (!(await lobbyExists(code))) {
                res.status(400).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_DOESNT_EXIST,
                    }).finish()
                );
                return;
            }

            try {
                res.status(200).send(
                    routes.GetGameResponse.encode({
                        game: await GameRedis.getGameState(code),
                    }).finish()
                );
            } catch (err) {
                const formattedError = {
                    code: (err as CodedError).code,
                    error: (err as CodedError).error.toString(),
                };
                res.status(400).send(P_CodedError.encode(formattedError).finish());
            }
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
