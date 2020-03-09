import { TASK_MOCK } from "../tasks-mock";
import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { Task } from "../models/task";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  public newTasks: Task[] = [];
  constructor() {}

  getTasks() {
    return of(TASK_MOCK);
  }

  addTask(response) {
    this.newTasks.push(response);
  }

  getNewTasks() {
    return of(this.newTasks);
  }
}
