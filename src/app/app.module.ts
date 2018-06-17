import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';

@NgModule({
  imports: [
    BrowserModule,
    TodosModule,
  ],
  providers: [
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
