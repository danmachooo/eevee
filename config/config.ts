// config/config.ts
import { serverEnv } from "./env.server";

export const config = {
  app: {
    nodeEnv: serverEnv.NODE_ENV,
    port: Number(serverEnv.PORT),
    authSecret: serverEnv.NEXTAUTH_SECRET,
    baseUrl: serverEnv.BASE_URL,
    isProd: serverEnv.NODE_ENV === "production",
    isDev: serverEnv.NODE_ENV === "development",
  },
  db: {
    url: serverEnv.DATABASE_URL,
    directUrl: serverEnv.DIRECT_URL,
  },
  google: {
    id: serverEnv.GOOGLE_CLIENT_ID,
    secret: serverEnv.GOOGLE_CLIENT_SECRET,
  },
};
