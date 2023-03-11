// // Clase
// const objects = [{ name: 'John' }, { name: 'Jane' }, { name: 'Jim' }];
// const allHaveName = objects.every(function (element) {
//   return element.hasOwnProperty('name');
// });
// // Output: true
// console.log(allHaveName);

function validateForm(formData, registeredUsers) {
  const requiredFields = ['name', 'lastname', 'email', 'password'];
  const formFields = Object.keys(formData);
  let missingFields = requiredFields.filter((x) => !formFields.includes(x));
  if (missingFields.length) {
    throw new Error(`Faltan los siguientes campos: ${missingFields}`);
  }

  const { name, lastname, email } = formData;

  const duplicatedEmail = registeredUsers.some((user) => user.email === email);
  if (duplicatedEmail) {
    throw new Error('Error email duplicado');
  }

  registeredUsers.push({ name, lastname, email });
  return `Tu registro fue exitoso ${name} ${lastname}`;
}

//TEST 1
// const formData = {
//   name: 'Juan',
//   lastname: 'Perez',
//   email: 'juan@example.com',
//   password: '123456',
// };
// const registeredUsers = [
//   { name: 'Pedro', lastname: 'Gomez', email: 'pedro@example.com' },
//   { name: 'Maria', lastname: 'Garcia', email: 'maria@example.com' },
// ];
// console.log(validateForm(formData, registeredUsers));

//TEST 2
const formData = {
  name: 'Juan',
  password: '123456',
};
const registeredUsers = [
  { name: 'Pedro', lastname: 'Gomez', email: 'pedro@example.com' },
  { name: 'Maria', lastname: 'Garcia', email: 'maria@example.com' },
];
console.log(validateForm(formData, registeredUsers));
