import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';

const COMPONENTS = [
  TodosComponent,
  TodosListComponent,
  CreateTodoComponent,
]

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class TodosModule { }
