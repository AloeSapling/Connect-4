import { randomInt } from "crypto";
import type { Request, RequestHandler, Response, Router } from "express";
import type { Methods } from "./types.ts";

const ALL_CODE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789" as const;
const CODE_LENGTH = 8 as const;

function createLobbyCode(): string {
	let code = "";
	for (let i = 0; i < CODE_LENGTH; i++)
		code += ALL_CODE_CHARS[randomInt(0, ALL_CODE_CHARS.length)];
	return code;
}

function validateLobbyCode(code: string): boolean {
	if (code.length !== CODE_LENGTH) return false;
	// for(let i=0; i<CODE_LENGTH;i++){
	//     // Check if the code is comprised of only valid characters
	//     if(!ALL_CODE_CHARS.includes(code[i]))
	//         return false;
	// }
	return true;
}

function addRouteWithMethod(router: Router, path: string, fn: RequestHandler, allowedMethods: Methods[] = ["GET"]) {
	allowedMethods.forEach((method) => {
		switch (method) {
			case "GET":
				router.get(path, fn);
			case "POST":
				router.post(path, fn);
			case "PUT":
				router.put(path, fn);
			case "PATCH":
				router.patch(path, fn);
			case "DELETE":
				router.delete(path, fn);
		}
		router.all(path, (req: Request, res: Response) => {
			res.status(405).json({ message: 'Method Not Allowed' });
		});
	})
}

export { createLobbyCode, validateLobbyCode, addRouteWithMethod };
