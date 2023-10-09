import { Component, OnInit } from '@angular/core';
import { environment } from "@environments/environment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailAddress: string;
  githubUrl: string;
  linkedInUrl: string;

  ngOnInit(): void {
    this.emailAddress = environment.emailAddress;
    this.githubUrl = environment.githubUrl;
    this.linkedInUrl = environment.linkedInUrl;
  }
}
