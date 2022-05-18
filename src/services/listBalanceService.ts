import { PaymentStatus } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";

class ListBalanceService {
  async execute() {
    const balance = await prismaClient.payable.groupBy({
      by: ["status"],
      _sum: {
        balance: true
      }
    });

    const availableBalance = balance
      .find((balance) => balance.status === PaymentStatus.PAID)
      ?._sum.balance?.toFixed(2);
    const pendingBalance = balance
      .find((balance) => balance.status === PaymentStatus.WAITING_FUNDS)
      ?._sum.balance?.toFixed(2);

    const listBalances = {
      available: availableBalance,
      pending_funds: pendingBalance
    };

    return listBalances;
  }
}

export { ListBalanceService };
