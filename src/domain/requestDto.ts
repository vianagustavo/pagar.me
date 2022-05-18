import { PaymentMethod } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";

export interface ITransactionRequest {
  chargeAmount: number;
  description: string;
  paymentMethod: PaymentMethod;
  cardNumber: string;
  cardHolderName: string;
  validThrough: string;
  cardCvv: string;
}

export interface ITransactionResponse {
  id: string;
  charge_amount: Decimal;
  description: string;
  payment_method: PaymentMethod;
  card_number: string;
  card_holder_name: string;
  valid_thru: string;
  created_at: Date;
}
