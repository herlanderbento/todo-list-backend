import { Router } from "express";
import { CreateTodoController } from "@application/modules/todo/usecases/create-todo/create-todo-controller";
import { TodoListController } from "@application/modules/todo/usecases/todo-list/todo-list-controller";
import { UpdateTodoController } from "@application/modules/todo/usecases/update-todo/update-todo-controller";
import { DeleteTodoController } from "@application/modules/todo/usecases/delete-todo/delete-todo-controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const todoRoutes = Router();

const createTodoController = new CreateTodoController();
const todoListController = new TodoListController();
const updateTodoController = new UpdateTodoController();
const deleteTodoController = new DeleteTodoController();

todoRoutes.use(ensureAuthenticated)

todoRoutes.get("/",  todoListController.handle);
todoRoutes.post("/", createTodoController.handle);
todoRoutes.put("/:id", updateTodoController.handle);
todoRoutes.delete("/:id", deleteTodoController.handle);

export { todoRoutes };
