function sendEmail(email, subject, body) {
  return new Promise((resolve, reject) => {
    // Quitar el window para probar en VSC
    window.setTimeout(() => {
      if (!email || !subject || !body) {
        reject(new Error('Hacen falta datos para poder enviar el correo'));
      } else {
        resolve({ email, subject, body });
      }
    }, 2000);
  });
}

sendEmail('test@mail.com', 'Nuevo reto', 'Únete a los 30 días de JS').then(
  (result) => console.log(result)
);

sendEmail('test@mail.com', '', 'Únete a los 30 días de JS')
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
