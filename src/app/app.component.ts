import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNewTodoComponent } from './dialog-new-todo/dialog-new-todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-list';
  dialogOpen: boolean = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogNewTodoComponent);
  }
}
