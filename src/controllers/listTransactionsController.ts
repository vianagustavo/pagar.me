import { Request, Response, response } from "express";
import { ListTransactionsService } from "../services/listTransactionsService";

class ListTransactionsController {
  async handle(request: Request, response: Response) {
    const listTransactionsService = new ListTransactionsService();
    const transactions = await listTransactionsService.execute();

    return response.json(transactions);
  }
}

export { ListTransactionsController };
