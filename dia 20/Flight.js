import { Reservation } from './Reservation.js';

export class Flight {
  constructor(origin, destination, date, capacity, price) {
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
  }

  addFlightToPassenger(passenger) {
    passenger.addFlight(this);
  }

  sellTicket(passenger) {
    if (this.capacity > 0) {
      this.passengers.push({
        fullName: `${passenger.name} ${passenger.lastName}`,
        age: passenger.age,
      });
      this.capacity -= 1;
      this.addFlightToPassenger(passenger);
      return new Reservation(this, passenger);
    }
  }
}
