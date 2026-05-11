import * as GameRedis from "../database-redis/game.ts";
import { Router } from "express";
import { lobbyExists } from "../database-sqllite/lobby.ts";
import { CodedError } from "../lib/types.ts";
import { addRouteWithMethods } from "../lib/lib.ts";
import * as proto from '../lib/proto.js';

const router = Router();

addRouteWithMethods(router, '/create', async (req, res) => {
        // Create a new game using the provided code
        const body = req.body as proto.routes.CreateGameRequest;

        const code = body.code;
        try {
                console.log(body);
                if (code) {
                        // Make sure a lobby exists with the provided code
                        if (await lobbyExists(code)) {
                                res.status(400).json(new CodedError("BadLobbyCode"));
                                return;
                        }
                        try {
                                await GameRedis.createGame(code);
                                res.status(204).json();
                        }
                        catch (err) {
                                res.status(400).json(err);
                        }
                } else {
                        res.status(400).json(new CodedError("BadLobbyCode"));
                }
        } catch {
                res.status(500).json(new CodedError("ServerError"));
        }
}, ["POST", "PUT"])

addRouteWithMethods(router, '/', async (req, res) => {
        // Get the gameState of the game associated with the provided code
        const body = req.body as proto.routes.GetGameRequest;

        const code = body.code;
        try {
                if (code) {
                        // Make sure a lobby exists with the provided code
                        if (await lobbyExists(code)) {
                                res.status(400).json(new CodedError("BadLobbyCode"));
                                return;
                        }
                        try {
                                res.status(200).json(proto.routes.GetGameResponse.create({ game: await GameRedis.getGameState(code) }));
                        } catch (err) {
                                res.status(400).json(err);
                        }
                } else {
                        res.status(400).json(new CodedError("BadLobbyCode"));
                }
        } catch {
                res.status(500).json(new CodedError("ServerError"));
        }
}, ["GET"])

export default router;
