import { EconomicFlight } from './EconomicFlight.js';
import { Flight } from './Flight.js';
import { Passenger } from './Passenger.js';

// Test 1
// const flight = new Flight('CDMX', 'Guadalajara', '2022-01-01', 5, 1000);

// const passenger = new Passenger('Juan', 'Perez', 30);

// const reservation = flight.sellTicket(passenger);

// console.log(passenger.flights);
// console.log(reservation);

//Test 2
// const flight = new Flight('CDMX', 'Guadalajara', '2022-01-01', 5, 1000);
// const passenger = new Passenger('Juan', 'Perez', 30);

// const reservation = flight.sellTicket(passenger);

// console.log(flight.passengers);

// Test 3
const flight = new EconomicFlight('New York', 'Paris', '2023-12-25', 100, 200);

const passenger = new Passenger('Pedro', 'Gutierrez', 17);

const reservation = flight.sellTicket(passenger);

console.log(reservation.flight.price);
