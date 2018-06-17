import { Component, OnInit } from '@angular/core';
import { Store } from '../../../+store/store';
import { AddTodo } from '../../+store/todos.actions';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todosStore = Store.select();

  constructor() { }

  ngOnInit() {
  }

  addTodo(name: string, active: boolean) {
    this.todosStore.dispatch(AddTodo({ name, active }));
  }
}
