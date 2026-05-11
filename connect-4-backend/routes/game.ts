import * as GameRedis from "../database-redis/game.ts";
import { Router } from "express";
import { createLobby, getAllLobbies, getLobby } from "../database-sqllite/lobby.ts";
import { CodedError } from "../lib/types.ts";
import { Lobby } from "../database-sqllite/models.ts";
import { addRouteWithMethods } from "../lib/lib.ts";

const router = Router();

addRouteWithMethods(router, '/create', async (req, res) => {
	// Create a new game using the provided code
	try {
		console.log(req.body);
		if (req.body.code) {
			// Make sure a lobby exists with the provided code
			if (await getLobby(req.body.code) === null) {
				res.status(400).json(new CodedError("BadLobbyCode"));
				return;
			}
			try {
				await GameRedis.createGame(req.body.code);
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
	try {
		if (req.body.code) {
			// Make sure a lobby exists with the provided code
			if (await getLobby(req.body.code) === null) {
				res.status(400).json(new CodedError("BadLobbyCode"));
				return;
			}
			try {
				const gameState = await GameRedis.getGameState(req.body.code);
				console.log(gameState);
				res.status(200).json(gameState);
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
