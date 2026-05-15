import type { NextFunction, Request, Response } from 'express';
import { User } from '../database-sqllite/models.ts';
import { P_CodedError, P_ErrorCodes, type UserRequest } from './types.ts';
import { sessionMiddleware } from '../app.ts';
import { getUserBySessionID } from '../database-sqllite/user.ts';
import * as lobbyFn from '../database-sqllite/lobbyMembers.ts';

/** Check if there exists a user tied to the client's sessionID
 *
 * Sets the request's user to the user tied to the client's sessionID
 * */
export function authUser(req: Request, res: Response, next: NextFunction) {
	const sessionID = req.session.id;

	if ((req as UserRequest).user?.id) {
		next();
		return;
	}

	getUserBySessionID(sessionID)
		.then((user: User | null) => {
			if (user === null) {
				res.status(401).send(
					P_CodedError.encode({
						code: P_ErrorCodes.ERROR_CODES_UNAUTHORISED,
					}).finish()
				);
				return;
			}
			(req as UserRequest).user = user;
			next();
		})
		.catch((err) => {
			next(err);
		});
}

/** A wrapper around authUser
 *
 * Used for websockets (fakes a http request)
 * */
export function wsAuthUser(req: Request): Promise<boolean> {
	return new Promise((resolve) => {
		const fakeRes = {
			status: () => fakeRes,
			json: () => resolve(false),
			send: () => resolve(false),
		} as unknown as Response;

		sessionMiddleware(req, fakeRes, () => {
			authUser(req, fakeRes, (err) => resolve(!err));
		});
	});
}

/** Checks if user is a part of the lobby */
export async function isLobbyMember(req: Request, res: Response, next: NextFunction) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	await authUser(req, res, async (err?: any) => {
		if (err) {
			next(err);
			return;
		}

		const user = (req as UserRequest).user;
		const code = req.params.code as string;

		if (!(await lobbyFn.isLobbyMember(code, user.id))) {
			res.status(401).send(
				P_CodedError.encode({
					code: P_ErrorCodes.ERROR_CODES_UNAUTHORISED,
				}).finish()
			);
			return;
		}

		next();
	});
}

/** Checks if the user is the host of the lobby */
export async function isLobbyHost(req: Request, res: Response, next: NextFunction) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	await authUser(req, res, async (err?: any) => {
		if (err) {
			next(err);
			return;
		}

		const user = (req as UserRequest).user;
		const code = req.params.code as string;

		if (!(await lobbyFn.isLobbyHost(code, user.id))) {
			res.status(401).send(
				P_CodedError.encode({
					code: P_ErrorCodes.ERROR_CODES_UNAUTHORISED,
				}).finish()
			);
			return;
		}

		next();
	});
}
