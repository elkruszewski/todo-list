import { Component, OnInit } from "@angular/core";
import { TASK_MOCK } from "src/app/tasks-mock";
import { MatExpansionModule } from "@angular/material/expansion";
@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  constructor() {}
  panelOpenState = false;

  public tasks = ["New Tasks", "Today", "Upcoming"];
  public tasksContent;
  ngOnInit(): void {
    this.tasksContent = TASK_MOCK.content;
  }
}
