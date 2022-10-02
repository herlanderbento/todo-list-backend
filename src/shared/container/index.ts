import { container } from "tsyringe";
import { IUserRepository } from "@application/modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "@application/modules/accounts/repositories/UsersRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);
