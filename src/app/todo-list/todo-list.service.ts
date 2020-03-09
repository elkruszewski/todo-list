import { TASK_MOCK } from "../tasks-mock";
import { of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor() {}

  getTasks() {
    return of(TASK_MOCK);
  }
}
