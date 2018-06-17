import { Todo } from './todos.dictionery';

export class TodosActions {
  static readonly ADD_TODO = 'ADD_TODO';
  static readonly DELETE_TODO = 'DELETE_TODO';
}

export const AddTodo = (payload: Todo): { type: string, payload: Todo } => {
  return {
    type: TodosActions.ADD_TODO,
    payload
  };
}

export const DeleteTodo = (payload: number): { type: string, payload: number } => {
  return {
    type: TodosActions.DELETE_TODO,
    payload
  };
}
