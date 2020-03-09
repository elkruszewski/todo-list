import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-list-details",
  templateUrl: "./todo-list-details.component.html",
  styleUrls: ["./todo-list-details.component.scss"]
})
export class TodoListDetailsComponent implements OnInit {
  constructor() {}

  public tasks: any;
  ngOnInit(): void {}
}
