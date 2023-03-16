export function arrayModified() {
  Array.prototype.myFilter = function (filterFn) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
      if (filterFn(this[i])) filteredArray.push(this[i]);
    }
    return filteredArray;
  };
}

const array = [1, 2, 3, 4, 5, 6];
arrayModified();

console.log(array.myFilter((num) => num % 2 === 0));
