import { ICreateTodoDto } from "../dtos/create-todo-dto";
import { Todo } from "../entities/Todo";

export interface ITodoRepository {
  create(data: ICreateTodoDto): Promise<Todo>;
  findAll(): Promise<Todo[]>;
  findByTodo(todo: string): Promise<Todo>;
  findById(id: string): Promise<Todo>;
  delete(id: string): Promise<void>;
}
