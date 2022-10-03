import { DataSource } from "typeorm";
import { Todo } from "@application/modules/todo/entities/Todo";
import { Users } from "../../../application/modules/accounts/entities/User";

export const connection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "todo_list",
  synchronize: true,
  migrationsRun: false,
  entities: [Users, Todo],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
});
