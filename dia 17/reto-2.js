export class Car {
  constructor(brand, model, year, mileage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.state = false;
  }

  // metodos
  turnOn() {
    this.state = true;
  }

  turnOff() {
    this.state = false;
  }

  drive(kilometers) {
    if (this.state) {
      this.mileage += kilometers;
    } else {
      throw new Error('El auto está apagado');
    }
  }
}

const toyota = new Car('Toyota', 'Corolla', 2020, 0);
toyota.turnOn();
toyota.drive(100);
console.log(toyota.mileage);
