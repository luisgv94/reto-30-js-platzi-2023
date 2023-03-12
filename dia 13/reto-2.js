function searchValue(array, value) {
  if (!array.flat().includes(value)) {
    throw new Error('Valor no encontrado');
  }

  const row = array.findIndex((innerArray) => innerArray.includes(value));
  const column = array[row].findIndex((element) => element === value);

  return {
    row,
    column,
  };
}

// Test 1
// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const value = 5;
// console.log(searchValue(array, value));

// Test 2
const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const value = 45;
console.log(searchValue(array, value));
