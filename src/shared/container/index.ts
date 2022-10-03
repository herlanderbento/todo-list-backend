import { container } from "tsyringe";
import { IUserRepository } from "@application/modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "@application/modules/accounts/repositories/UsersRepository";
import { TodoRepository } from "@application/modules/todo/repositories/TodoRepository";
import { ITodoRepository } from "@application/modules/todo/repositories/ITodoRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ITodoRepository>("TodoRepository", TodoRepository);
