import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task, TaskType, TaskPriority, TaskStatus } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  task: Partial<Task> = {
    type: 'task',
    priority: 'medium',
    status: 'open',
  };

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.task.title && this.task.creator && this.task.status && this.task.type) {
      this.taskService.addTask(this.task as Task);
      this.task = {
        type: 'task',
        priority: 'medium',
        status: 'open',
      };
    }
  }
}
