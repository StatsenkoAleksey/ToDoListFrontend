import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project';
import { plainToClass } from 'class-transformer';

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
    })
  }

  patchTodo() {
    this.projectService.patchProject(2)
  }
  
}
