import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
