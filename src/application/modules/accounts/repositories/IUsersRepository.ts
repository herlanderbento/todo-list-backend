import { ICreateUserDto } from "../dtos/create-user-dto";
import { Users } from "../entities/User";

export interface IUserRepository {
  create(data: ICreateUserDto): Promise<void>;
  findByEmail(email: string): Promise<Users>;
  findById(id: string): Promise<Users>
}
