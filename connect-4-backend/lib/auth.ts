import type { NextFunction, Request, Response } from "express";
import { User } from "../database-sqllite/models.ts";
import { CodedError, type SessionRequest } from "./types.ts";

function AuthUser(req: unknown, res: Response, next: NextFunction) {
	const sessionID = (req as SessionRequest).session.id;
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
		(req as SessionRequest).user = user;
		next();
	}).catch(err => console.log(err));
}

export { AuthUser }
