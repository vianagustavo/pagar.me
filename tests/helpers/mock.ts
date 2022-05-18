import { ITransactionRequest } from "../../src/domain/requestDto";

export function mockITransactionRequest() {
  const transactionData: ITransactionRequest = {
    chargeAmount: 2500.9,
    description: "Monitor LG 144HZ 19.5'",
    paymentMethod: "CREDIT",
    cardNumber: "1234567812345678",
    cardHolderName: "Lorinho",
    validThrough: "07/29",
    cardCvv: "077"
  };
  return transactionData;
}
