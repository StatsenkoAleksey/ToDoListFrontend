import { Component, Inject } from '@angular/core';
import {
  ProjectList,
  projectList
} from '../project/project.component';
import { MatSelectChange } from '@angular/material/select';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { NewTodoService } from './dialog-new-todo.service';
import { Project } from '../project/project';

export interface DialogData {
  newProject: string;
  newTodo: string;
}

@Component({
  selector: 'app-dialog-new-todo',
  templateUrl: './dialog-new-todo.component.html',
  styleUrls: ['./dialog-new-todo.component.css'],
})
export class DialogNewTodoComponent {
  projectList: ProjectList[] = projectList;
  newSelected: boolean = false;
  selectedId: number = 0;
  disabledSubmit: boolean = true
  enableSubmit: boolean[] = [false, false, false]
  newProject: string;
  newTodo: string;

  constructor(
    public dialogRef: MatDialogRef<DialogNewTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private newTodoService: NewTodoService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectedValue(event: MatSelectChange) {
    this.enableSubmit[1] = true
    this.selectedId = event.value;
    this.newSelected = +this.selectedId === -1 ? true : false;
    this.enableSubmit[2] = !this.newSelected ? true : false
    this.disabledSubmit = !this.enableSubmit.every(elem => elem === true)
  }

  inputProject(event: any) {
    this.newProject = event.target.value;    
    this.enableSubmit[2] = this.newProject ? true : false
    this.disabledSubmit = !this.enableSubmit.every(elem => elem === true)
  }

  inputTodo(event: any) {
    this.newTodo = event.target.value;
    this.enableSubmit[0] = this.newTodo ? true : false
    this.disabledSubmit = !this.enableSubmit.every(elem => elem === true)
  }

  putInfo() {
    if (this.selectedId < 0) {
      const availableProject: ProjectList[] = this.projectList.filter(project => (project.name === this.newProject && project.id > 0))
      
      if (!availableProject.length) {
        this.newTodoService.postTodo(
          this.selectedId,
          this.newTodo,
          this.newProject
        );
      } else {
        this.newTodoService.postTodo(
          availableProject[0].id,
          this.newTodo,
          this.newProject
        );
      }
    } else {
      this.newTodoService.postTodo(
        this.selectedId,
        this.newTodo,
        this.newProject
      )
    }
  }
}
