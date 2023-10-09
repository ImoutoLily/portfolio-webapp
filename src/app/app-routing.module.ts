import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("@features/home/home.module")
      .then(m => m.HomeModule)
  },
  {
    path: "about",
    loadChildren: () => import("@features/about/about.module")
      .then(m => m.AboutModule)
  },
  {
    path: "projects",
    loadChildren: () => import("@features/projects/projects.module")
      .then(m => m.ProjectsModule)
  },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
