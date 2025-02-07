import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6).regex(/[a-zA-Z0-9]/, { message: "Senha deve conter letras e números" }),
  confirmPassword: z.string().min(6).regex(/[a-zA-Z0-9]/, { message: "Senha deve conter letras e números" }),
}).refine(data => data.password === data.confirmPassword, { message: "Senhas não coincidem", path: ["confirmPassword"] });

export type RegisterData = z.infer<typeof registerSchema>;