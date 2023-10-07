import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  readonly skills = [
    "C", "Python", "Java", "JavaScript / TypeScript", "C#", "Swift", "Kotlin", "PHP",
    "SQL", "ASP.NET", "Spring Boot", "Laravel", "Angular", "React", "GraphQL", "FastAPI",
    "Express", "MongoDB", "Node.js", "Git", "Docker"
  ];
  readonly experiences = [
    "Full stack development at FOD Economie",
    "Teacher assistant at CodeFever"
  ];
  readonly educations = [
    "Associate degree of Programming",
    "Bachelor of Applied Computer Science (ongoing)"
  ];
}
