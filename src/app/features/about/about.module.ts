import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatChipsModule,
    MatButtonModule
  ]
})
export class AboutModule { }
