import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as chatSchema from "./schema/chats";
import * as roleSchema from "./schema/roles";
import * as userSchema from "./schema/users";
import * as messageSchema from "./schema/messages";

const sqlite = new Database(process.env.DB_PATH);

type schema = typeof chatSchema & typeof roleSchema & typeof userSchema & typeof chatSchema & typeof roleSchema & typeof messageSchema;

export const db: BetterSQLite3Database<schema> = drizzle(sqlite, {
  schema: { ...chatSchema, ...roleSchema, ...userSchema, ...messageSchema },
});