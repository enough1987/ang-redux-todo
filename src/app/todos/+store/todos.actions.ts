import { Todo, TODO_FEATURE_NAME } from './todos.dictionery';

export class TodosActions {
  static readonly ADD_TODO = TODO_FEATURE_NAME + ' ADD_TODO';
  static readonly DELETE_TODO = TODO_FEATURE_NAME + ' DELETE_TODO';
}

export const AddTodo = (payload: Todo): { type: string, payload: Todo } => {
  return {
    type: TodosActions.ADD_TODO,
    payload
  };
};

export const DeleteTodo = (payload: number): { type: string, payload: number } => {
  return {
    type: TodosActions.DELETE_TODO,
    payload
  };
};
