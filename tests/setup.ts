import { PrismaClient } from "@prisma/client";
import request from "supertest";
import app from "../src/app";

process.env.DATABASE_URL =
  "postgresql://root:admin@localhost:5432/pagarmetest?schema=public";

const prismaClient = new PrismaClient();
beforeAll(() => {
  return prismaClient.$connect();
});

export const superAppRequest = request(app);
