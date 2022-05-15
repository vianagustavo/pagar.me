export interface ITransactionRequest {
  chargeAmount: string;
  description: string;
  paymentMethod: string;
  cardNumber: string;
  cardHolderName: string;
  validThrough: string;
  cvv: string;
}
