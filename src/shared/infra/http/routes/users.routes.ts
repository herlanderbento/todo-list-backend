import { CreateUsersController } from "@application/modules/accounts/usecases/create-users/create-users-controller";
import { Router } from "express";

const usersRoutes = Router();

const createUsersController = new CreateUsersController();

usersRoutes.post("/", createUsersController.handle);

export { usersRoutes };
