import { Router, type Request, type Response } from "express";
import { User } from "../database-sqllite/models.ts";
import { addRouteWithMethods } from "../lib/lib.ts";
import { createUser } from "../database-sqllite/user.ts";
import * as proto from '../lib/proto.js';

const router = Router();

addRouteWithMethods(router, '/create', async function (req: Request, res: Response) {
        // Create a new user and tie it with the session id
        const sessionID = req.session.id;

        try {
                await createUser(sessionID);
                res.status(201).send();
        } catch {
                res.status(500).send(proto.shared.CodedError.encode({ code: proto.shared.ErrorCodes.ERROR_CODES_SERVER_ERROR }).finish());
        }
}, ["POST", "PUT"]);

// Meant for the dev environment only - REMOVE IN PRODUCTION!!
router.get('/getAll', async function (req, res) {
        res.status(200).send(JSON.stringify(await User.findAll()));
});

addRouteWithMethods(router, '/', async function(req: Request, res: Response) {
	await deleteAllUsers();
}, ["DELETE"]);


export default router;
