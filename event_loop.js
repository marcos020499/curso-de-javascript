console.log('Hola');

// WebApi: Agrega un mensaje a la cola
setTimeout(() => {
  console.log('El modelo');
}, 0);

// WebApi: Agrega otro mensaje a la cola
setTimeout(() => {
  console.log('De concurrencias');
}, 0);

// Añade un frame al stack de llamada
console.log('Mundo');

// Añade un frame al stack de llamada
console.log('Entendiendo');

// hola
// mundo
// entendiendo
// el modelo
// de concurrencias