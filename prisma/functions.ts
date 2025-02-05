import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addBook(book: { title: string, author: {}, ISBN: string, }) {
    return await prisma.book.upsert({
        where: { ISBN: book.ISBN },
        update: {},
        create: { ...book },
    })
}

export async function borrowBook(book: { title: string, author: {}, ISBN: string, }, member: { id: number, }) {
    return await prisma.book.update({
        where: { ISBN: book.ISBN },
        data: { memberId: member.id },
    })
}