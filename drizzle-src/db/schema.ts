import { integer, pgTable, varchar, serial } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const books = pgTable("books", {
    id: serial('id').primaryKey(),
    title: varchar(),
    authorId: integer().references(() => authors.id),
    ISBN: varchar().unique(),
    memberId: integer().references(() => members.id),
})

export const booksRelations = relations(books, ({ one, many }) => ({
    author: one(authors, {
        fields: [books.authorId],
        references: [authors.id],
    }),
    member: one(members, {
        fields: [books.memberId],
        references: [members.id],
    }),
    genres: many(genres),
}))

export const authors = pgTable("authors", {
    id: serial('id').primaryKey(),
    name: varchar().unique(),
    biography: varchar(),
})

export const authorsRelations = relations(authors, ({ many }) => ({
    books: many(books),
}))

export const genres = pgTable("genres", {
    id: serial('id').primaryKey(),
    name: varchar().unique(),
})

export const genresRelations = relations(genres, ({ many }) => ({
    books: many(books),
}))

export const members = pgTable("members", {
    id: serial('id').primaryKey(),
    name: varchar(),
    email: varchar().unique(),
    address: varchar(),
})

export const membersRelations = relations(members, ({ many }) => ({
    books: many(books),
}))