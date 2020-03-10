import { Component, OnInit } from "@angular/core";
import { TASK_MOCK } from "src/app/tasks-mock";
import { MatDialog } from "@angular/material/dialog";
import { AddTaskModalComponent } from "./add-task-modal/add-task-modal.component";
import { formatDate } from "@angular/common";
import { Task } from "../models/task";
import { TaskService } from "./todo-list.service";
import { EditTaskModalComponent } from "./edit-task-modal/edit-task-modal.component";
import { CompileShallowModuleMetadata } from "@angular/compiler";
import { ConfirmationModalComponent } from "./confirmation-modal/confirmation-modal.component";

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
  newTasks: Task[] = [];
  public tasks = ["New Tasks", "Today", "Upcoming"];
  public tasksContent: Task[] = [];

  constructor(public dialog: MatDialog, private taskService: TaskService) {
    this.tomorrow.setDate(this.today.getDate() + 1);
  }

  ngOnInit(): void {
    this.getData();
  }

  addTask() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskModalComponent, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.taskService.getNewTasks().subscribe(val => {
        this.newTasks = val;
        this.getData();
      });
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

  edit(id) {
    const dialogRef = this.dialog.open(EditTaskModalComponent, {
      width: "250px",
      data: { ...this.taskService.getTask(id) }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("result", result);
      this.taskService.editTask(result);
      this.getData();
    });
  }

  delete(id) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: "250px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.deleteTask(id);
        this.getData();
      }
    });
  }

  getData() {
    this.taskService.getTasks().subscribe((value: Task[]) => {
      this.tasksContent = value;
    });

    this.today = formatDate(new Date(), "yyyy/MM/dd", "en");
    this.tomorrow = formatDate(this.tomorrow, "yyyy/MM/dd", "en");

    this.checkTodayTasks();
    this.checkTomorrowTasks();
    this.checkUpcomingTasks();
  }
}
