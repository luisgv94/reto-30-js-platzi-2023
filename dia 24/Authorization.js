export class Authorization {
  checkAuthorization(user, task) {
    if (task.users.some((userAuth) => userAuth.name === user.name)) {
      task.completeTask();
    } else {
      throw new Error('No autorizado');
    }
  }
}
