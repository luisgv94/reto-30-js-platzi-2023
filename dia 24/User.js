export class User {
  constructor(name) {
    this.name = name;
  }

  notify(task) {
    console.log(`El usuario ${this.name} ha completado la tarea: ${task}`);
  }
}
