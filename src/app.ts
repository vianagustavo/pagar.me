import express from "express";
import "reflect-metadata";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import { router } from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

export class NotFound extends Error {}
// export class InvalidArgument extends Error {}
export class InternalServerError extends Error {}
export class InvalidArgument extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, InvalidArgument.prototype);
  }
}

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use(errorHandler);

export default app;
