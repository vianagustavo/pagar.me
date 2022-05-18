import { Response, Router } from "express";
import { CreateTransactionController } from "./controllers/createTransactionController";
import { ListBalanceController } from "./controllers/listBalanceController";
import { ListTransactionsController } from "./controllers/listTransactionsController";

const router = Router();

const createTransactionController = new CreateTransactionController();
const listTransactionsController = new ListTransactionsController();
const listBalanceController = new ListBalanceController();

router.get("/", (_, response: Response) => {
  return response.json({
    ok: true
  });
});

router.post("/transactions", createTransactionController.handle);
router.get("/transactions", listTransactionsController.handle);
router.get("/payables", listBalanceController.handle);

export { router };
