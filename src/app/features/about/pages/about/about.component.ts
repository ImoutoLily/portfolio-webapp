import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  readonly skills = [
    "Python", "FastAPI", "Java", "Spring Boot", "JavaScript/TypeScript", "Angular", "PrimeNG",
    "Express", "Node.js", "React", "C#", "ASP.NET", "Kotlin", "C", "HTML/CSS", "Bootstrap", "Material UI", "SQL", "GraphQL",
    "MongoDB", "Git", "Docker", "Linux", "Agile development", "TDD"
  ];
  readonly experiences = [
    "Teaching assistant at CodeFever",
    "Full stack developer at FOD Economy"
  ];
  readonly educations = [
    "Bachelor of Applied Computer Science",
    "Associate of Computer Programming"
  ];

  readonly languages = [
    "English", "Dutch"
  ]

  readonly age: number;

  private readonly birthDate = new Date(2002, 4, 25);

  constructor() {
    const today = new Date();

    this.age = today.getFullYear() - this.birthDate.getFullYear();

    if (today.getMonth() < this.birthDate.getMonth()
      || (today.getMonth() == this.birthDate.getMonth() && today.getDate() < this.birthDate.getDate())) {
      this.age--;
    }
  }
}
