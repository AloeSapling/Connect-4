import { Router, type Request, type Response } from "express";
import { User } from "../database-sqllite/models.ts";
import { where } from "sequelize";
import { addRouteWithMethods } from "../lib/lib.ts";
import { CodedError } from "../lib/types.ts";

const router = Router();

addRouteWithMethods(router, '/create', async function(req: Request, res: Response) {
	// Create a new user and tie it with the session id
	const sessionID = req.session.id;
	try {
		await User.create({ sessionID: sessionID });
		res.status(204).json("Created successfully");
	} catch {
		res.status(500).json(new CodedError("ServerError"));
	}
}, ["POST", "PUT"]);

// Meant for the dev environment only - REMOVE IN PRODUCTION!!
router.get('/getAll', async function(req, res) {
	res.status(200).send(JSON.stringify(await User.findAll()));
});


export default router;
