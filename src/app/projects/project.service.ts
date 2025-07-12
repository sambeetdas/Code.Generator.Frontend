import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Project, CreateProjectDto, UpdateProjectDto, DeployRequest } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = `${environment.apiUrl}/api/Projects`;

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  createProject(project: CreateProjectDto): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  updateProject(id: number, project: UpdateProjectDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, project);
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  generateDiagram(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/generate-diagram`, {});
  }

  generateCode(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/generate-code`, {});
  }
  
  deployProject(projectId: number, deployRequest: DeployRequest): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/Deployments/projects/${projectId}/deploy`, deployRequest);
  }
}