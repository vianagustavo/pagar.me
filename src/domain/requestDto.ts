export interface ITransactionRequest {
  chargeAmount: number;
  description: string;
  paymentMethod: string;
  cardNumber: string;
  cardHolderName: string;
  validThrough: string;
  cvv: string;
}
