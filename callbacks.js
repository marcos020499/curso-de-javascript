// hacemos algo
const personas = consultarBD();
// el código debajo de la consulta
// no espera a que finalice la carga del script
console.log(personas) // undefinied / Objeto de promesa
// el código sigue corriendo
// el código sigue corriendo
// el código sigue corriendo
// el código sigue corriendo
// Después de 1 segundo se completó la consulta

setTimeout(() => {
  console.log(personas) // Podría funcionar
}, 10000);

//////////////////////////////////////

function consultarBD(personas) {
  // SELECT * FROM Personas

  personas(['CARLOS, USUARIO,']);
}

consultarBD(function(personas) {
  agregarEdad(function(personas) {
    agregarEdad(function(personas) {
      agregarEdad(function(personas) {
        agregarEdad(function(personas) {
          console.log(personas);
          if(err) {
            
          }
        })
      })
    })
  })
})

// Callback hell

// Normalmente el primer objeto es un objeto opcional de error (Por norma)