import { Component, OnInit } from '@angular/core';
import { AddTodo } from './todos/+store/todos.actions';
import { StoreFieldNames, Store } from './+store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todosStore = Store.select(StoreFieldNames.TODOS);

  ngOnInit() {
    this.todosStore.dispatch(AddTodo({name: 'test', active: false}));
    this.todosStore.dispatch(AddTodo({name: 'test 2 ', active: true}));
  }
}
