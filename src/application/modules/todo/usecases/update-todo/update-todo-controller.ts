import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTodoUseCases } from "./update-todo-use-case";

export class UpdateTodoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { todo } = request.body;

    const updateTodoUseCases = container.resolve(UpdateTodoUseCases);

    const infoTodo = await updateTodoUseCases.execute({ id, todo });

    return response.json(infoTodo);
  }
}
