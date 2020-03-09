import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Task } from "src/app/models/task";
import { formatDate } from "@angular/common";
@Component({
  selector: "app-add-task-modal",
  templateUrl: "./add-task-modal.component.html",
  styleUrls: ["./add-task-modal.component.scss"]
})
export class AddTaskModalComponent implements OnInit {
  public form: FormGroup;
  public taskTopics = ["Sales", "Programming", "HR", "Mobile"];

  constructor(
    public dialogRef: MatDialogRef<AddTaskModalComponent>,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [null],
      deadline: [null],
      taskTopic: [null]
    });
  }

  send() {
    const taskObject: Task = {
      id: Date.now(),
      name: this.form.get("name").value,
      deadline: formatDate(this.form.get("deadline").value, "yyyy/MM/dd", "en"),
      taskTopic: this.form.get("taskTopic").value
    };

    this.dialogRef.close(taskObject);
  }
}
