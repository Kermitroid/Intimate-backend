import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string().min(3),
  displayName: z.string().min(1),
  password: z.string().min(6),
  avatar: z.string().url().optional()
});

export const loginSchema = z.object({
  username: z.string(),
  password: z.string()
});
