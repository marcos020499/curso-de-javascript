/////////////////////////////////////////////////////////////////////////////////////

/*

1- ¿Que valor contiene "data"?
Posibles respuestas: 1, 2, undefinied, NaN, null, Promise {<Pending>}, 'Error'

*/

let promesa = new Promise((resolve, reject) => {
  resolve(1);

  setTimeout(() => resolve(1), 0);

  setTimeout(() => resolve(1), 500);

  setTimeout(() => resolve(2), 1000);

  reject(new Error('Error'));
});

promesa()
  .then((data) => {
    // Respuesta: 1
  });

/////////////////////////////////////////////////////////////////////////////////////

/*

La función incorporada en javascript "setTimeout" utiliza callbacks.

2- Debes crear una alternativa a setTimeout que utilize promesas.
Recuerda que setTimeout retrasa la ejecución del código en el scope durante X milisegundos.

La función delay(milisegundos) debería retornar una promesa.
Esa promesa debería resolverse después de X milisegundos.

*/

function delay(milisegundos) {
  // Escribe el código aquí
  return new Promise(resolve => setTimeout(resolve(), milisegundos));
}

delay(3000)
  .then(() => {
    console.log('Se ejecuta después de 3 segundos')
  });

///////////////////////////////////////////////////////////////////////////////////////////////

/*

3- Rescribir el código dentro de la función "request" usando async/await en vez de .then/catch.
4- Convertir la función "request" a una función flecha.
5- Explicar porque al convertir la función tradicional a función flecha el código deja de funcionar.

*/


request('/photos')
  .catch((err) => console.log(err));

const loadJson = async (url) => {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}