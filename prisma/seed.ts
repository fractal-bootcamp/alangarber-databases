import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const scienceFiction = await prisma.genre.upsert({
      where: { name: 'Science Fiction' },
      update: {},
      create: { name: 'Science Fiction', books: {
        create: {
            title: "Foundation",
            author: {
                create: {
                    name: "Isaac Asimov",
                    biography: 'Isaac Asimov was an American writer and professor of biochemistry at Boston University.'
                },
            },
            ISBN: "978-0-7432-7356-5",
        }
      } },
    })
    const fantasy = await prisma.genre.upsert({
      where: { name: 'Fantasy' },
      update: {},
      create: { name: 'Fantasy', books: {
        create: {
            title: "Harry Potter and the Sorcerer's Stone",
            author: {
                create: {
                    name: "J.K. Rowling",
                    biography: 'J.K. Rowling is a British author, best known for writing the Harry Potter series.'
                },
            },
            ISBN: "978-0-7475-3269-9",
        }
      } },
    })
    const mystery = await prisma.genre.upsert({
      where: { name: 'Mystery' },
      update: {},
      create: { name: 'Mystery', books: {
        create: {
            title: "Murder on the Orient Express",
            author: {
                create: {
                    name: "Agatha Christie",
                    biography: 'Agatha Christie was an English writer known for her detective novels and short stories.'
                },
            },
            ISBN: "978-0-00-712083-4",
            }
        }
      } })

  console.log({ scienceFiction, fantasy, mystery })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
