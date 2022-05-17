import { InvalidArgument } from "../app";
import { prismaClient } from "../database/prismaClient";
import { ITransactionRequest } from "../domain/requestDto";

class CreateTransactionService {
  async execute({
    chargeAmount,
    description,
    paymentMethod,
    cardNumber,
    cardHolderName,
    validThrough,
    cvv
  }: ITransactionRequest) {
    if (
      !chargeAmount ||
      !description ||
      !paymentMethod ||
      !cardNumber ||
      !cardHolderName ||
      !validThrough ||
      !cvv
    ) {
      throw new InvalidArgument("All fields must be answered correctly");
    }
    if (!(paymentMethod === "debit_card" || paymentMethod === "credit_card")) {
      throw new InvalidArgument("Incorrect payment method");
    }

    const cardLastDigits = cardNumber.slice(cardNumber.length - 4);
    if (paymentMethod === "debit_card") {
      const cashAmount = chargeAmount * 0.97;
      const [transaction] = await prismaClient.$transaction([
        prismaClient.transaction.create({
          data: {
            charge_amount: chargeAmount,
            description,
            payment_method: paymentMethod,
            card_number: cardLastDigits,
            card_holder_name: cardHolderName,
            valid_thru: validThrough,
            cvv
          }
        }),
        prismaClient.payable.create({
          data: {
            status: "paid",
            payment_date: new Date(),
            balance: cashAmount
          }
        })
      ]);

      return transaction;
    }
    if (paymentMethod === "credit_card") {
      const cashAmount = chargeAmount * 0.95;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      const [transaction] = await prismaClient.$transaction([
        prismaClient.transaction.create({
          data: {
            charge_amount: chargeAmount,
            description,
            payment_method: paymentMethod,
            card_number: cardLastDigits,
            card_holder_name: cardHolderName,
            valid_thru: validThrough,
            cvv
          }
        }),
        prismaClient.payable.create({
          data: {
            status: "waiting_funds",
            payment_date: date,
            balance: cashAmount
          }
        })
      ]);

      return transaction;
    }
  }
}

export { CreateTransactionService };
