import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { authors, books, authorsRelations } from './schema';
import { seed } from 'drizzle-seed';

async function main() {
const db = drizzle({
    connection: {
        connectionString: process.env.DRIZZLE_DATABASE_URL!,
    }
})

await seed(db, { authors, books, authorsRelations}).refine(() => ({
    authors: {
        count: 3,
        with: {
            books: 4,
        }
    }
}))
}
main();