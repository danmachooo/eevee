// config/env.client.ts
import { z } from "zod";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().url(),
});

// ✅ Pass the values explicitly, not the entire process.env
export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
});
