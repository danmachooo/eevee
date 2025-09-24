import { PrismaClient } from "@/generated/prisma";
import { config } from "../config/config";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasources: {
      db: { url: config.db.url },
    },
    log: config.app.isDev ? ["query", "error", "warn"] : ["error"],
  });

if (config.app.isDev) globalForPrisma.prisma = prisma;
