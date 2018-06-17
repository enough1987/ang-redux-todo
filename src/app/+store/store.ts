
import { createStore } from 'redux';
import { todosReducer } from '../todos/+store/todos.reducers';

export enum StoreFieldNames {
  TODOS = 'todos',
  USERS = 'users',
}

export class Store {

  private static store = {
    [StoreFieldNames.TODOS]: createStore(todosReducer),
  };

  static select(fieldname: StoreFieldNames) {
    return Store.store[fieldname];
  }

}
