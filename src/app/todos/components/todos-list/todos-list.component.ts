import { Component, OnInit } from '@angular/core';
import { Store } from '../../../+store/store';
import { Todo } from '../../+store/todos.dictionery';
import { DeleteTodo } from '../../+store/todos.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todosStore = Store.select();
  todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = this.todosStore.getState().todos;
    this.todosStore.subscribe(() => {
      this.todos = this.todosStore.getState().todos;
    });
  }

  deleteTodo(index: number) {
    this.todosStore.dispatch(DeleteTodo(index));
  }

}
