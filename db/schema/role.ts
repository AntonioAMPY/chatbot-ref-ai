import { InferSelectModel } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";
import { EnumRole } from "../enum/role";


export const role = sqliteTable('role', {
  id: integer('id').primaryKey(),
  name: text('name').$type<EnumRole>().notNull(),
});

export type Role = InferSelectModel<typeof role>;