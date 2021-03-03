// la función siempre devolverá una promesa
async function escribirEnDB() {
  return 1;
}

async function escribirEnDB() {
  return Promise.resolve(1);
}

escribirEnDB()
  .then(() => console.log('listo'))

// funciona solamente dentro de funciones async
let value = await promise;

async function f() {

  let listaDePersonas = moduloExterno.escribirEnBD();
  mysql.select()


  listaDePersonas()
    .then(() => console.log('listo'))

    let listaDePersonas = await listaDePersonas;

    console.log(result); // Hecho
  }

f();