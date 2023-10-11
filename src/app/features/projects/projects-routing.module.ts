import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from "./pages/projects/projects.component";
import { environment } from "@environments/environment";

const routes: Routes = [
  { path: "", component: ProjectsComponent, title: `${environment.projectTitle} - Projects` }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
