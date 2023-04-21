import { Node } from './Node-2.js';

export class PatientList {
  constructor(beds) {
    this.beds = [...Array(beds).keys()].map((i) => i + 1);
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addPatient(name, age) {
    if (this.beds.length === 0) throw new Error('No hay camas disponibles');

    const newNode = new Node(name, age, this.beds[0]);
    this.beds.shift();
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  removePatient(name) {
    if (!this.head) {
      return null;
    }
    if (this.head.name === name) {
      this.beds.push(this.head.bedNumber);
      this.head = this.head.next;
      this.length--;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.name === name) {
        this.beds.push(currentNode.next.bedNumber);
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
    throw new Error('Paciente no encontrado');
  }

  getPatient(name) {
    let pointerSearch = this.head;
    let i = 0;
    while (pointerSearch.name !== name && pointerSearch.next != null) {
      pointerSearch = pointerSearch.next;
      i++;
    }

    if (!pointerSearch.next) throw new Error('Paciente no encotrado');

    const { next, ...patientInfo } = pointerSearch;

    return patientInfo;
  }

  getPatientList() {
    if (this.length === 0) return [];
    const patientListArray = [
      {
        name: this.head.name,
        age: this.head.age,
        bedNumber: this.head.bedNumber,
      },
    ];

    let currentNode = this.head;
    while (currentNode.next) {
      patientListArray.push({
        name: currentNode.next.name,
        age: currentNode.next.age,
        bedNumber: currentNode.next.bedNumber,
      });
      currentNode = currentNode.next;
    }
    return patientListArray;
  }

  getAvailableBeds() {
    return this.beds.length;
  }
}
