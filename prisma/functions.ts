import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addBook(book: { title: string, author: {}, ISBN: string, }) {
    return await prisma.book.upsert({
        where: { ISBN: book.ISBN },
        update: {},
        create: { ...book },
    })
}

async function borrowBook(book: { title: string, author: {}, ISBN: string, }, member: { id: number, }) {
    return await prisma.book.upsert({
        where: { ISBN: book.ISBN },
        update: { memberId: member.id },
        create: { ...book },
    })
}