import { Request, Response } from "express";
import { ListBalanceService } from "../services/listBalanceService";

class ListBalanceController {
  async handle(request: Request, response: Response) {
    const listBalanceService = new ListBalanceService();
    const balance = await listBalanceService.execute();

    return response.json({
      Available: balance.available_balance._sum.balance,
      Pending_funds: balance.pending_funds._sum.balance
    });
  }
}

export { ListBalanceController };
