import { Router } from "express";
import { AuthenticateUserController } from "@application/modules/accounts/usecases/authenticate-user/authenticate-user-controller";

const authenticationRoutes = Router();
const authenticateUserController = new AuthenticateUserController();

authenticationRoutes.post("/", authenticateUserController.handle);

export { authenticationRoutes };
