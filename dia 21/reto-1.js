import { User } from './user.js';

export class Chat {
  constructor() {
    if (!Chat.instance) {
      this.users = [];
      Chat.instance = Object.freeze(this);
    }
    return Chat.instance;
  }

  sendMessage(message) {
    if (this.users.length) {
      this.users.forEach((user) => user.receiveMessage(message));
    }
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    }
  }

  removeUser(name) {
    const userIndex = this.users.findIndex((user) => user.name === name);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  }
}

// Test1
const chat1 = new Chat();
const chat2 = new Chat();

console.log(chat1 === chat2);

// Test2
const chat = new Chat();
const user1 = new User('Pepito');
const user2 = new User('Juanito');
chat.addUser(user1);
chat.addUser(user2);

chat.sendMessage('Nunca pares de aprender!');

console.log(user1.messages);
console.log(user2.messages);
