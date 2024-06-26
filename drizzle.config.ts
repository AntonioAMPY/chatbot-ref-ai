import { defineConfig } from "drizzle-kit"
export default defineConfig({
    dialect: "sqlite",
    dbCredentials: {
        url: "sqlite.db",
    },
    schema: "./db/schema",
})