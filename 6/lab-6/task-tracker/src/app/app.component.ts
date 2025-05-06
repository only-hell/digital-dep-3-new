import { Component } from '@angular/core';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent],
  template: `
    <h1>Task Tracker</h1>
    <app-task-form></app-task-form>
    <hr>
    <app-task-list></app-task-list>
  `
})
export class AppComponent {}
