import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCases } from "./authenticate-user-use-cases";

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCases);

    const authenticateInfo = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return response.json(authenticateInfo);
  }
}
