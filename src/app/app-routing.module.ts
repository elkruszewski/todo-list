import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "todo-list",
    loadChildren: () =>
      import("./todo-list/todo-list.module").then(mod => mod.TodoListModule)
  },

  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];

//   {
//     path: "todo-list",
//     loadChildren: "./components/todo-list/todo-list.module#TodoListModule"
//   },
//   {
//     path: "todo-detail",
//     loadChildren: "./components/todo-detail/todo-detail.module#TodoDetailModule"
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
