import type { NextFunction, Request, Response } from "express";
import { User } from "../database-sqllite/models.ts";
import { CodedError, type UserRequest } from "./types.ts";

/** Check if there exists a user tied to the client's sessionID 
*
* Sets the request's user to the user tied to the client's sessionID
* */
function AuthUser(req: Request, res: Response, next: NextFunction) {
	const sessionID = req.session.id;
	console.log(sessionID);
	User.findOne({
		where: {
			sessionID: sessionID,
		}
	}).then((user: User | null) => {
		if (user === null) {
			res.status(401).json(new CodedError("Unauthorised"));
			return;
		}
		(req as UserRequest).user = user;
		next();
	}).catch(err => console.log(err));
}

export { AuthUser }
