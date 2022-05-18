import { Request, Response } from "express";
import { ListBalanceService } from "../services/listBalanceService";

class ListBalanceController {
  async handle(request: Request, response: Response) {
    const listBalanceService = new ListBalanceService();
    const balance = await listBalanceService.execute();

    return response.json({
      available: balance.available,
      pending_funds: balance.pending_funds
    });
  }
}

export { ListBalanceController };
