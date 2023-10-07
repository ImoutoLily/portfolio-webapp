import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Repository } from "../../shared/models/repository.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `https://api.github.com/users/${environment.githubUsername}/repos`;
  }

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.url);
  }
}
