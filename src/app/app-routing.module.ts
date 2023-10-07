import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeRoutingModule } from "./features/home/home-routing.module";
import { AboutRoutingModule } from "./features/about/about-routing.module";
import { ProjectsRoutingModule } from "./features/projects/projects-routing.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => HomeRoutingModule
  },
  {
    path: "about",
    loadChildren: () => AboutRoutingModule
  },
  {
    path: "projects",
    loadChildren: () => ProjectsRoutingModule
  },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }