import { TASK_MOCK } from "../tasks-mock";
import { of, Observable } from "rxjs";
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

  getTask(id: number): Task {
    return TASK_MOCK.find(x => x.id == id);
  }

  editTask(id) {}

  deleteTask(id) {
    const deletedTask = TASK_MOCK.find(x => x.id == id);
    const index = TASK_MOCK.indexOf(deletedTask);
    TASK_MOCK.splice(index, 1);
  }

  addTask(response) {
    this.newTasks.push(response);
  }

  getNewTasks() {
    return of(this.newTasks);
  }
}
