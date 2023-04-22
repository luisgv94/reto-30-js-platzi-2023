import { Mail } from './mail.js';

export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(from, to, body, subject) {
    const newNode = new Mail(from, to, body, subject);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;

    return this;
  }

  dequeue() {
    if (this.length === 0) {
      throw new Error('La queue está vacía');
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const oldestMail = this.first;
    this.first = this.first.next;
    this.length--;

    return {
      from: oldestMail.from,
      to: oldestMail.to,
      body: oldestMail.body,
      subject: oldestMail.subject,
    };
  }

  peek() {
    return this.first;
  }

  size() {
    return this.length;
  }
}
