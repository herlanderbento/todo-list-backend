import { Repository } from "typeorm";
import { connection } from "@shared/infra/typeorm/ormconfig";
import { ICreateUserDto } from "../dtos/create-user-dto";
import { Users } from "../entities/User";
import { IUserRepository } from "./IUsersRepository";

export class UsersRepository implements IUserRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = connection.getRepository(Users);
  }

  async create({ name, email, password }: ICreateUserDto): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<Users> {
    return await this.repository.findOneBy({ email });
  }

  async findById(id: string): Promise<Users> {
    return await this.repository.findOneBy({ id });
  }
}
