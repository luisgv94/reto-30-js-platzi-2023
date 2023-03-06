export function myMap(array, func) {
  const finalArray = [];

  array.forEach((element) => {
    finalArray.push(func(element));
  });

  return finalArray;
}
