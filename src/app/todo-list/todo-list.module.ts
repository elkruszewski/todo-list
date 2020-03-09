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
import { MatTreeModule } from "@angular/material/tree";
import { MatButtonModule } from "@angular/material/button";
import { AddTaskModalComponent } from "./add-task-modal/add-task-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [AddTaskModalComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    TodoListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    AddTaskModalComponent,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [AddTaskModalComponent]
})
export class TodoListModule {}
