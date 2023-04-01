export class Newsletter {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(email) {
    const findSubscriberIndex = this.subscribers.findIndex(
      (user) => user.email === email
    );

    if (findSubscriberIndex !== -1) {
      this.subscribers.splice(findSubscriberIndex, 1);
    } else {
      throw new Error('Subscriber no encontrado');
    }
  }

  post(article) {
    this.subscribers.forEach((subscriber) => {
      subscriber.receive(article);
    });
  }
}
