const petsMessages = {
  dog: [
    'Los cachorros necesitan pequeñas y frecuentes sesiones de juego',
    'Los perros a esta edad necesitan caminatas diarias y sesiones de juego',
    'Los perros viejos necesitan caminatas más cortas',
  ],
  cat: [
    'Los gatitos necesitan frecuentes sesiones de juego',
    'Los gatos a esta edad necesitan jugar diariamente',
    'Los gatos viejos necesitan sesiones de juego más cortas',
  ],
  bird: [
    'Las aves jóvenes necesitan mucho espacio para volar',
    'Las aves necesitan jugar diariamente y un lugar para volar',
    'Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar',
  ],
};

const validateAge = (age) => {
  let ageParam;
  if (age < 1) {
    ageParam = 0;
  } else if (age >= 1 && age <= 7) {
    ageParam = 1;
  } else if (age > 7) {
    ageParam = 2;
  }
  return ageParam;
};

function getPetExerciseInfo(type, age) {
  let petType = type.toLowerCase();
  let userMessage;
  const messageIndex = validateAge(age);
  switch (petType) {
    case 'perro':
      userMessage = petsMessages.dog[messageIndex];
      break;

    case 'gato':
      userMessage = petsMessages.cat[messageIndex];
      break;

    case 'ave':
      userMessage = petsMessages.bird[messageIndex];
      break;

    default:
      userMessage = 'Tipo de mascota inválida';
      break;
  }

  return userMessage;
}

console.log(getPetExerciseInfo('perro', 3));
console.log(getPetExerciseInfo('gato', 8));
console.log(getPetExerciseInfo('Mamut', 25));
