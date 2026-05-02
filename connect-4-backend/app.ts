import createError, { type HttpError } from 'http-errors';
import express, { type NextFunction, type Request, type Response } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

import gameRouter from './routes/game.ts';
import indexRouter from './routes/index.ts';
import usersRouter from './routes/users.ts';
import lobbyRouter from './routes/lobby.ts';

import { createClient } from 'redis';
import { AuthUser } from './lib/auth.ts';
import { setupDatabase } from './database-sqllite/database.ts';
import { SERVER_PORT } from './config.ts';

// Set up Redis database
export const redis = createClient({
	url: "redis://localhost:6379",
});

redis.on("error", (err) => console.error("Redis error:", err));

await redis.connect();

// Set up SQL database
await setupDatabase();

// Set up the express server
var app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use(session({
	secret: "temp",
	resave: false,
	saveUninitialized: true,
	cookie: {
		path: '/',
		httpOnly: true,
		secure: false,
		maxAge: 1000 * 60 * 60 * 5 // 5 hours
	}
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

app.listen(SERVER_PORT);

export default app;
