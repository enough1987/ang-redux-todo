
export class Todo {
  name: string;
  active: boolean;
}

export interface State {
  todos: Todo[];
}
export const initialState: State = {
  todos: []
};
