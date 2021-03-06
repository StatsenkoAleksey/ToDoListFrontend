import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL, LOCAL_URL } from './project';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<Object[]>(SERVER_URL+'/projects')
    // return this.http.get<Object[]>(LOCAL_URL);
  }

  patchProject(id: number, projectId: number) {
    return this.http
      .patch(`${SERVER_URL}/projects/${projectId}/todos/${id}`, { id }, httpOptions)
  }
}
