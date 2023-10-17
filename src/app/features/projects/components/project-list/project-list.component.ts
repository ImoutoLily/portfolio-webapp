import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Repository } from "@shared/models/repository.model";
import { ProjectsService } from "@services/projects.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  private readonly columnBreakpoints = [ 775, 1150 ];

  repositories$: Observable<Repository[]>;
  breakpoint = 1;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.repositories$ = this.projectsService.getRepositories();
    this.setBreakpoint(window.innerWidth);
  }

  onResize(event: any) {
    this.setBreakpoint(event.target.innerWidth);
  }

  private setBreakpoint(windowSize: number) {
    for (let i = 0; i < this.columnBreakpoints.length; i++){
      const columnBreakpoint = this.columnBreakpoints[i];

      if (windowSize < columnBreakpoint) {
        this.breakpoint = i + 1;
        return;
      }
    }

    this.breakpoint = this.columnBreakpoints.length + 1;
  }
}
