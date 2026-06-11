import * as GameRedis from '../database-redis/game.ts';
import { Router } from 'express';
import { getLobbySettings, lobbyExists } from '../database-sqllite/lobby.ts';
import { CodedError, P_CodedError, P_ErrorCodes, P_PlayerIDs } from '../lib/types.ts';
import { addRouteWithMethods } from '../lib/lib.ts';
import { routes, ws } from '../lib/proto.js';
import { isLobbyHost, isLobbyMember } from '../lib/auth.ts';
import { lobbyHasPlayerWithID } from '../database-sqllite/lobbyMembers.ts';
import { broadcastToLobbyRoom } from './ws/lobby.ts';
import { boardDataToProtobufBoard } from '../lib/game/lib.ts';

const router = Router();

addRouteWithMethods(
    router,
    '/:code/create',
    async (req, res) => {
        // Create a new game using the provided code
        const code = req.params.code as string;
        try {
            // Make sure a lobby exists with the provided code
            if (!(await lobbyExists(code))) {
                res.status(400).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_DOESNT_EXIST,
                    }).finish()
                );
                return;
            }

            // Checks if the lobby is in a valid state
            if (
                !(await lobbyHasPlayerWithID(code, P_PlayerIDs.PLAYER_IDS_PLAYER1)) ||
                !(await lobbyHasPlayerWithID(code, P_PlayerIDs.PLAYER_IDS_PLAYER2))
            ) {
                res.status(400).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_BAD_DATA,
                    }).finish()
                );
                return;
            }

            try {
                // Get the settings used as parameters for creating the game
                const settings = await getLobbySettings(code);

                await GameRedis.createGame(code, settings);

                broadcastToLobbyRoom(code, {
                    response: ws.LobbyResponses.LOBBY_RESPONSES_START_GAME,
                });
                res.status(201).send();
            } catch (err) {
                const formattedError = {
                    code: (err as CodedError).code,
                    error: (err as CodedError).error.toString(),
                };
                res.status(400).send(P_CodedError.encode(formattedError).finish());
            }
        } catch {
            res.status(500).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['POST', 'PUT'],
    [isLobbyHost]
);

addRouteWithMethods(
    router,
    '/:code',
    async (req, res) => {
        // Get the gameState of the game associated with the provided code
        const code = req.params.code as string;
        try {
            // Make sure a lobby exists with the provided code
            if (!(await lobbyExists(code))) {
                res.status(400).send(
                    P_CodedError.encode({
                        code: P_ErrorCodes.ERROR_CODES_DOESNT_EXIST,
                    }).finish()
                );
                return;
            }

            try {
                const gameData = await GameRedis.getGameData(code);

                // Format the game's board to be sent to the client
                const protoBoard = boardDataToProtobufBoard(gameData.board);

                const currentTokens = gameData.tokenQueue?.tokens
                    ? {
                          player1: gameData.tokenQueue.tokens[P_PlayerIDs.PLAYER_IDS_PLAYER1] ?? null,
                          player2: gameData.tokenQueue.tokens[P_PlayerIDs.PLAYER_IDS_PLAYER2] ?? null,
                      }
                    : null;

                const decks = gameData.tokenQueue?.decks
                    ? {
                          player1: gameData.tokenQueue.decks[P_PlayerIDs.PLAYER_IDS_PLAYER1] ?? [],
                          player2: gameData.tokenQueue.decks[P_PlayerIDs.PLAYER_IDS_PLAYER2] ?? [],
                      }
                    : null;

                res.status(200).send(
                    routes.GetGameResponse.encode({
                        game: {
                            board: protoBoard,
                            turn: gameData.turn,
                            currentTokens,
                            decks,
                            tokenQueueMode: gameData.tokenQueue?.mode ?? null,
                        },
                    }).finish()
                );
            } catch (err) {
                const formattedError = {
                    code: (err as CodedError).code,
                    error: (err as CodedError).error.toString(),
                };
                res.status(400).send(P_CodedError.encode(formattedError).finish());
            }
        } catch {
            res.status(500).send(
                P_CodedError.encode({
                    code: P_ErrorCodes.ERROR_CODES_SERVER_ERROR,
                }).finish()
            );
        }
    },
    ['GET'],
    [isLobbyMember]
);

export default router;
