import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL, LOCAL_URL } from '../project/project';
import { HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class NewTodoService {
  constructor(private http: HttpClient) {}

  postTodo(project_id: number, todo: string, project?: string) {
    this.http
      .post(`${SERVER_URL}/todos`, { project, todo, project_id }, httpOptions)
      .subscribe(
        (res) => {
          location.reload();
          console.log('received ok response from patch request');
        },
        (error) => {
          console.error('There was an error during the request');
          console.log(error);
        }
      );
  }
}
