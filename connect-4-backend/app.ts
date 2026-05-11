import createError, { type HttpError } from 'http-errors';
import express, { type NextFunction, type Request, type Response } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import cors from "cors";

import gameRouter from './routes/game.ts';
import indexRouter from './routes/index.ts';
import usersRouter from './routes/users.ts';
import lobbyRouter from './routes/lobby.ts';

import { createClient } from 'redis';
import { AuthUser, WSAuthUser } from './lib/auth.ts';
import { setupDatabase } from './database-sqllite/database.ts';
import { SERVER_PORT } from './config.ts';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { setupGameWSServer } from './routes/ws/game.ts';
import { CodedError, type WSRoutes } from './lib/types.ts';

// Set up Redis database
export const redis = createClient({
	url: "redis://localhost:6379",
});

redis.on("error", (err) => console.error("Redis error:", err));

await redis.connect();

// Set up SQL database
await setupDatabase();

// Set up the express server
const app = express();
const server = createServer(app);

export const sessionMiddleware = session({
	secret: "temp",
	resave: false,
	saveUninitialized: true,
	cookie: {
		path: '/',
		httpOnly: true,
		secure: false,
		maxAge: 1000 * 60 * 60 * 5
	}
});

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use(sessionMiddleware);
app.use(cors({
	origin: "http://localhost:5173",
	credentials: true,
}));

// Development anti-caching
app.use((req, res, next) => {
	res.set('Cache-Control', 'no-store');
	next();
});

// Routes
app.use('/', indexRouter);

app.use('/user', usersRouter);

app.use('/lobby', AuthUser, lobbyRouter);

app.use('/game', gameRouter);

// Websockets
const wsRoutes: WSRoutes = {
	"/game": new WebSocketServer({ noServer: true })
}

// Setup each websocket route
setupGameWSServer(wsRoutes["/game"]);

// Handle connections to each websocket route
server.on("upgrade", (req, socket, head) => {
	const { pathname } = new URL(req.url || "", `http://${req.headers.host}`);

	if (!WSAuthUser(req)) {
		socket.write(JSON.stringify(new CodedError("Unauthorised")));
		socket.destroy();
		return;
	}

	if (pathname in wsRoutes) {
		wsRoutes[pathname as keyof WSRoutes].handleUpgrade(req, socket, head, (ws) => {
			wsRoutes[pathname as keyof WSRoutes].emit("connection", ws, req);
		});
	} else {
		socket.destroy();
	}
});

// Forward 404 errors to the error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// Error handler middleware
app.use(function(err: HttpError, req: Request, res: Response, next: NextFunction) {
	// Set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.send(err.message);
});

server.listen(SERVER_PORT, () => "Server running");

export default app;
