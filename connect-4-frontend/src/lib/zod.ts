import z from 'zod';

export const Z_Username = z.object({
    username: z.string(),
});
export type Z_TUsername = z.infer<typeof Z_Username>;
