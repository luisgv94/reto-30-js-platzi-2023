export class Passenger {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.flights = [];
  }

  addFlight(flight) {
    const { origin, destination, date, price } = flight;
    this.flights.push({
      origin,
      destination,
      date,
      price,
    });
  }
}
