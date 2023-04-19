import { Task } from './exercise.js';

export class TaskManager {
  constructor() {
    this.tasks = [];
    TaskManager.instance = this;
  }

  static getInstance() {
    if (!TaskManager.instance) {
      TaskManager.instance = new TaskManager();
    }
    return TaskManager.instance;
  }

  addTask(task) {
    if (task instanceof Task) {
      this.tasks.push(task);
    } else {
      throw new Error(`Task invalido`);
    }
  }

  getTasks() {
    return this.tasks;
  }

  getTaskById(id) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    return taskIndex !== -1 ? this.tasks[taskIndex] : null;
  }
}
