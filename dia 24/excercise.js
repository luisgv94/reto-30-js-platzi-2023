import { User } from './User.js';

export class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.completed = false;
    this.users = [];
  }

  assignUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    } else {
      throw new Error(`User invalido`);
    }
  }

  completeTask() {
    this.completed = true;
    this.notifyUsers();
  }

  notifyUsers() {
    this.users.forEach((user) => {
      user.notify(this);
    });
  }
}
