import { PaymentMethod, PaymentStatus } from "@prisma/client";
import { InvalidArgument } from "../app";
// import { InvalidArgument } from "../app";
import { prismaClient } from "../database/prismaClient";
import { ITransactionRequest } from "../domain/requestDto";

interface IPaymentVariables {
  paymentMethod: PaymentMethod;
  chargeAmount: number;
}

interface IPaymentVariablesReturn {
  cashAmount: number;
  paymentDate: Date;
  paymentStatus: PaymentStatus;
}

function getPaymentVariables({
  paymentMethod,
  chargeAmount
}: IPaymentVariables) {
  const DEBIT_FEE = 0.97;
  const paymentVariables: IPaymentVariablesReturn = {
    cashAmount: chargeAmount * DEBIT_FEE,
    paymentDate: new Date(),
    paymentStatus: PaymentStatus.PAID
  };
  if (paymentMethod === PaymentMethod.CREDIT) {
    const CREDIT_FEE = 0.95;
    const newPaymentDate = paymentVariables.paymentDate.setDate(
      paymentVariables.paymentDate.getDate() + 30
    );
    paymentVariables.cashAmount = chargeAmount * CREDIT_FEE;
    paymentVariables.paymentDate = new Date(newPaymentDate);
    paymentVariables.paymentStatus = PaymentStatus.WAITING_FUNDS;
  }
  return paymentVariables;
}

class CreateTransactionService {
  async execute({
    chargeAmount,
    description,
    paymentMethod,
    cardNumber,
    cardHolderName,
    validThrough,
    cardCvv
  }: ITransactionRequest) {
    if (
      !chargeAmount ||
      !description ||
      !paymentMethod ||
      !cardNumber ||
      !cardHolderName ||
      !validThrough ||
      !cardCvv
    ) {
      throw new InvalidArgument("All fields must be answered correctly");
    }

    const cardLastDigits = cardNumber.slice(cardNumber.length - 4);
    const paymentVariablesRequest = getPaymentVariables({
      paymentMethod,
      chargeAmount
    });

    const [transaction] = await prismaClient.$transaction([
      prismaClient.transaction.create({
        data: {
          charge_amount: chargeAmount,
          description,
          payment_method: paymentMethod,
          card_number: cardLastDigits,
          card_holder_name: cardHolderName,
          valid_thru: validThrough,
          cvv: cardCvv
        }
      }),
      prismaClient.payable.create({
        data: {
          status: paymentVariablesRequest.paymentStatus,
          payment_date: paymentVariablesRequest.paymentDate,
          balance: paymentVariablesRequest.cashAmount
        }
      })
    ]);
    const { cvv, ...transactionResponse } = transaction;

    return transactionResponse;
  }
}

export { CreateTransactionService };
