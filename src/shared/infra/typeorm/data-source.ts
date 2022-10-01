import { DataSource } from "typeorm";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "todo_list",
  synchronize: true,
  // logging: true,
  // entities: [Post, Category],
//   subscribers: [],
  migrations: ["/src/shared/infra/typeorm/migrations/*.ts"],
});
