import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTodoUseCases } from "./create-todo-use-cases";

export class CreateTodoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { todo } = request.body;

    const createTodoUseCase = container.resolve(CreateTodoUseCases);

    const todoList = await createTodoUseCase.execute({ todo });

    return response.status(201).json(todoList);
  }
}
