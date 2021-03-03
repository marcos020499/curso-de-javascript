/////////////////////////////////////////////////////////////////////////////////////

// 1- Escribe una función filterRange(arr, a, b) que obtenga un array arr,
//  busque los elementos con valor mayor o igual a a y menor o igual a b y devuelva un array con los resultados.
//  La función no debe modificar el array. Debe devolver un nuevo array.

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {
  // código aquí
}

console.log(filtered); // 3,1 (valores dentro del rango)

/////////////////////////////////////////////////////////////////////////////////////

// 2- Tienes un array de objetos user, cada uno tiene user.name. Escribe el código que lo convierta en un array de nombres.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let names = /* ... tu código */

console.log(names); // John, Pete, Mary

/////////////////////////////////////////////////////////////////////////////////////

// 3- Tienes un array de objetos user, cada uno tiene name, surname e id.
//  Escribe el código para crear otro array a partir de este,
//  de objetos con id y fullName, donde fullName es generado a partir de name y surname.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let usersMapped = /* ... tu código ... */

console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith
console.log(usersMapped) /*
                          [
                            { fullName: "John Smith", id: 1 },
                            { fullName: "Pete Hunt", id: 2 },
                            { fullName: "Mary Key", id: 3 }
                          ]
*/

/////////////////////////////////////////////////////////////////////////////////////

// 3- Crea una función unique(arr) que devuelva un array con los elementos que se encuentran una sola vez dentro de arr.

function unique(arr) {
  /* tu código */
}

let nombres = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":D"
];

console.log(unique(nombres)); // Hare, Krishna, :D

