import { Component, Input } from '@angular/core';
import { Repository } from "@shared/models/repository.model";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent {
  @Input() repository: Repository;
}
