import { InferSelectModel } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { user } from "./user";


export const chat = sqliteTable('chat', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => user.id),
  message: text('message'),
  timestamp: integer('timestamp'),
});

export type Chat = InferSelectModel<typeof chat>;