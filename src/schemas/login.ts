import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string({ message: 'Este campo é obrigatório' }).min(1, { message: 'Este campo é obrigatório' }),
  password: z.string({ message: 'Este campo é obrigatório' }).min(1, { message: 'Este campo é obrigatório' }),
});

export type LoginData = z.infer<typeof loginSchema>;