import z from 'zod';
import * as proto from '../lib/proto.js';

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
    player_id: z.enum(proto.shared.PlayerIDs),
});
export type Z_TChangePlayerID = z.infer<typeof Z_ChangePlayerID>;