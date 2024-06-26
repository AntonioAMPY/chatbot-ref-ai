import { InferSelectModel } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { users } from "./users";


export const chats = sqliteTable('chats', {
  id: text('id').primaryKey().$default(() => crypto.randomUUID()),
  user_id: text('user_id').notNull().references(() => users.id),
  timestamp: integer('timestamp').$default(() => Date.now()),
});

export type Chat = InferSelectModel<typeof chats>;