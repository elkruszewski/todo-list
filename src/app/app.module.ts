import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoListDetailsComponent } from "./todo-list/todo-list-details/todo-list-details.component";
import { TodoListModule } from "./todo-list/todo-list.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoListDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoListModule,
    FlexLayoutModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
