/////////////////////////////////////////////////////////////////////////////////////

// 1- ¿Cuál será el resultado de las siguientes expresiones?

5 > 4                   // R:
"2" > "12"              // R:
undefined == null       // R:
undefined === null      // R:

/////////////////////////////////////////////////////////////////////////////////////

// Hay un objeto ladder que permite subir y bajar:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // muestra el peldaño actual
    console.log(this.step);
  }
};

// Ahora, si necesitamos hacer varios llamados en secuencia podemos hacer algo como esto:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

// 2- Modifica el código de up,  down y showStep para hacer los llamados encadenables como esto:
ladder.up().up().down().showStep(); // 1

/////////////////////////////////////////////////////////////////////////////////////

// 3- Crear una FUNCION CONSTRUCTURA Y UNA CLASE Calculator que permitan sumar y multiplicar 2 numeros:

let calculator = new Calculator(2, 5);

/////////////////////////////////////////////////////////////////////////////////////

// 4- Crear una UNA CLASE Calculator que permita sumar una N cantidad de numeros dados
// los numeros se deberan enviar en los parametros:

let calculator = new Calculator(2, 5, 1, 0, 20, 50, 10);
let calculator = new Calculator(20, 50);
let calculator = new Calculator(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

/////////////////////////////////////////////////////////////////////////////////////

// 4- A 3 usuarios se les preguntó su platillo favorito, los nombres de los platillos los tenemos en un array.
// Crear un unico array que contenga todos los platillos de los 5 usuarios. (No importa si se repiten)

const usuario1 = ['Pizza', 'Tacos'];
const usuario1 = ['Tortas', 'Pasta', 'Tamales', 'Hambuerguesa', 'Tacos'];
const usuario1 = ['Tacos', 'Pollo frito', 'Pastel'];

const platillos = [];