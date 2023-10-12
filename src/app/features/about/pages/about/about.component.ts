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
    "PHP", "Laravel", "SQL", "GraphQL", "MongoDB", "Git", "Docker", "Agile development", "TDD"
  ];
  readonly experiences = [
    "Full stack developer at FOD Economie",
    "Teaching assistant at CodeFever"
  ];
  readonly educations = [
    "Associate of Computer Programming",
    "Bachelor of Applied Computer Science"
  ];

  readonly languages = [
    "English", "Dutch"
  ]

  readonly birthDate = new Date(2002, 4, 25);

  readonly age: number;

  constructor() {
    const today = new Date();

    this.age = today.getFullYear() - this.birthDate.getFullYear();

    if (today.getMonth() < this.birthDate.getMonth()
      || (today.getMonth() == this.birthDate.getMonth() && today.getDate() < this.birthDate.getDate())) {
      this.age--;
    }
  }
}
