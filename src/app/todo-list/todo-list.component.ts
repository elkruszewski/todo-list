import { Component, OnInit } from "@angular/core";
import { TASK_MOCK } from "src/app/tasks-mock";
import { MatDialog } from "@angular/material/dialog";
import { AddTaskModalComponent } from "./add-task-modal/add-task-modal.component";
import { formatDate } from "@angular/common";
import { Task } from "../models/task";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  today: any = new Date();
  tomorrow: any = new Date();
  todayTasks: Task[] = [];
  tomorrowTasks: Task[] = [];
  upcomingTasks: Task[] = [];

  constructor(public dialog: MatDialog) {
    this.tomorrow.setDate(this.today.getDate() + 1);
  }

  public tasks = ["New Tasks", "Today", "Upcoming"];
  public tasksContent;
  ngOnInit(): void {
    this.today = formatDate(new Date(), "yyyy/MM/dd", "en");
    this.tomorrow = formatDate(this.tomorrow, "yyyy/MM/dd", "en");
    this.tasksContent = TASK_MOCK.content;
    this.checkTodayTasks();
    this.checkTomorrowTasks();
    this.checkUpcomingTasks();
  }

  addTask() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskModalComponent, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed", result);
    });
  }

  checkTodayTasks() {
    this.todayTasks = this.tasksContent.filter(
      val => val.deadline === this.today
    );
  }

  checkTomorrowTasks() {
    this.tomorrowTasks = this.tasksContent.filter(
      val => val.deadline === this.tomorrow
    );
  }

  checkUpcomingTasks() {
    this.upcomingTasks = this.tasksContent
      .filter(val => val.deadline !== this.today)
      .filter(value => value.deadline !== this.tomorrow);
  }

  returnColor(topic) {
    if (topic === "Mobile") {
      return "accent";
    } else if (topic === "Sales") {
      return "primary";
    } else if (topic === "Programming") {
      return "warn";
    } else return "black";
  }
}
