import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  readonly skills = [
    "C", "Python", "FastAPI", "Java", "Spring Boot", "JavaScript / TypeScript", "Angular",
    "Express", "Node.js", "React", "C#", "ASP.NET", "Swift", "Kotlin", "Android Development",
    "PHP", "Laravel", "SQL", "GraphQL", "MongoDB", "Git", "Docker", "Agile development"
  ];
  readonly experiences = [
    "Full stack developer at FOD Economie",
    "Teacher assistant at CodeFever"
  ];
  readonly educations = [
    "Associate degree of Programming",
    "Bachelor of Applied Computer Science (ongoing)"
  ];
}
