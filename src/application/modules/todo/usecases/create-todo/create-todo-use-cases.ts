import { inject, injectable } from "tsyringe";
import { ICreateTodoDto } from "../../dtos/create-todo-dto";
import { Todo } from "../../entities/Todo";
import { ITodoRepository } from "../../repositories/ITodoRepository";
import { AppError } from "@shared/errors/AppError";
import { createOrUpdateTodoSchemaValidate } from "../../validations/todo-validations";

@injectable()
export class CreateTodoUseCases {
  constructor(
    @inject("TodoRepository")
    private todoRepository: ITodoRepository
  ) {}

  async execute({ todo }: ICreateTodoDto): Promise<Todo> {
    if (!(await createOrUpdateTodoSchemaValidate.isValid({ todo }))) {
      throw new AppError("Validation fails");
    }

    const create = await this.todoRepository.create({
      todo,
    });

    return create;
  }
}
