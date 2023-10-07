import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeRoutingModule } from "./features/home/home-routing.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => HomeRoutingModule
  },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
