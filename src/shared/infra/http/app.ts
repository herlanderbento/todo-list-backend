import express, { Request, Response, NextFunction, response } from "express";
import "reflect-metadata";
import "express-async-errors";
import "@shared/container";

import { router } from "./routes";
import { connection } from "../typeorm/ormconfig";
import { AppError } from "@shared/errors/AppError";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "@docs/swagger.json";

const app = express();

app.use(express.json());

connection
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

app.use("/api-documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/swagger", (request: Request, response: Response) => {
  return response.sendFile(process.cwd() + "/src/documentation/swagger.json");
});

app.get("/docs", (request: Request, response: Response) => {
  return response.sendFile(process.cwd() + "/src/documentation/index.html");
});

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
