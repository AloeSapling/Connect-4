import * as GameRedis from "../database-redis/game.ts";
import { Router } from "express";
import { createLobby, getAllLobbies, getSpecificLobby } from "../database-sqllite/lobby.ts";
import { CodedError } from "../lib/types.ts";
import { validateLobbyCode } from "../lib/lib.ts";

const router = Router();

router.get('/create', async (req, res) => {
	if (req.query.code) {
		await GameRedis.createGame(req.query.code.toString());
	}
	res.send(req.query.code);
})

router.get('/get', async (req, res) => {
	if (req.query.code) {
		const gameState = await GameRedis.getGameState(req.query.code.toString());
		console.log(gameState);
	}
	res.send(`GET: ${req.query.code}`)
})
export default router;
