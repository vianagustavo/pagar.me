import { prismaClient } from "../database/prismaClient";

class ListTransactionsService {
  async execute() {
    const transactions = await prismaClient.transaction.findMany();
    return transactions;
  }
}

export { ListTransactionsService };
