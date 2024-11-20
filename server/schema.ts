import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { serialize } from "v8";

export const posts = pgTable('posts', {
  id: serial('id').primaryKey().notNull(),
  title: text("title").notNull(), 
})