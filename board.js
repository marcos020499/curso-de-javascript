var nombre;
nombre = 'cARLOS';
nombre = 0;
nombre = [];



const edad = 18;
if(edad > 17) {
  console.log('mayor de edad')
} else {
  console.log('menor')
}

edad > 17 ? console.log('mayor de edad') : console.log('menor');

var islowerThan10;
var message;
const age = 7;
message = age < 10;

false && console.log('mayor de edad');

/**
 * 
 * @param {String} nombre El nombre del usuario
 */
function saludar(nombre = 'Aninimo') {
  return console.log('mayor de edad' + nombre)
}

saludar();

// Function expressions / Funciones de expresion
const saludar = function() {
  return console.log('hola')
};

saludar(); // undefined

const saludar = () => {
  console.log('hola')
}

//////// ////////////////////////////////////////////////

const nombre = 'CARLOS';

function saludarJefe() {
  console.log(nombre)
  const nombre = 'LUIS';
}

saludarJefe();

const persona = {
  edad: 18,
  nombre: 'Carlos',
  direccion: 'GDL',
  color: 'AZUL',
  drink: {
    name: 'Cola cola',
    price: 20
  }
}

persona.length = 20;
persona.nombre = 'Edit';
delete persona.edad;

console.log(persona.direccion) // GDL
console.log(persona.drink.name.factory.street?.asdasd?.asdasd) // Undefined

const name = persona.drink.name;
const price = persona.drink.price;
const price = persona.drink.price;
const price = persona.drink.price;
const price = persona.drink.price;

const { name, price } = persona.drink;

'Carlos' + ' ' + name + price;

`Carlos tiene ${20 + 5} años de edad`; // Carlos tiene 25 años de edad