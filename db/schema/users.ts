import { InferSelectModel } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";
import { roles } from "./roles";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  role_id: integer("role_id").notNull().references(() => roles.id),
});

export type User = InferSelectModel<typeof users>;
