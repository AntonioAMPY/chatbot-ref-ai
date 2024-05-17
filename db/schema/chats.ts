import { InferSelectModel } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { users } from "./users";


export const chats = sqliteTable('chats', {
  id: text('id').primaryKey(),
  user_id: text('user_id').notNull().references(() => users.id),
  message: text('message'),
  timestamp: integer('timestamp').$default(() => Date.now()),
});

export type Chat = InferSelectModel<typeof chats>;