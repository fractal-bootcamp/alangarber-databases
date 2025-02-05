import { PrismaClient } from "@prisma/client";

console.log(
  "Hello via Bun! Today, we'll be using Prisma to create and modify a Postgres database hosted within a Docker container, itself hosted locally.",
);

const prisma = new PrismaClient();
