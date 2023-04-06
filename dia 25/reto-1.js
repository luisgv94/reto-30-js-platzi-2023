export class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  map(func) {
    const mapData = new MyArray();
    for (let item in this.data) {
      mapData.data[item] = func(this.data[item]);
      mapData.length++;
    }
    return mapData;
  }

  filter(func) {
    const filteredData = new MyArray();
    for (let item in this.data) {
      if (func(this.data[item])) {
        filteredData.data[filteredData.length] = this.data[item];
        filteredData.length++;
      }
    }
    return filteredData;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  join(character = ',') {
    let str = '';
    for (let i = 0; i < this.length; i++) {
      str += i < this.length - 1 ? this.data[i] + character : this.data[i];
    }
    return str;
  }

  shift() {
    if (this.length === 0) return undefined;

    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  unshift(item) {
    if (!item && item !== 0) return this.length;
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }
}
