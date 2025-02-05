import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create genres
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

  // Create authors
//   const authors = await prisma.$transaction([
//     prisma.author.upsert({
//       where: { name: 'Isaac Asimov' },
//       update: {},
//       create: {
//         name: 'Isaac Asimov',
//         biography: 'Isaac Asimov was an American writer and professor of biochemistry at Boston University.',
//       },
//     }),
//     prisma.author.upsert({
//       where: { name: 'J.K. Rowling' },
//       update: {},
//       create: {
//         name: 'J.K. Rowling',
//         biography: 'J.K. Rowling is a British author, best known for writing the Harry Potter series.',
//       },
//     }),
//     prisma.author.upsert({
//       where: { name: 'Agatha Christie' },
//       update: {},
//       create: {
//         name: 'Agatha Christie',
//         biography: 'Agatha Christie was an English writer known for her detective novels and short stories.',
//       },
//     }),
//   ]);

//   console.log('Authors seeded:', authors.map((a: { name: any; }) => a.name));

//   // Create members
//   const members = await prisma.$transaction([
//     prisma.member.upsert({
//       where: { email: 'john.doe@example.com' },
//       update: {},
//       create: {
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         address: '123 Main St, Springfield, USA',
//       },
//     }),
//     prisma.member.upsert({
//       where: { email: 'jane.smith@example.com' },
//       update: {},
//       create: {
//         name: 'Jane Smith',
//         email: 'jane.smith@example.com',
//         address: '456 Elm St, Springfield, USA',
//       },
//     }),
//   ]);

//   console.log('Members seeded:', members.map((m: { name: any; }) => m.name));

//   // Create books and assign them to members (some books are not rented)
//   const books = await prisma.$transaction([
//     prisma.book.upsert({
//       where: { ISBN: '978-0-7432-7356-5' },
//       update: {},
//       create: {
//         title: 'Foundation',
//         ISBN: '978-0-7432-7356-5',
//         authorId: authors[0].id,
//         genres: { connect: [{ id: genres[0].id }] },
//         memberId: members[0].id, // John Doe rented this book
//       },
//     }),
//     prisma.book.upsert({
//       where: { ISBN: '978-0-7475-3269-9' },
//       update: {},
//       create: {
//         title: 'Harry Potter and the Sorcerer’s Stone',
//         ISBN: '978-0-7475-3269-9',
//         authorId: authors[1].id,
//         genres: { connect: [{ id: genres[1].id }] },
//         memberId: null, // Available for rent
//       },
//     }),
//     prisma.book.upsert({
//       where: { ISBN: '978-0-00-712083-4' },
//       update: {},
//       create: {
//         title: 'Murder on the Orient Express',
//         ISBN: '978-0-00-712083-4',
//         authorId: authors[2].id,
//         genres: { connect: [{ id: genres[2].id }] },
//         memberId: members[1].id, // Jane Smith rented this book
//       },
//     }),
//   ]);

//   console.log('Books seeded:', books.map((b: { title: any; }) => b.title));
// }
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
