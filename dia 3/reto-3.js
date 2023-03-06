function printTriangle(size, character) {
  let message = '';
  for (let index = 1; index <= size; index++) {
    const line = ' '.repeat(size - index) + character.repeat(index);
    message += line + '\n';
  }
  return message.trimEnd();
}

console.log(printTriangle(5, '*'));
console.log(printTriangle(6, '$'));
