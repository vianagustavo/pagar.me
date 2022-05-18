import { createTransaction } from "../helpers/helper";
import { mockITransactionRequest } from "../helpers/mock";
import { superAppRequest } from "../setup";

describe("Create Transaction Controller", () => {
  it("should be able to list all transactions", async () => {
    const createTransactionRequest = mockITransactionRequest();
    createTransaction(createTransactionRequest);

    const response = await superAppRequest
      .get("/transactions")
      .send(createTransactionRequest);
    expect(response.status).toBe(200);
  });
});
