import { TASK_MOCK } from "../tasks-mock";
import { of, Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Task } from "../models/task";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  public newTasks: Task[] = [];
  public allTasks = TASK_MOCK;
  public changeData = new Subject();
  constructor() {}

  getTasks() {
    this.allTasks = [...this.allTasks, ...this.newTasks];

    return of(this.allTasks);
  }

  getTask(id: number): Task {
    return TASK_MOCK.find(x => x.id == id);
  }

  editTask(task: Task) {
    const editedTask = TASK_MOCK.find(x => x.id == task.id);
    const index = TASK_MOCK.indexOf(editedTask);

    this.allTasks[index] = task;
  }

  deleteTask(id) {
    const deletedTask = this.allTasks.find(x => x.id == id);
    const index = this.allTasks.indexOf(deletedTask);
    const newTasksIndex = this.newTasks.indexOf(deletedTask);
    this.allTasks.splice(index, 1);
    this.newTasks.splice(newTasksIndex, 1);
  }

  addTask(response) {
    this.newTasks.push(response);
  }

  getNewTasks() {
    return of(this.newTasks);
  }
}
