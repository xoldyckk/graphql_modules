import { PrismaClient } from "@prisma/client";

/*
This creates an instance of PrismaClient named prisma and exports it.
This is the preferred way to use prisma as written in the prisma docs.
*/
export const prisma = new PrismaClient({});
