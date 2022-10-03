import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { ICreateTodoDto } from "../../dtos/create-todo-dto";
import { Todo } from "../../entities/Todo";
import { ITodoRepository } from "../../repositories/ITodoRepository";
import { createOrUpdateTodoSchemaValidate } from "../../validations/todo-validations";

@injectable()
export class UpdateTodoUseCases {
  constructor(
    @inject("TodoRepository")
    private todoRepository: ITodoRepository
  ) {}

  async execute({ id, todo }: ICreateTodoDto): Promise<Todo> {
    if (!(await createOrUpdateTodoSchemaValidate.isValid({ todo }))) {
      throw new AppError("Validation fails");
    }

    const todoList = await this.todoRepository.findById(id);

    if (!todoList) {
      throw new AppError("Todo not found!", 404);
    }

    if (todo != todoList.todo) {
      const todoAlreadyExists = await this.todoRepository.findByTodo(todo);

      if (todoAlreadyExists) {
        throw new AppError("Todo already exists.", 404);
      }
    }

    Object.assign(todoList, {
      todo,
      update_at: new Date(),
    });

    await this.todoRepository.create(todoList);

    return todoList;
  }
}
