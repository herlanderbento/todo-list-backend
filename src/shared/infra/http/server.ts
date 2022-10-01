import express from "express";
import { AppDataSource } from "../typeorm/data-source";

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

const PORT = process.env.NODE_ENV_PORT || 3000;

app.listen(PORT, () => console.log("Server is running!"));
