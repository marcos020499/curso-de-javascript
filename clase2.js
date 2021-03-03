/////////////////////////// 
////// CONVERSIONES DE TIPOS
///////////////////////////  

// Number()

// undefined > NaN
// null > 0
// false / verdadero > 0 / 1
// String > Se eliminan los espacios al inicio y final del texto. "1asdasd0"
// Si el string resultante es vacío, el resultado es 0, en caso contario el número es “leído” del string. Un error devuelve NaN.


// Boolean()

// vacio > 0, "", null, undefined, NaN
// todo lo demas verdadero

////////////////////// 
////// COMPARACIONES
////////////////////// 
2 > 1

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert( a === b ); // true! FALSO

//////////////////////////////////
////// Nullish coalescing operator '??'
//////////////////////////////////

// RETORNA LA PRIMER VARIABLE """"DEFINIDA""""" DE UNA LISTA DE VARIABLES

a ?? b

(a !== null && a !== undefined) ? a : b;

let firstName = undefined || null;
let lastName = undefined || null;
let nickName = undefined || null;

// Muestra la primera variable que no sea null/undefined
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Anonymous

// || RETORNA EL PRIMER VALOR VERDADERO
// ?? RETORNA EL PRIMER VALOR DEFINIDO

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

//////////////////////////////////
////// THIS
//////////////////////////////////
const user = {
  name: 'carlos',
  sayHi: function() {
    alert(this.name); // cxarlos
  }
};

user = {
  name: 'juan',
  sayHi() {
    alert(this.name); // juan
  }
};

user.sayHi();

//////////////////////////////////
////// NEW
//////////////////////////////////

// funcion constructora

function User(name) {
  this.name = name;
  this.isAdmin = false;

  return 
}

let user = {
  name: '',
  isAdmin: false
};

user.name = 'Jack'

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

//////////////////////////////////
////// Arreglos
//////////////////////////////////
let arr = new Array();
let arr = [];

arr[0] = "asdasd";

let fruits = [
  "Plum",
  1,
  2,
  3,
  4,
];

// LIFO Last in last out // 
// FIFO First in first out //

// push(1, 2, 3, 4)

let fruits = ["Apple", "Orange", "Plum"];

// itera sobre los elementos del array
// FOR OR
for (let fruit of fruits) {
  console.log( fruit );
}

// 
let arr = new Array(200);
arr[0] // undefined
arr.length // 200

//
let fruits = [];
fruits[20] = "orange";
fruits[123] = "Apple";
fruits.length // 124

[1] == [1]

// 
class User {

  constructor(name) {
    this.name = name;
  };

  sayHi() {
    console.log(this.name);
  }
}

//////////////////////////////////
////// PARAMETROS REST Y OPERADOR SPREAD
//////////////////////////////////

// args
function sumAll(a, b, c, ...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}
alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6

///

Math.max(3, 5, 1); // NaN

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, 1, -2, 3, 4, 2, 8, 3, -8, 1, 25) ); // 25

const colores1 = [...["rojo", "azul", "amarillo"]]
const colores2 = ["rosa", "verde"]
const colores3 = ["negro", "gris", "cafe", "violeta"]

const totalcolores = ["rojo", "azul", "amarillo", "rosa", "verde", "negro", "gris", "cafe", "violeta"];
// "rojo", "azul", "amarillo", "rosa", "verde", "negro", "gris", "cafe", "violeta"

/*

Cuando veamos "..." en el código, son los rest o el spread.

Hay una manera fácil de distinguir entre ellos:

Cuando ... se encuentra al final de los parámetros de una función,
son los "rest” y recogen el resto de la lista de argumentos en un array.
Cuando ... está en el llamado de una función o similar, se llama  "spread” y expande un array en una lista.
Patrones de uso:

Los parámetros rest son usados para crear funciones que acepten cualquier número de argumentos.

*/

let arreglo1 = [1, 2, 3, 4]

let arreglo2 = [...[1, 2, 3, 4]] // [1, 2, 3, 4]


// pediente: metodos de arreglos Y DESTRUCTURACION
// JSX