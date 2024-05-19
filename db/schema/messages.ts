import { InferSelectModel } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { users } from "./users";
import { chats } from "./chats";

export const messages = sqliteTable('messages', {
  id: text('id').primaryKey().$default(() => crypto.randomUUID()),
  chat_id: text('chat_id').notNull().references(() => chats.id),
  user_id: text('user_id').notNull().references(() => users.id),
  content: text('content').notNull(),
  timestamp: integer('timestamp').$default(() => Date.now()),
});

export type Chat = InferSelectModel<typeof messages>;