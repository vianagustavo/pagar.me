import { InvalidArgument } from "../app";
import { prismaClient } from "../database/prismaClient";

class ListBalanceService {
  async execute() {
    const available_balance = await prismaClient.payable.aggregate({
      _sum: {
        balance: true
      },
      where: {
        status: "paid"
      }
    });
    const pending_funds = await prismaClient.payable.aggregate({
      _sum: {
        balance: true
      },
      where: {
        status: "waiting_funds"
      }
    });

    const listBalances = {
      available_balance,
      pending_funds
    };

    return listBalances;
  }
}

export { ListBalanceService };
