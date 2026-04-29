import * as GameRedis from "../database-redis/game.ts";
import { Router } from "express";
import { createLobby, getAllLobbies, getSpecificLobby } from "../database-sqllite/lobby.ts";
import { CodedError } from "../lib/types.ts";
import { validateLobbyCode } from "../lib/lib.ts";
import { Lobby } from "../database-sqllite/models.ts";

const router = Router();

router.get('/create', async (req, res) => {
	try {
		if (req.query.code) {

			if (!validateLobbyCode(req.query.code.toString()) || await Lobby.findOne({ where: { code: req.query.code } }) === null) {
				res.status(400).json(new CodedError("BadLobbyCode"));
				return;
			}
			await GameRedis.createGame(req.query.code.toString());
			res.status(204).send();
		} else {
			res.status(400).send(new CodedError("BadLobbyCode"));
		}
	} catch {
		res.status(500).send(new CodedError("ServerError"));
	}
})

router.get('/', async (req, res) => {
	try {
		if (req.query.code) {

			if (!validateLobbyCode(req.query.code.toString()) || await Lobby.findOne({ where: { code: req.query.code } }) === null) {
				res.status(400).json(new CodedError("BadLobbyCode"));
				return;
			}
			const gameState = await GameRedis.getGameState(req.query.code.toString());
			console.log(gameState);
			res.status(200).send(JSON.stringify(gameState));
		} else {
			res.status(400).send(new CodedError("BadLobbyCode"));
		}
	} catch {
		res.status(500).send(new CodedError("ServerError"));
	}
})

export default router;
