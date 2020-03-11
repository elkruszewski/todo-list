import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Task } from "src/app/models/task";
import { formatDate } from "@angular/common";
import { TaskService } from "../todo-list.service";
@Component({
  selector: "app-edit-task-modal",
  templateUrl: "./edit-task-modal.component.html",
  styleUrls: ["./edit-task-modal.component.scss"]
})
export class EditTaskModalComponent implements OnInit {
  public form: FormGroup;
  public taskTopics = ["Sales", "Programming", "HR", "Mobile"];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditTaskModalComponent>,
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {
    this.createForm();
  }

  public editingTask;
  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      id: [this.data.id],
      name: [this.data.name],
      deadline: [new Date(this.data.deadline)],
      taskTopic: [this.data.taskTopic]
    });
  }

  edit() {
    const taskObject: Task = {
      id: this.data.id,
      name: this.form.get("name").value,
      deadline: formatDate(this.form.get("deadline").value, "yyyy/MM/dd", "en"),
      taskTopic: this.form.get("taskTopic").value
    };

    this.dialogRef.close(taskObject);
  }
}
