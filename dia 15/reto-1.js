function hotelSystem(rooms) {
  const capacity = rooms;
  const reservations = [];

  const reservationOverlaps = (reservation, newReservation) => {
    const { checkIn, checkOut, roomNumber } = newReservation;
    if (
      (reservation.checkIn <= checkIn && checkIn <= reservation.checkOut) ||
      (reservation.checkIn <= checkOut && checkOut <= reservation.checkOut) ||
      (checkIn < reservation.checkIn && reservation.checkOut < checkOut)
    ) {
      if (reservation.roomNumber === roomNumber) {
        return true;
      }
    }

    return false;
  };

  const searchReservation = (id) => {
    const reservation = reservations.find((res) => res.id === id);
    if (reservation) {
      return reservation;
    }
    throw new Error('La reservación no fue encontrada');
  };

  const getSortReservations = () => {
    const copyReservations = [...reservations];
    return copyReservations.sort(
      (a, b) => new Date(a.checkIn) - new Date(b.checkIn)
    );
  };

  const addReservation = (reservation) => {
    const reservationsThatOverlaps = reservations.filter((res) =>
      reservationOverlaps(res, reservation)
    );
    if (reservationsThatOverlaps.length > 0) {
      throw new Error('La habitación no está disponible');
    } else {
      reservations.push(reservation);
    }
    return 'Reserva exitosa';
  };

  const removeReservation = (id) => {
    const reservationIndex = reservations.findIndex((res) => res.id === id);
    if (reservationIndex !== -1) {
      return reservations.splice(reservationIndex, 1)[0];
    } else {
      throw new Error('La reservación que se busca remover no existe');
    }
  };

  const getReservations = () => {
    return reservations;
  };

  const getAvailableRooms = (checkIn, checkOut) => {
    const initialReservations = [...Array(capacity).keys()]
      .map((i) => i + 1)
      .reduce((acc, curr) => {
        acc[curr] = [];
        return acc;
      }, {});

    console.log('initialReservations', initialReservations);

    const reservationsByRoomNumber = reservations.reduce((obj, res) => {
      obj[res.roomNumber] = obj[res.roomNumber].concat(res);
      return obj;
    }, initialReservations);

    console.log('reservationsByRoomNumber', reservationsByRoomNumber);
    return Object.entries(reservationsByRoomNumber)
      .filter(([roomNumber, reservations]) => {
        if (reservations.length === 0) return true;
        return !reservations.some((res) => {
          const newReservation = {
            checkIn,
            checkOut,
            roomNumber: Number(roomNumber),
          };
          return reservationOverlaps(res, newReservation);
        });
      })
      .map(([roomNumber, reservations]) => Number(roomNumber));
  };

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms,
  };
}

// Test 1
// const hotel = hotelSystem(10);
// // Agregar una nueva reservación
// hotel.addReservation({
//   id: 1,
//   name: 'John Doe',
//   checkIn: '01/01',
//   checkOut: '02/01',
//   roomNumber: 1,
// });
// console.log('test1', hotel.getReservations());

// Test 2
// const hotel = hotelSystem(10);
// hotel.addReservation({
//   id: 1,
//   name: 'John Doe',
//   checkIn: '01/01',
//   checkOut: '02/01',
//   roomNumber: 1,
// });
// hotel.addReservation({
//   id: 2,
//   name: 'Pepe Doe',
//   checkIn: '01/01',
//   checkOut: '02/01',
//   roomNumber: 7,
// });
// // Buscar una resevación hecha
// console.log(hotel.searchReservation(2));

// Test 3
const hotel = hotelSystem(10);
hotel.addReservation({
  id: 1,
  name: 'John Doe',
  checkIn: '01/01',
  checkOut: '02/01',
  roomNumber: 1,
});
hotel.addReservation({
  id: 2,
  name: 'John Doe',
  checkIn: '03/01',
  checkOut: '05/01',
  roomNumber: 9,
});
// hotel.addReservation({
//   id: 3,
//   name: 'Pepe Doe',
//   checkIn: '15/01',
//   checkOut: '20/01',
//   roomNumber: 10,
// });

// Buscamos habitaciones disponibles entre el 01 y el 05 del primer mes
console.log(hotel.getAvailableRooms('01/01', '05/01'));

// getAvailableRooms v2
// let availableRooms = [];
// for (let i = 1; i <= capacity; i++) {
//   if (
//     reservations.every((res) => {
//       return !reservationOverlaps(res, checkIn, checkOut, i);
//     })
//   ) {
//     availableRooms.push(i);
//   }
// }
// return availableRooms;
