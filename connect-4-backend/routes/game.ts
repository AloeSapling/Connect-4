import * as GameRedis from "../database-redis/game.ts";
import { Router } from "express";
import { lobbyExists } from "../database-sqllite/lobby.ts";
import { CodedError } from "../lib/types.ts";
import { addRouteWithMethods } from "../lib/lib.ts";
import * as proto from '../lib/proto.js';

const router = Router();

addRouteWithMethods(router, '/create', async (req, res) => {
        // Create a new game using the provided code
        const body = proto.routes.CreateGameRequest.decode(req.body);

        const code = body.code;
        try {
                console.log(body);
                if (code) {
                        // Make sure a lobby exists with the provided code
                        if (!(await lobbyExists(code))) {
                                res.status(400).send(proto.shared.CodedError.encode({ code: proto.shared.ErrorCodes.ERROR_CODES_BAD_LOBBY_CODE }).finish());
                                return;
                        }
                        try {
                                await GameRedis.createGame(code);
                                res.status(204).send();
                        }
                        catch (err) {
                                const formattedError = { code: (err as CodedError).code, error: (err as CodedError).error.toString() };
                                res.status(400).send(proto.shared.CodedError.encode(formattedError).finish());
                        }
                } else {
                        res.status(400).send(proto.shared.CodedError.encode({ code: proto.shared.ErrorCodes.ERROR_CODES_BAD_LOBBY_CODE }).finish());
                }
        } catch {
                res.status(500).send(proto.shared.CodedError.encode({ code: proto.shared.ErrorCodes.ERROR_CODES_SERVER_ERROR }).finish());
        }
}, ["POST", "PUT"])

addRouteWithMethods(router, '/', async (req, res) => {
        // Get the gameState of the game associated with the provided code
        const body = proto.routes.CreateGameRequest.decode(req.body);

        const code = body.code;
        try {
                if (code) {
                        // Make sure a lobby exists with the provided code
                        if (await lobbyExists(code)) {
                                res.status(400).send(proto.shared.CodedError.encode({ code: proto.shared.ErrorCodes.ERROR_CODES_BAD_LOBBY_CODE }).finish());
                                return;
                        }
                        try {
                                res.status(200).send(proto.routes.GetGameResponse.encode({ game: await GameRedis.getGameState(code) }).finish());
                        } catch (err) {
                                const formattedError = { code: (err as CodedError).code, error: (err as CodedError).error.toString() };
                                res.status(400).send(proto.shared.CodedError.encode(formattedError).finish());
                        }
                } else {
                        res.status(400).send(proto.shared.CodedError.encode({ code: proto.shared.ErrorCodes.ERROR_CODES_BAD_LOBBY_CODE }).finish());
                }
        } catch {
                res.status(500).send(proto.shared.CodedError.encode({ code: proto.shared.ErrorCodes.ERROR_CODES_SERVER_ERROR }).finish());
        }
}, ["GET"])

export default router;
