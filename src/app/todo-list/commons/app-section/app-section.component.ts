import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { EditTaskModalComponent } from "../../edit-task-modal/edit-task-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { TaskService } from "../../todo-list.service";
import { ConfirmationModalComponent } from "../../confirmation-modal/confirmation-modal.component";

@Component({
  selector: "app-section",
  templateUrl: "./app-section.component.html",
  styleUrls: ["./app-section.component.scss"]
})
export class AppSectionComponent implements OnInit {
  @Input() expanded = true;
  @Input() title;
  @Input() tasks;

  constructor(public dialog: MatDialog, private taskService: TaskService) {}

  ngOnInit(): void {}

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
      width: "500px",
      data: { ...this.taskService.getTask(id) }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("result", result);
      this.taskService.editTask(result);
      this.taskService.changeData.next(true);
    });
  }

  delete(id) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: "350px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.deleteTask(id);
        this.taskService.changeData.next(true);
      }
    });
  }
}
