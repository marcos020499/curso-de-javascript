// ESTADOS
// Pending > Fullfilled / Reject

let fullfilled = new Promise(function(resolve, reject) {
  // Ejecutor (el código productor, "cantante")
  setTimeout(() => {
    resolve(listaDePersonas)
  }, 100);
});

let rejected = new Promise((resolve, reject) => {
  // Ejecutor (el código productor, "cantante")
  setTimeout(() => {
    reject(new Error("No"))
  }, 1000);
});

fullfilled()
  .then((listaDePersonas) => console.log(listaDePersonas))
  .catch((err) => console.log(err))


const usuarios = consultarUsuarios();
console.log(usuarios) // Promise<Pending>

consultarUsuarios()
  .then((usuarios) => console.log(usuarios))

fullfilled().finally(() => detenerLoader());
rejected().finally(() => detenerLoader());

fullfilled().then(result => console.log(result));
rejected().catch(result => console.log(result));