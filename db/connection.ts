import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as chatSchema from "./schema/chats";
import * as roleSchema from "./schema/roles";
import * as userSchema from "./schema/users";

const sqlite = new Database("sqlite.db");

type schema = typeof chatSchema & typeof roleSchema & typeof userSchema;

export const db: BetterSQLite3Database<schema> = drizzle(sqlite, {
  schema: { ...chatSchema, ...roleSchema, ...userSchema },
});