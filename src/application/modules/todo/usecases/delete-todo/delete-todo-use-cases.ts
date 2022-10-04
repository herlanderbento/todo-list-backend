import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { ITodoRepository } from "../../repositories/ITodoRepository";

@injectable()
export class DeleteTodoUseCases {
  constructor(
    @inject("TodoRepository")
    private todoRepository: ITodoRepository
  ) {}

  async execute(id: string): Promise<void> {
    const todo = await this.todoRepository.findById(id);

    if (!todo) {
      throw new AppError("Todo not found.", 404);
    }

    await this.todoRepository.delete(id);
    
  }
}
