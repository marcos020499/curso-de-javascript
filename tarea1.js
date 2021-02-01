/////////////////////////////////////////////////////////////////////////////////////

/*

1- ¿Que valor contiene "data"?
Posibles respuestas: 1, 2, undefinied, NaN, null, Promise {<Pending>}, 'Error'

*/

let promesa = new Promise((resolve, reject) => {
  resolve(1);

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
  return new Promise(resolve => setTimeout(resolve, milisegundos))
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

function request(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}
/*3- Rescribir el código dentro de la función "request" usando async/await en vez de .then/catch.*/
request('/photos')
  cath (err);{
    console.log(err);
  }
async function request(url) {
  try{
    const response = await fetch(url);
    console.log(await response.json());
  }
  catch (err){
    throw new Error (await response.status);
  }
} 
/*
4- Convertir la función "request" a una función flecha.
*/
request('/photos')
  cath (err);{
    console.log(err);
  }
request = async(url) => {
  try{
    const response = await fetch(url);
    console.log(await response.json());
  }
  catch (err){
    throw new Error (await response.status);
  }
} 
request('/photos')
  .catch((err) => console.log(err));

/*5- Explicar porque al convertir la función tradicional a función flecha el código deja de funcionar.
No entendi del todo esta parte, relamente creo que tiene que ver con el parametro de la funcion y el scope de la misma.
*/

