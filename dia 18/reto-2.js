export class User {
  constructor(name, age, friends = [], messages = []) {
    this._name = name;
    this._age = age;
    this._friends = friends;
    this._messages = messages;
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  sendMessage(message, friend) {
    this.messages.push(message);
    this.friends
      .find((user) => user.name === friend.name)
      .messages.push(message);

    this.addFriend(friend);
  }

  showMessages() {
    return this._messages;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }

  get friends() {
    return this._friends;
  }

  set friends(newFriends) {
    this._friends = newFriends;
  }

  get messages() {
    return this._messages;
  }

  set messages(newMessages) {
    this._messages = newMessages;
  }
}
