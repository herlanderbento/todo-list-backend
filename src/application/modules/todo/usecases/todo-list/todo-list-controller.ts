import { Request, Response } from "express";
import { container } from "tsyringe";
import { TodoListUseCases } from "./todo-list-use-cases";

export class TodoListController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTodoUseCases = container.resolve(TodoListUseCases);

    const allTodo = await listTodoUseCases.execute();

    return response.json(allTodo);
  }
}
