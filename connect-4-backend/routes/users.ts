import { Router, type Request, type Response } from "express";
import { User } from "../database-sqllite/models.ts";
import { where } from "sequelize";
import { addRouteWithMethod } from "../lib/lib.ts";
import { CodedError } from "../lib/types.ts";

const router = Router();

addRouteWithMethod(router, '/create', async function(req: Request, res: Response) {
	const sessionID = req.session.id;
	try {
		await User.create({ sessionID: sessionID });
		res.status(204).json("Created successfully");
	} catch {
		res.status(500).json(new CodedError("ServerError"));
	}
}, ["POST", "PUT"]);

// meant for a dev environment only
router.get('/getAll', async function(req, res) {
	res.status(200).send(JSON.stringify(await User.findAll()));
});


export default router;
