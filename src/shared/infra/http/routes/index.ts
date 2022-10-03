import { Router } from "express";
import { authenticationRoutes } from "./authentication.routes";
import { todoRoutes } from "./todo.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/login", authenticationRoutes);
router.use("/todo", todoRoutes);

export { router };
