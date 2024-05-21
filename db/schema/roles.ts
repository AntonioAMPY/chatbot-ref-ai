import { InferSelectModel } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { EnumRole } from "../enum/role";

export const roles = sqliteTable("roles", {
  id: text("id")
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  name: text("name").$type<EnumRole>().notNull(),
});

export type Role = InferSelectModel<typeof roles>;
