import { superAppRequest } from "./setup";

describe("Create Transaction Controller", () => {
  it("Should be able to create a new transaction", async () => {
    const transactionRequest = {
      chargeAmount: "R$2500.90",
      description: "Monitor LG 144HZ 19.5'",
      paymentMethod: "credit_card",
      cardNumber: "1234567812345678",
      cardHolderName: "Lorinho",
      validThrough: "07/29",
      cvv: "077"
    };

    const response = await superAppRequest
      .post("/transactions")
      .send(transactionRequest);
    expect(response.status).toBe(200);
  });
});
