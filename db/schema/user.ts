import { InferSelectModel } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";
import { role } from "./role";

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  role_id: integer("role_id").notNull().references(() => role.id),
});

export type User = InferSelectModel<typeof user>;
