import { defineConfig, env } from "prisma/config";
import * as dotenv from "dotenv";

// Load .env file before using env()
dotenv.config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
