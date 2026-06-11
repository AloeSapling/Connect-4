import z from 'zod';
import { P_PlayerIDs, P_TokenQueueModes, P_TokenTypes } from './types.js';

export const Z_Username = z.object({
    username: z.string().trim().min(1),
});
export type Z_TUsername = z.infer<typeof Z_Username>;

export const Z_LobbyName = z.object({
    lobby_name: z.string().trim().min(1),
});
export type Z_TLobbyName = z.infer<typeof Z_LobbyName>;

export const Z_LobbyCode = z.object({
    lobby_code: z.string().trim().min(1),
});
export type Z_TLobbyCode = z.infer<typeof Z_LobbyCode>;

export const Z_ChangePlayerID = z.object({
    user_id: z.number().min(1),
    player_id: z.enum(P_PlayerIDs),
});
export type Z_TChangePlayerID = z.infer<typeof Z_ChangePlayerID>;

export const Z_ChangeLobbySettings = z.object({
    special_gameMode: z.boolean(),
    token_queue_mode: z.nativeEnum(P_TokenQueueModes),
    every: z.number().min(1).max(15).optional(),
    allowed_tokens: z.array(z.nativeEnum(P_TokenTypes)),
}).refine((obj) => {
    if (obj.token_queue_mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_SPECIAL_EVERY && obj.every === undefined) {
        return false;
    }
    return true;
}, { message: "AAA", path: ['every'] })
export type Z_TChangeLobbySettings = z.infer<typeof Z_ChangeLobbySettings>;
