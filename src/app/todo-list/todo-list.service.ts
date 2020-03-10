import { TASK_MOCK } from "../tasks-mock";
import { of, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Task } from "../models/task";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  public newTasks: Task[] = [];
  constructor() {}

  getTasks() {
    const allTasks = [...TASK_MOCK, ...this.newTasks];
    return of(allTasks);
  }

  getTask(id: number): Task {
    return TASK_MOCK.find(x => x.id == id);
  }

  editTask(task: Task) {
    const editedTask = TASK_MOCK.find(x => x.id == task.id);
    const index = TASK_MOCK.indexOf(editedTask);
    TASK_MOCK[index] = task;
  }

  deleteTask(id) {
    const deletedTask = TASK_MOCK.find(x => x.id == id);
    console.log("deletedTask", deletedTask);

    const index = TASK_MOCK.indexOf(deletedTask);
    console.log("index", index);
    TASK_MOCK.splice(index, 1);
  }

  addTask(response) {
    this.newTasks.push(response);
  }

  getNewTasks() {
    return of(this.newTasks);
  }
}
