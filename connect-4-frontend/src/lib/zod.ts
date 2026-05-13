import z from 'zod';

export const Z_Username = z.object({
    username: z.string().trim().min(1),
});
export type Z_TUsername = z.infer<typeof Z_Username>;
