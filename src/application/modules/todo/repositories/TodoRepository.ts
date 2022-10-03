import { Repository } from "typeorm";
import { connection } from "@shared/infra/typeorm/ormconfig";
import { ICreateTodoDto } from "../dtos/create-todo-dto";
import { Todo } from "../entities/Todo";
import { ITodoRepository } from "./ITodoRepository";

export class TodoRepository implements ITodoRepository {
  private repository: Repository<Todo>;

  constructor() {
    this.repository = connection.getRepository(Todo);
  }

  async create({ id, todo }: ICreateTodoDto): Promise<Todo> {
    const todoList = this.repository.create({ id, todo });

    return await this.repository.save(todoList);
  }

  async findAll(): Promise<Todo[]> {
    return await this.repository.find();
  }

  async findByTodo(todo: string): Promise<Todo> {
    return await this.repository.findOneBy({ todo });
  }

  async findById(id: string): Promise<Todo> {
    return await this.repository.findOneBy({ id });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

}
