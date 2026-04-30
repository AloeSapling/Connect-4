import * as GameRedis from "../database-redis/game.ts";
import { Router } from "express";
import { createLobby, getAllLobbies, getSpecificLobby } from "../database-sqllite/lobby.ts";
import { CodedError } from "../lib/types.ts";
import { Lobby } from "../database-sqllite/models.ts";
import { addRouteWithMethods, isValidLobbyCode } from "../lib/lib.ts";

const router = Router();

addRouteWithMethods(router, '/create', async (req, res) => {
	// Create a new game using the provided code
	try {
		if (req.query.code) {
			// Make sure a lobby exists with the provided code
			if (await Lobby.findOne({ where: { code: req.query.code.toString() } }) === null) {
				res.status(400).json(new CodedError("BadLobbyCode"));
				return;
			}
			await GameRedis.createGame(req.query.code.toString());
			res.status(204).json();
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
		if (req.query.code) {
			// Make sure a lobby exists with the provided code
			if (await Lobby.findOne({ where: { code: req.query.code.toString() } }) === null) {
				res.status(400).json(new CodedError("BadLobbyCode"));
				return;
			}
			const gameState = await GameRedis.getGameState(req.query.code.toString());
			console.log(gameState);
			res.status(200).json(gameState);
		} else {
			res.status(400).json(new CodedError("BadLobbyCode"));
		}
	} catch {
		res.status(500).json(new CodedError("ServerError"));
	}
}, ["GET"])

export default router;
