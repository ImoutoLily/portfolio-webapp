import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./pages/about/about.component";
import { environment } from "@environments/environment";

const routes: Routes = [
  { path: "", component: AboutComponent, title: `${environment.projectTitle} - About` },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
