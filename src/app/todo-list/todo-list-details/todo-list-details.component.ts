import { Component, OnInit } from "@angular/core";
import { TASK_MOCK } from "src/app/tasks-mock";

@Component({
  selector: "app-todo-list-details",
  templateUrl: "./todo-list-details.component.html",
  styleUrls: ["./todo-list-details.component.scss"]
})
export class TodoListDetailsComponent implements OnInit {
  constructor() {}

  public tasks: any;
  ngOnInit(): void {
    this.tasks = TASK_MOCK;
  }
}
