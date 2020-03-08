import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoListRoutingModule } from "./todo-list-routing.module";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

console.log("zaladowano modul");
@NgModule({
  declarations: [],
  imports: [CommonModule, TodoListRoutingModule],
  exports: [
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ]
})
export class TodoListModule {}
