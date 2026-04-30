import { randomInt } from "crypto";
import type { Request, RequestHandler, Response, Router } from "express";
import type { Methods } from "./types.ts";
import { ALL_CODE_CHARS, CODE_LENGTH } from "../config.ts";

const noAuth: RequestHandler = (req, res, next) => next();

/** Creates a random lobby code
* @returns The generated code
* */
function createLobbyCode(): string {
	let code = "";
	for (let i = 0; i < CODE_LENGTH; i++)
		code += ALL_CODE_CHARS[randomInt(0, ALL_CODE_CHARS.length)];
	return code;
}

/** Checks if the provided code matches the structure defined in the lobby code generation algorithm */
function isValidLobbyCode(code: string): boolean {
	if (code.length !== CODE_LENGTH) return false;
	// for(let i=0; i<CODE_LENGTH;i++){
	//     // Check if the code is comprised of only valid characters
	//     if(!ALL_CODE_CHARS.includes(code[i]))
	//         return false;
	// }
	return true;
}

/** A helper function that allows you to set a route / endpoint that only accepts the methods provided
* @param path The path for the endpoint
* @param fn The callback called when fetching the endpoint
* */
function addRouteWithMethods(router: Router, path: string, fn: RequestHandler, allowedMethods: Methods[] = ["GET"], _auth?: RequestHandler) {
	const auth = _auth ?? noAuth;

	allowedMethods.forEach((method) => {
		switch (method) {
			case "GET":
				router.get(path, auth, fn);
			case "POST":
				router.post(path, auth, fn);
			case "PUT":
				router.put(path, auth, fn);
			case "PATCH":
				router.patch(path, auth, fn);
			case "DELETE":
				router.delete(path, auth, fn);
		}
		// Return 405 for methods outside of allowedMethods array
		router.all(path, auth, (req: Request, res: Response) => {
			res.status(405).json({ message: 'Method Not Allowed' });
		});
	})
}

export { createLobbyCode, isValidLobbyCode, addRouteWithMethods };
