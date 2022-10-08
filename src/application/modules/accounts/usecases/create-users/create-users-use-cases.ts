import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { AppError } from "@shared/errors/AppError";
import { createUsersSchemaValidate } from "@application/modules/accounts/validations/account-validations";
import { ICreateUserDto } from "../../dtos/create-user-dto";
import { IUserRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUsersUseCases {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ name, email, password }: ICreateUserDto): Promise<void> {
    if (!(await createUsersSchemaValidate.isValid({ name, email, password }))) {
      throw new AppError("Validation fails", 422);
    }

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}
