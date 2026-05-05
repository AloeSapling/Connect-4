import { Router, type Request, type Response } from "express";
import { User } from "../database-sqllite/models.ts";
import { addRouteWithMethods } from "../lib/lib.ts";
import { CodedError } from "../lib/types.ts";
import { createUser } from "../database-sqllite/user.ts";

const router = Router();

addRouteWithMethods(router, '/create', async function (req: Request, res: Response) {
        // Create a new user and tie it with the session id
        const sessionID = req.session.id;

        try {
                await createUser(sessionID);
                res.status(201).json("Created successfully");
        } catch {
                res.status(500).json(new CodedError("ServerError"));
        }
}, ["POST", "PUT"]);

// Meant for the dev environment only - REMOVE IN PRODUCTION!!
router.get('/getAll', async function (req, res) {
        res.status(200).send(JSON.stringify(await User.findAll()));
});


export default router;
