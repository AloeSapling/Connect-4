import type { NextFunction, Request, Response } from "express";
import { User } from "../database-sqllite/models.ts";
import { CodedError, type UserRequest } from "./types.ts";
import { sessionMiddleware } from "../app.ts";
import { getUserBySessionID } from "../database-sqllite/user.ts";

/** Check if there exists a user tied to the client's sessionID 
*
* Sets the request's user to the user tied to the client's sessionID
* */
function AuthUser(req: Request, res: Response, next: NextFunction) {
        const sessionID = req.session.id;
        console.log(sessionID);
        getUserBySessionID(sessionID).then((user: User | null) => {
                if (user === null) {
                        res.status(401).json(new CodedError("Unauthorised"));
                        return;
                }
                (req as UserRequest).user = user;
                next();
        }).catch(err => {
                next(err);
        });
}

/** A wrapper around authUser
 *
* Used for websockets (fakes a http request) 
* */
function WSAuthUser(req: Request): Promise<boolean> {
        return new Promise((resolve) => {
                const fakeRes = {
                        status: () => fakeRes,
                        json: () => resolve(false),
                        send: () => resolve(false),
                } as unknown as Response;

                sessionMiddleware(req, fakeRes, () => {
                        AuthUser(req, fakeRes, (err) => resolve(!err));
                });
        });
}

export { AuthUser, WSAuthUser }
