import z from "zod";

export const SignupSchema = z.object({
  username: z.string(),
  firstname: z.string(),
  lastname: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(8),
});

export const SigninSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
