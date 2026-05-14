import { Router, type Request, type Response } from 'express';
import { User } from '../database-sqllite/models.ts';
import { addRouteWithMethods } from '../lib/lib.ts';
import { changeUsername, createUser, getUserBySessionID } from '../database-sqllite/user.ts';
import { routes } from '../lib/proto.js';
import { P_CodedError, P_ErrorCodes, type UserRequest } from '../lib/types.ts';
import { authUser } from '../lib/auth.ts';

const router = Router();

addRouteWithMethods(
    router,
    '/create',
    async (req: Request, res: Response) => {
        // Create a new user and tie it with the session id
        let body: routes.CreateUserRequest;
        try {
            body = routes.CreateUserRequest.decode(req.body);
        } catch {
            res.status(400).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_BAD_DATA,
                }).finish()
            );
            return;
        }

        const sessionID = req.session.id;

        try {
            await createUser(sessionID, body.username);
            res.status(201).send();
        } catch {
            res.status(500).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['POST']
);

addRouteWithMethods(
    router,
    '/changeUsername',
    async (req: Request, res: Response) => {
        let body: routes.ChangeUsernameRequest;
        try {
            body = routes.ChangeUsernameRequest.decode(req.body);
        } catch {
            res.status(400).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_BAD_DATA,
                }).finis()
            );
            return;
        }
        console.log(body);

        const user = (req as UserRequest).user;

        try {
            await changeUsername(body.username, user.id);
            res.status(200).send();
        } catch {
            res.status(500).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['POST', 'PATCH'],
    [authUser]
);

addRouteWithMethods(
    router,
    '/',
    async (req: Request, res: Response) => {
        // Returns data about the currently logged in user
        const user = (req as UserRequest).user;

        res.status(200).send(
            routes.GetLoggedInData.encode({
                user: user,
            }).finish()
        );
    },
    ['GET'],
    [authUser]
);

// Meant for the dev environment only - REMOVE IN PRODUCTION!!
router.get('/getAll', async function (req, res) {
    res.status(200).send(JSON.stringify(await User.findAll()));
});

export default router;
