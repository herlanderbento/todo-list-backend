import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTodoUseCases } from "./delete-todo-use-cases";

export class DeleteTodoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTodoUseCases = container.resolve(DeleteTodoUseCases);

    await deleteTodoUseCases.execute(id);

    return response.send({ message: "Delete todo successfully." });
  }
}
