import createError, { type HttpError } from 'http-errors';
import express, { type NextFunction, type Request, type Response } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import cors from 'cors';

import gameRouter from './routes/game.ts';
import indexRouter from './routes/index.ts';
import usersRouter from './routes/users.ts';
import lobbyRouter from './routes/lobby.ts';

import { createClient } from 'redis';
import { authUser, wsAuthUser, wsIsLobbyMember } from './lib/auth.ts';
import { setupDatabase } from './database-sqllite/database.ts';
import { CLIENT_URL, REDIS_HOST, REDIS_PORT, SERVER_PORT } from './config.ts';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { setupGameWSServer } from './routes/ws/game.ts';
import { P_CodedError, P_ErrorCodes, type WsAuthArgs } from './lib/types.ts';

import { setupLobbyWSServer } from './routes/ws/lobby.ts';

// Set up Redis database
export const redis = createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
});

redis.on('error', (err) => console.error('Redis error:', err));

await redis.connect();

// Set up SQL database
await setupDatabase();

// Set up the express server
const app = express();
const server = createServer(app);

export const sessionMiddleware = session({
    secret: 'temp',
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 5,
    },
});

// Middlewares
app.use(logger('dev'));
app.use(express.raw({ type: 'application/octet-stream' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use(sessionMiddleware);
app.use(
    cors({
        origin: CLIENT_URL,
        credentials: true,
    })
);

// Most endpoints return a protobuf encoded binary stream
// This sets the content type for all responses to a binary stream
// Maually override where necessary
app.use((req, res, next) => {
    res.set('Content-Type', 'application/octet-stream');
    next();
});

// Development anti-caching
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

// Routes
app.use('/', indexRouter);

app.use('/user', usersRouter);

app.use('/lobby', authUser, lobbyRouter);

app.use('/game', gameRouter);

// Websockets
const wsRoutes = {
    game: {
        wss: new WebSocketServer({ noServer: true }),
        auth: [wsAuthUser],
    },
    lobby: {
        wss: new WebSocketServer({ noServer: true }),
        auth: [wsIsLobbyMember],
    },
};

// Setup each websocket route
setupGameWSServer(wsRoutes['game'].wss);
setupLobbyWSServer(wsRoutes['lobby'].wss);

// Handle connections to each websocket route
server.on('upgrade', async (req, socket, head) => {
    const { pathname } = new URL(req.url || '', `http://${req.headers.host}`);
    const pathArguments = pathname.split('/');
    const routePath = pathArguments[1]; // Takes the first path argument ie. 'ws://localhost:8080/lobby' gives 'lobby'

    if (!routePath) {
        socket.destroy();
        return;
    }

    const writeUnauthorisedError = () => {
        const error = P_CodedError.encode({ code: P_ErrorCodes.ERROR_CODES_UNAUTHORISED }).finish();
        socket.write('HTTP/1.1 401 Unauthorized\r\nContent-Length: ' + error.length + '\r\n\r\n');
        socket.write(error);
        socket.destroy();
    };

    console.log(pathname, routePath);

    const authArgs: WsAuthArgs = {
        req: req,
    };
    // eslint-disable-next-line
    const wsArgs: any[] = [req];

    if (routePath in wsRoutes) {
        // Paths with a lobby code argument
        if (routePath === 'lobby') {
            const lobbyCode = pathArguments[2];
            if (lobbyCode) (authArgs.req as Request).params.lobbyCode = lobbyCode;
            wsArgs[1] = lobbyCode;
        }

        // Check if the user is authorised to connect to the given path
        await wsRoutes[routePath as keyof typeof wsRoutes].auth.forEach(async (authFn) => {
            if (!(await authFn(authArgs))) {
                writeUnauthorisedError();
                return;
            }
        });

        // Establish the connection with the appropriate arguments
        wsRoutes[routePath as keyof typeof wsRoutes].wss.handleUpgrade(req, socket, head, (ws) => {
            wsRoutes[routePath as keyof typeof wsRoutes].wss.emit('connection', ws, ...wsArgs);
        });
    } else {
        socket.destroy();
    }
});

// Forward 404 errors to the error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Error handler middleware
app.use(function (err: HttpError, req: Request, res: Response, next: NextFunction) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.message);
});

server.listen(SERVER_PORT, () => console.log('Server running'));

export default app;
