// config/env.server.ts (server-only)
import { z } from "zod";

const serverEnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  DATABASE_URL: z.string().url(),
  DIRECT_URL: z.string().url(),
  PORT: z.string().default("3000"),
  NEXTAUTH_SECRET: z.string(),
  BASE_URL: z.string().url(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
});

export const serverEnv = serverEnvSchema.parse(process.env);
