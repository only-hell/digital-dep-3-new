export type TaskType = 'bug' | 'task';
export type TaskPriority = 'critical' | 'high' | 'medium' | 'low';
export type TaskStatus = 'open' | 'in progress' | 'done';

export interface Task {
  id: number;
  type: TaskType;
  priority: TaskPriority;
  status: TaskStatus;
  title: string;
  description?: string;
  assignee?: string;
  creator: string;
  createdAt: Date;
  updatedAt: Date;
}
