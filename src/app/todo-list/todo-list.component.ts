import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddTaskModalComponent } from "./add-task-modal/add-task-modal.component";
import { formatDate } from "@angular/common";
import { Task } from "../models/task";
import { TaskService } from "./todo-list.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit, OnDestroy {
  today: any = new Date();
  tomorrow: any = new Date();
  todayTasks: Task[] = [];
  tomorrowTasks: Task[] = [];
  upcomingTasks: Task[] = [];
  newTasks: Task[] = [];
  private subscription = new Subscription();
  public tasks = ["New Tasks", "Today", "Upcoming"];
  public tasksContent: Task[] = [];

  constructor(public dialog: MatDialog, private taskService: TaskService) {
    this.tomorrow.setDate(this.today.getDate() + 1);
  }

  ngOnInit(): void {
    this.getData();
    this.subscription.add(
      this.taskService.changeData.subscribe(val => {
        console.log("subject");
        this.getData();
      })
    );
  }

  addTask() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskModalComponent, {
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.taskService.getNewTasks().subscribe(val => {
        this.newTasks = val;
        this.getData();
      });
    });
  }

  checkTodayTasks() {
    const todayTasks = this.tasksContent.filter(
      val => val.deadline === this.today
    );
    const outStandingTasks = this.tasksContent.filter(
      val => val.deadline < this.today
    );

    this.todayTasks = [...outStandingTasks, ...todayTasks];
  }

  checkTomorrowTasks() {
    this.tomorrowTasks = this.tasksContent.filter(
      val => val.deadline === this.tomorrow
    );
  }

  checkUpcomingTasks() {
    console.log(this.tasksContent);
    const todayTomorrowTasks = [...this.todayTasks, ...this.tomorrowTasks];
    this.upcomingTasks = this.tasksContent.filter(
      value => !todayTomorrowTasks.includes(value)
    );
  }

  getData() {
    this.taskService.getTasks().subscribe(
      (value: Task[]) => {
        this.tasksContent = value;
      },
      () => {},
      () => this.sortDatabyDate()
    );

    this.today = formatDate(new Date(), "yyyy/MM/dd", "en");
    this.tomorrow = formatDate(this.tomorrow, "yyyy/MM/dd", "en");

    this.checkTodayTasks();
    this.checkTomorrowTasks();
    this.checkUpcomingTasks();
  }

  sortDatabyDate() {
    const prepareSortData: any = this.tasksContent.map(value => ({
      ...value,
      deadline: new Date(value.deadline)
    }));
    const sortedActivities = prepareSortData.sort(
      (a, b) => a.deadline - b.deadline
    );

    this.tasksContent = sortedActivities.map(value => ({
      ...value,
      deadline: formatDate(value.deadline, "yyyy/MM/dd", "en")
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
