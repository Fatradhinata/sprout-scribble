  import { defineConfig } from 'drizzle-kit'
  import * as dotenv from 'dotenv'

  dotenv.config({
    path: ".env.local",
  })

  // via connection params
  export default defineConfig({
    schema: './server/schema.ts',
    out: './server/migrations',
    dialect: "postgresql",
    dbCredentials: {
      url: process.env.POSTGRES_URL!,// can be boolean | "require" | "allow" | "prefer" | "verify-full" | options from node:tls
    }
  })