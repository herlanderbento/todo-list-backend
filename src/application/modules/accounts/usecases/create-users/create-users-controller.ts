import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUsersUseCases } from "./create-users-use-cases";

export class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserUseCase = container.resolve(CreateUsersUseCases);

    await createUserUseCase.execute({ name, email, password });

    return response.status(201).send();
  }
}
