import {
  ITransactionRequest,
  ITransactionResponse
} from "../../src/domain/requestDto";
import { superAppRequest } from "../setup";

export async function createTransaction(body: ITransactionRequest) {
  const createTransactionResponse = await superAppRequest
    .post("/transactions")
    .send(body);
  const createTransactionResponseBody =
    createTransactionResponse.body as ITransactionResponse;
  return createTransactionResponseBody;
}
