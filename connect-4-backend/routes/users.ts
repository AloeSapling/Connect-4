import { Router } from "express";
import { User } from "../database-sqllite/models.ts";
import { where } from "sequelize";

const router = Router();

router.get('/getAll', async function(req, res) {
	res.status(200).send(JSON.stringify(await User.findAll()));
});

router.get('/create', async function(req, res) {
	const sessionID = req.session.id;
	console.log(sessionID);
	await User.create({ sessionID: sessionID });
	res.status(204).send("Created successfully");
})

export default router;
