import { InferSelectModel } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { role } from "./role";
import { EnumRole } from "../enum/role";

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  full_name: text("name").notNull(),
  role_id: text("role").$type<EnumRole>().notNull().references(() => role.id),
});

export type User = InferSelectModel<typeof user>;
