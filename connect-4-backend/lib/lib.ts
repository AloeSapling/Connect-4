import { randomInt } from 'crypto';
import type { Request, RequestHandler, Response, Router } from 'express';
import type { LowerCaseMethods, Methods, Room, TPlayerIDs } from './types.ts';
import { ALL_CODE_CHARS, CODE_LENGTH } from '../config.ts';

const noAuth: RequestHandler = (req, res, next) => next();

/** Creates a random lobby code
 * @returns The generated code
 * */
function createLobbyCode(): string {
    let code = '';
    for (let i = 0; i < CODE_LENGTH; i++) code += ALL_CODE_CHARS[randomInt(0, ALL_CODE_CHARS.length)];
    return code;
}

/** A helper function that allows you to set a route / endpoint that only accepts the methods provided
 * @param path The path for the endpoint
 * @param fn The callback called when fetching the endpoint
 * */
function addRouteWithMethods(
    router: Router,
    path: string,
    fn: RequestHandler,
    allowedMethods: Methods[] = ['GET'],
    _auth?: [RequestHandler]
) {
    const auth = _auth ?? [noAuth];

    const asyncFn: RequestHandler = (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };

    allowedMethods.forEach((method) => {
        router[method.toLowerCase() as LowerCaseMethods](path, ...auth, asyncFn);
    });

    // Return 405 for methods outside of allowedMethods array
    router.all(path, ...auth, (req: Request, res: Response) => {
        res.status(405).json({ message: 'Method Not Allowed' });
    });
}

/** Send a message to all users connected to a websocket room */
function broadcastToRoom(room: Room, message: string | Uint8Array) {
    room.forEach((ws) => {
        ws.send(message);
    });
}

export { createLobbyCode, addRouteWithMethods, broadcastToRoom };
