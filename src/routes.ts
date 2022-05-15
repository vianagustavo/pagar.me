import { Response, Router } from "express";
import { CreateTransactionController } from "./controllers/createTransactionController";

const router = Router();

const createTransactionController = new CreateTransactionController();

router.get("/", (_, response: Response) => {
  return response.json({
    ok: true
  });
});

router.post("/transactions", createTransactionController.handle);

export { router };
