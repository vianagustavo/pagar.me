import { mockITransactionRequest } from "../helpers/mock";
import { superAppRequest } from "../setup";

describe("Create Transaction Controller", () => {
  it("should be able to create a new transaction", async () => {
    const transactionRequest = mockITransactionRequest();

    const response = await superAppRequest
      .post("/transactions")
      .send(transactionRequest);
    expect(response.status).toBe(200);
  });
  it("should not be able to create a new transaction with missing informations", async () => {
    const transactionRequest = {
      description: "Monitor LG 144HZ 19.5'",
      paymentMethod: "CREDIT",
      cardNumber: "1234567812345678",
      cardHolderName: "Lorinho",
      validThrough: "07/29",
      cardCvv: "077"
    };
    const response = await superAppRequest
      .post("/transactions")
      .send(transactionRequest);
    expect(response.status).toBe(503);
  });
});
