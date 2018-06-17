import { TodosActions } from './todos.actions';
import { Todo } from './todos.dictionery';

export const todosReducer = (state = [], action: { type: string, payload: any}): Todo[] => {
  switch (action.type) {
    case TodosActions.ADD_TODO:
      return [
        ...state,
        action.payload,
      ];
    case TodosActions.DELETE_TODO:
      return [
          ...state.filter((todo, index) => index !== action.payload),
      ];
    default:
      return state;
  }
};
