import { inject, injectable } from "tsyringe";
import { ITodoRepository } from "../../repositories/ITodoRepository";
import { Todo } from "../../entities/Todo";

@injectable()
export class TodoListUseCases {
  constructor(
    @inject("TodoRepository")
    private todoRepository: ITodoRepository
  ) {}

  async execute(): Promise<Todo[]> {
    return await this.todoRepository.findAll();
  }
}
