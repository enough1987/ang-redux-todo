
import { combineReducers, createStore } from 'redux';
import { todosReducer } from '../todos/+store/todos.reducers';

export class Store {

  private static store = createStore(
    combineReducers({
      todos: todosReducer,
    })
  );

  static select() {
    return Store.store;
  }

}
