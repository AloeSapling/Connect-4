import z from 'zod';

export const Z_Username = z.object({
    username: z.string().trim().min(1),
});
export type Z_TUsername = z.infer<typeof Z_Username>;

export const Z_LobbyName = z.object({
    lobby_name: z.string().trim().min(1),
});
export type Z_TLobbyName = z.infer<typeof Z_LobbyName>;