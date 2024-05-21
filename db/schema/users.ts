import { InferSelectModel } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { roles } from "./roles";

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  name: text("name").notNull(),
  role_id: text("role_id")
    .notNull()
    .references(() => roles.id),
});

export type User = InferSelectModel<typeof users>;
