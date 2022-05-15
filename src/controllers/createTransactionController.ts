import { Request, Response } from "express";
import { ITransactionRequest } from "../domain/requestDto";
import { CreateTransactionService } from "../services/createTransactionService";

class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const {
      chargeAmount,
      description,
      paymentMethod,
      cardNumber,
      cardHolderName,
      validThrough,
      cvv
    }: ITransactionRequest = request.body;

    const createTransactionService = new CreateTransactionService();
    const transaction = await createTransactionService.execute({
      chargeAmount,
      description,
      paymentMethod,
      cardNumber,
      cardHolderName,
      validThrough,
      cvv
    });

    return response.json(transaction);
  }
}

export { CreateTransactionController };
