import { PrismaClient } from "@prisma/client";

declare global {
    // @ts-expect-error
    var prisma: PrismaClient;
}

export default global.prisma ??= new PrismaClient();