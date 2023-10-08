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
  repositories$: Observable<Repository[]>;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.repositories$ = this.projectsService.getRepositories();
  }
}
