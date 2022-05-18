import { Request, Response } from "express";
import {
  ITransactionRequest,
  ITransactionResponse
} from "../domain/requestDto";
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
      cardCvv
    }: ITransactionRequest = request.body;

    const createTransactionService = new CreateTransactionService();
    const transaction: ITransactionResponse =
      await createTransactionService.execute({
        chargeAmount,
        description,
        paymentMethod,
        cardNumber,
        cardHolderName,
        validThrough,
        cardCvv
      });

    return response.json(transaction);
  }
}

export { CreateTransactionController };
