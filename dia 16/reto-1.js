export function protectDog(dog) {
  // Tu código aquí 👈
  const nuevoObjeto = Object.assign({}, dog);
  return deepFreeze(nuevoObjeto);
}

const deepFreeze = (obj) => {
  for (let [key, value] of Object.entries(obj)) {
    // hasOwnProperty solo verifica los elementos no heredados
    if (obj.hasOwnProperty(key) && typeof value == 'object') {
      deepFreeze(value);
    }
  }
  Object.freeze(obj);
  return obj;
};

const testDog1 = protectDog({
  name: 'Romeo',
  age: 3,
  owner: { name: 'Victor', phoneNumber: '555-555-5555' },
  favoriteFood: ['pollito', 'croquetas'],
  activities: ['jugar', 'caminar'],
});
testDog1.owner.name = 'Toro';
console.log(testDog1.owner.name);
