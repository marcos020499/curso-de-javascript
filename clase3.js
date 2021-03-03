// pediente: metodos de arreglos Y DESTRUCTURACION
// JSX

////////////// ARREGLOS

// slice([principio], [final])
// RETORNAR un nuevo arreglo

// concat(arg1, arg2...)
// RETORNAR un nuevo arreglo. Agregar datos al arreglo

// forEach
arr.forEach((item, index, array) => console.log(item));

// buscar retorna -1 si no encuentra
arr.indexOf(item, from);
arr.lastIndexOf(item, from);
arr.includes(item, from);

//  find complejo
let result = arr.find((item, index) => item.index === index); // si no encuentra undefined

// filter
let results = arr.filter((item, index) => item.costo > 20); ["1", "2"]

// map
let results = arr.map((item, index) => {
  if(item.name == "Amburguesa") {
    item.name = "Hamburguesa";
    return item;
  }

  return item;
});

// split Y join
let str = "test";

let arreglo = ["t", "e", "s", "t"]

arreglo.join('') // test

////////////////////////////////////
////////////// DESTRUCTURACION
////////////////////////////////////

let options = {
  title: "Menu",
  height: 200,
  width: 100
};


let { title, ...rest } = options;

///

let arr = ["John", "Smith", "Gergia"];

let [ firstName, ...rest ] = arr;

const ciudad = arr[2];
const firstName = arr[0];