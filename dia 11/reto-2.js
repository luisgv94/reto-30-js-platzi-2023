import { doTask1, doTask2, doTask3 } from './tasks.js';

function runCode() {
  const strings = [];
  return new Promise((resolve) => {
    doTask1()
      .then((task1) => {
        strings.push(task1);
        return doTask2();
      })
      .then((task2) => {
        strings.push(task2);
        return doTask3();
      })
      .then((task3) => {
        strings.push(task3);
        resolve(strings);
      })
      .catch((err) => console.error(err));
  });
}

runCode().then((response) => console.log(response));
