import { LinkedList } from './SinglyLinkedList.js';
import { Node } from './Node.js';

export class LinkedListRecharged extends LinkedList {
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let nodeCurrent = this.head;
    let i = 0;
    while (i != index) {
      nodeCurrent = nodeCurrent.next;
      i++;
    }
    return nodeCurrent.value;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }
    if (index == 0) {
      this.prepend(value);
      return this;
    }
    if (index == this.length) {
      this.append(value);
      return this;
    }
    if (index > 0 && index < this.length - 1) {
      const newNode = new Node(value);
      const nodoPrev = this.nodeSearch(index - 1);

      newNode.next = nodoPrev.next;
      nodoPrev.next = newNode;
      this.length++;
      return this;
    }
  }

  toArray() {
    if (this.length === 0) return [];
    const linkedListArray = [this.head.value];

    let currentNode = this.head;
    while (currentNode.next) {
      linkedListArray.push(currentNode.next.value);
      currentNode = currentNode.next;
    }
    return linkedListArray;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    const previousPointer = this.nodeSearch(index - 1);
    const holdingPointer = this.nodeSearch(index + 1);

    previousPointer.next = holdingPointer;

    this.length--;

    return this;
  }

  nodeSearch(index) {
    let pointerSearch = this.head;
    let i = 0;
    if (index < 0 || index >= this.length) {
      throw new Error('El índice esta fuera de rango');
    }
    while (i != index && pointerSearch.next != null) {
      pointerSearch = pointerSearch.next;
      i++;
    }
    return pointerSearch;
  }
}
