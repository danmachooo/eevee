import { env } from "./env";

export const config = {
  app: {
    nodeEnv: env.NODE_ENV,
    port: Number(env.PORT),
    authSecret: env.NEXTAUTH_SECRET,
    baseUrl: env.BASE_URL,
    isProd: env.NODE_ENV === "production",
    isDev: env.NODE_ENV === "development",
  },
  db: {
    url: env.DATABASE_URL,
    directUrl: env.DIRECT_URL,
  },
  google: {
    id: env.GOOGLE_CLIENT_ID,
    secret: env.GOOGLE_CLIENT_SECRET,
  },
};
