import { TodosActions } from './todos.actions';
import { initialState, State } from './todos.dictionery';

export const todosReducer = (state = initialState, action: { type: string, payload: any}): State => {
  switch (action.type) {
    case TodosActions.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload,
        ]
      };
    case TodosActions.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo, index) => index !== action.payload),
        ]
      };
    default:
      return state;
  }
}
