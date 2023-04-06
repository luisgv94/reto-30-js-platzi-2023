export function taskManager() {
  let tasks = new Map();

  const addTask = (task, tags) => {
    const newTask = task.toLowerCase();
    if (!tasks.has(newTask)) {
      tasks.set(newTask, new Set(tags));
    } else {
      const currentTags = tasks.get(newTask);
      tags.forEach((tag) => currentTags.add(tag));
    }
  };

  const printTasks = () => {
    return tasks;
  };

  return { addTask, printTasks };
}
