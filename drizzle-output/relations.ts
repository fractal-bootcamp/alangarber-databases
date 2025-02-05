import { relations } from "drizzle-orm/relations";
import { authors, books, members } from "./schema";

export const booksRelations = relations(books, ({one}) => ({
	author: one(authors, {
		fields: [books.authorId],
		references: [authors.id]
	}),
	member: one(members, {
		fields: [books.memberId],
		references: [members.id]
	}),
}));

export const authorsRelations = relations(authors, ({many}) => ({
	books: many(books),
}));

export const membersRelations = relations(members, ({many}) => ({
	books: many(books),
}));