import { createAuthClient } from "better-auth/react";
import { clientEnv } from "config/env.client";

export const authClient = createAuthClient({
  baseURL: clientEnv.NEXT_PUBLIC_BASE_URL,
});

export const { signIn, signOut, signUp, useSession } = authClient;
