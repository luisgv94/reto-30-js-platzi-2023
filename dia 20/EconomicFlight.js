import { Flight } from './Flight.js';
import { Reservation } from './Reservation.js';

export class EconomicFlight extends Flight {
  // Override to apply logic
  addFlightToPassenger(passenger) {
    const cloneFlight = { ...this };
    if (passenger.age < 18 || passenger.age > 65) {
      cloneFlight.price *= 0.8;
    }
    passenger.addFlight(cloneFlight);
    return cloneFlight;
  }
}
