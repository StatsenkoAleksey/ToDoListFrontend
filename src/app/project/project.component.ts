import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project';
import { plainToClass } from 'class-transformer';

export interface ProjectList {
  name: string,
  id: number
}
export const projectList: ProjectList[] = []

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  constructor(private projectService: ProjectService) {}
  @Input() card: Project
  projects: Project[] = [];

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects: Object[]) => {
      this.projects = plainToClass(Project, projects)
      projectList.push({name: "Новая категория", id: -1 })
      for (let project of this.projects) {
        const name: string = project.title
        const id: number = project.id
        projectList.push({name, id })
      }      
    })
  }

  patchTodo(id: number, project_id: number) {    
    this.projectService.patchProject(id, project_id)
    .subscribe(
      (res) => {
        console.log('received ok response from patch request');
      },
      (error) => {
        console.error('There was an error during the request');
        console.log(error);
      }
    );
  }
  
}
