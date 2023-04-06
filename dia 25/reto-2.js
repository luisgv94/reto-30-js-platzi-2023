export class ContactList {
  constructor(size) {
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash(name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
      total += name.charCodeAt(i);
    }
    return total % this.numBuckets;
  }

  insert(name, phone) {
    const hashIndex = this.hash(name);
    if (!this.buckets[hashIndex]) {
      this.buckets[hashIndex] = [];
    }
    this.buckets[hashIndex].push([name, phone]);
  }

  get(name) {
    const hashIndex = this.hash(name);
    const currentBucket = this.buckets[hashIndex];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === name) {
          return currentBucket[i][1];
        }
      }
    }
    return null;
  }

  retrieveAll() {
    let allValues = [];
    for (let i = 0; i < this.numBuckets; i++) {
      if (this.buckets[i]) {
        this.buckets[i].forEach((bucket) => {
          allValues.push(bucket);
        });
      }
    }
    return allValues;
  }

  delete(name) {
    const hashIndex = this.hash(name);
    const currentBucket = this.buckets[hashIndex];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === name) {
          const deletedValue = this.buckets[hashIndex][i];
          this.buckets[hashIndex].splice(i, 1);
          return deletedValue;
        }
      }
    }
    return null;
  }
}
