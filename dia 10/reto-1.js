class Task {
  constructor(id, name, priority, tags) {
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.tags = tags;
    this.completed = false;
  }
}

function createTaskPlanner() {
  const tasks = [];

  const addTask = (task) => {
    const newTask = new Task(...Object.values(task));
    tasks.push(newTask);
  };

  const removeTask = (value) => {
    const findIndex = tasks.findIndex(
      (task) => task.id === value || task.name === value
    );

    if (findIndex !== -1) {
      tasks.splice(findIndex, 1);
    }
  };

  const getTasks = () => tasks;

  const getPendingTasks = () =>
    tasks.filter((task) => task.completed === false);

  const getCompletedTasks = () =>
    tasks.filter((task) => task.completed === true);

  const markTaskAsCompleted = (value) => {
    const findIndex = tasks.findIndex(
      (task) => task.id === value || task.name === value
    );

    if (findIndex !== -1) {
      tasks[findIndex] = { ...tasks[findIndex], completed: true };
    }
  };

  const getSortedTasksByPriority = () => {
    const sortedArray = [...tasks];
    sortedArray.sort((a, b) => a.priority - b.priority);
    return sortedArray;
  };

  const filterTasksByTag = (tag) =>
    tasks.filter((task) => task.tags.includes(tag));

  const updateTask = (taskId, updates) => {
    const findIndex = tasks.findIndex((task) => task.id === taskId);
    if (findIndex !== -1) {
      tasks[findIndex] = {
        ...tasks[findIndex],
        ...updates,
      };
    }
  };

  return {
    addTask,
    removeTask,
    getTasks,
    getPendingTasks,
    getCompletedTasks,
    markTaskAsCompleted,
    getSortedTasksByPriority,
    filterTasksByTag,
    updateTask,
  };
}

const planner = createTaskPlanner();

planner.addTask({
  id: 1,
  name: 'Comprar leche',
  priority: 1,
  tags: ['shopping', 'home'],
});

planner.addTask({
  id: 2,
  name: 'Llamar a Juan',
  priority: 3,
  tags: ['personal'],
});

planner.addTask({
  id: 3,
  name: 'Llamar a JuanDC',
  priority: 2,
  tags: ['personal prueba'],
});

// console.log('Planner tasks Init:', planner.getTasks());
// console.log('Remove task:', planner.removeTask(1));
// console.log('Planner tasks After delete:', planner.getTasks());

console.log('=============================');

// planner.markTaskAsCompleted('Llamar a Juan');
// console.log('Planner tasks After Complete:', planner.getTasks());
// console.log('getPendingTasks', planner.getPendingTasks());
// console.log('getCompletedTasks', planner.getCompletedTasks());
