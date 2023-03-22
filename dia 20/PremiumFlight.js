import { Flight } from './Flight.js';
import { Reservation } from './Reservation.js';

export class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    super(origin, destination, date, capacity, price);
    this.price += specialService;
  }
}
