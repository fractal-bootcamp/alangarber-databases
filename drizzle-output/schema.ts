import { pgTable, unique, serial, varchar, foreignKey, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const genres = pgTable("genres", {
	id: serial().primaryKey().notNull(),
	name: varchar(),
}, (table) => [
	unique("genres_name_unique").on(table.name),
]);

export const authors = pgTable("authors", {
	id: serial().primaryKey().notNull(),
	name: varchar(),
	biography: varchar(),
}, (table) => [
	unique("authors_name_unique").on(table.name),
]);

export const books = pgTable("books", {
	id: serial().primaryKey().notNull(),
	title: varchar(),
	authorId: integer(),
	isbn: varchar("ISBN"),
	memberId: integer(),
}, (table) => [
	foreignKey({
			columns: [table.authorId],
			foreignColumns: [authors.id],
			name: "books_authorId_authors_id_fk"
		}),
	foreignKey({
			columns: [table.memberId],
			foreignColumns: [members.id],
			name: "books_memberId_members_id_fk"
		}),
	unique("books_ISBN_unique").on(table.isbn),
]);

export const members = pgTable("members", {
	id: serial().primaryKey().notNull(),
	name: varchar(),
	email: varchar(),
	address: varchar(),
}, (table) => [
	unique("members_email_unique").on(table.email),
]);
