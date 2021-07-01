import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SERVER_URL, LOCAL_URL } from "./project";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<Object[]>(SERVER_URL+'/projects')
    // return this.http.get<Object[]>(LOCAL_URL)
  }

  patchProject(id: number, projectId: number = 1) {
    this.http.patch(`${SERVER_URL}/projects/${projectId}/todos/${id}`, {}).subscribe(
      res => { 
        console.log('received ok response from patch request');
      },
      error => {
        console.error('There was an error during the request');
        console.log(error);
      })
    console.log(`${SERVER_URL}/projects/${projectId}/todos/${id}`)
    
  }

}