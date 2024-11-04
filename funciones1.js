// EJERCICIO 1 - PÁGINA 36 (PDF SINTAXE)
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------

// function desconto(prezo, desconto) {
//   prezoFinal = prezo - (prezo * desconto) / 100;
//   return prezoFinal;
// }

// a = 200;
// b = 25;
// console.log(desconto(a, b));

// EJERCICIOS FUNCIÓNS.PDF (https://mestre.iessanclemente.net/pluginfile.php/18502/mod_resource/content/67/Funci%C3%B3ns.pdf)
// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------

// FUNCIONES - EJERCICIO 1 - PÁGINA 9
// ----------------------------------
// ----------------------------------
// ----------------------------------
// ----------------------------------

// const cubo = (valor) => {
//   return valor * valor * valor;
// };

// console.log(cubo(5));

// FUNCIONES - EJERCICIO 2 - PÁGINA 9
// ----------------------------------
// ----------------------------------
// ----------------------------------
// ----------------------------------

// const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];

// const numerosImpares = (array) => {
//   const arraySalida = [];

//   for (const num of array) {
//     if (num % 2 != 0) {
//       arraySalida.push(num);
//     }
//   }

//   return arraySalida;
// };

// console.log(numerosImpares(arrayEntrada)); // (4) [3, 5, 7, 23]

// FUNCIONES - EJERCICIO 3 - PÁGINA 9
// ----------------------------------
// ----------------------------------
// ----------------------------------
// ----------------------------------

// const suma = (...array) => {
//   let suma = 0;

//   for (const num of array) {
//     suma += num;
//   }

//   return suma;
// };

// console.log(suma(3, 10, 1));

// FUNCIONES - EJERCICIO 4 - PÁGINA 9
// ----------------------------------
// ----------------------------------
// ----------------------------------
// ----------------------------------

// const media = function (...array) {
//   let length = 0;
//   let suma = 0;

//   for (const num of array) {
//     suma += num;
//     length += 1;
//   }

//   return suma / length;
// };

// console.log(media(5, 6, 3, 8));

// FUNCIONES - EJERCICIO 5 - PÁGINA 9
// ----------------------------------
// ----------------------------------
// ----------------------------------
// ----------------------------------

// const minMax = (array) => {
//   const objeto = {
//     Min: Math.min(...array),
//     Max: Math.max(...array),
//   };

//   return objeto;
// };

// console.log(minMax([1, 2, 3, 4, 5]));

// FUNCIONES - EJERCICIO 6 - PÁGINA 9
// ----------------------------------
// ----------------------------------
// ----------------------------------
// ----------------------------------

// const area = (function (lado, altura) {
//   return lado * altura;
// })(2, 3);

// console.log(area);

// FUNCIONES - EJERCICIO 7 - PÁGINA 9
// ----------------------------------
// ----------------------------------
// ----------------------------------
// ----------------------------------

// const comprobarDNI = (DNI) => {
//   const numDNI = DNI.substring(0, 8);
//   const letraDNI = DNI.charAt(8);

//   const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
//   const resto = numDNI % 23;

//   if (letras.charAt(resto) === letraDNI) {
//     return "El DNI es válido.";
//   } else {
//     return "El DNI no es válido.";
//   }
// };

// console.log(comprobarDNI("49665110Z"));

// FUNCIONES - EJERCICIO 8 - PÁGINA 9
// ----------------------------------
// ----------------------------------
// ----------------------------------
// ----------------------------------

// const cambio = (num) => {
//   billetes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
//   let resto = 0;
//   array = [];

//   for (let i = 0; i < billetes.length; i++) {
//     if (num >= billetes[i]) {
//       let x = Math.floor(num / billetes[i]);
//       array.push(billetes[i] + ": " + x);
//       resto = num % billetes[i];
//       num = resto;
//     } else {
//       array.push(billetes[i] + ": " + 0);
//     }
//   }

//   return array;
// };

// console.log(cambio(6969));

// FUNCIONES - EJERCICIO 9 - PÁGINA 9
// ----------------------------------
// ----------------------------------
// ----------------------------------
// ----------------------------------

const buscarPatron = (texto, patron) => {
  let long = patron.length;
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < long; j++) {
      if (texto[i] == patron[j]) {
        i++;
      }

      if (i == long) {
        contador++;
        break;
      }
    }
  }

  console.log(contador);
};

console.log(buscarPatron("ABCD2139II0ABCABCLA", "ABC"));

//
//
//
//
// POR HACER (FUNCIONES 9, 10 Y 11 - PÁGINAS 9, 10 Y 11)
//
//
//
//

// MÉTODOS DE ARRAYS - EJERCICIO 1 - PAǴINA 22
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

// const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

// let valores = objects.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.price,
//   0
// );

// console.log(valores);

// MÉTODOS DE ARRAYS - EJERCICIO 2 - PÁGINA 22
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

// numbers = [3, 5, 19, 0, 65, 29];
// let minNumber = numbers.reduce(
//   (number, actualValue) => (number > actualValue ? number : actualValue),
//   0
// );
// console.log(minNumber);

// MÉTODOS DE ARRAYS - EJERCICIO 1.A - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const persoas = [
//   { nome: "aaron", idade: 65, id: 1 },
//   { nome: "beth", idade: 2, id: 2 },
//   { nome: "ánxeles", idade: 13, id: 3 },
//   { nome: "daniel", idade: 3, id: 4 },
//   { nome: "ada", idade: 25, id: 5 },
//   { nome: "erea", idade: 1, id: 6 },
//   { nome: "navia", idade: 43, id: 7 },
// ];

// const maioresDeIdade = persoas.filter((x) => x.idade >= 18);
// console.log(maioresDeIdade);

// MÉTODOS DE ARRAYS - EJERCICIO 1.B - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const nomesPersoas = persoas.map((x) => x.nome);
// console.log(nomesPersoas);

// MÉTODOS DE ARRAYS - EJERCICIO 1.C - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const nomesEnMaiusculas = persoas.map((x) => x.nome.toUpperCase());
// console.log(nomesEnMaiusculas);

// MÉTODOS DE ARRAYS - EJERCICIO 1.D - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const idENome = persoas.map((x) => ({ Nome: x.nome, ID: x.id }));
// console.log(idENome);

// MÉTODOS DE ARRAYS - EJERCICIO 2.A - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const diasSemana = [
//   "lunes",
//   "martes",
//   "miércoles",
//   "jueves",
//   "viernes",
//   "sábado",
//   "domingo",
// ];

// const empezanPorM = diasSemana.filter((x) => x.startsWith("m"));
// console.log(empezanPorM);

// MÉTODOS DE ARRAYS - EJERCICIO 2.B - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// OPCIÓN 1
// --------
// --------
// --------
// --------
// if (diasSemana.filter((x) => x.startsWith("s")).length != 0) {
//   console.log("HAY algún día de la semana que empieza por 'S'");
// } else {
//   console.log("NO HAY ningún día de la semana que empieza por 'S'");
// }

// OPCIÓN 2
// --------
// --------
// --------
// --------
// const empiezaPorS = (x) => x.charAt(0) == "s";

// if (diasSemana.some(empiezaPorS) == true) {
//   console.log("HAY algún día de la semana que empieza por 'S'");
// } else {
//   console.log("NO HAY ningún día de la semana que empieza por 'S'");
// }

// MÉTODOS DE ARRAYS - EJERCICIO 2.C - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const acabanEnS = (x) => x.charAt(length - 1) == "s";

// if (diasSemana.every(acabanEnS) == true) {
//   console.log("TODOS los días de la semana acaban en 'S'");
// } else {
//   console.log("NO TODOS los días de la semana acaban en 'S'");
// }

// MÉTODOS DE ARRAYS - EJERCICIO 2.D - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const primeiroPorM = (x) => x.charAt(0) == "m";
// console.log(diasSemana.find(primeiroPorM));

// MÉTODOS DE ARRAYS - EJERCICIO 2.E - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const primeiroPorM = (x) => x.charAt(0) == "m";
// console.log(diasSemana.findIndex(primeiroPorM));

// MÉTODOS DE ARRAYS - EJERCICIO 2.F - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const arrayConMayusculas = diasSemana.map(
//   (x) => x.charAt(0).toUpperCase() + x.substring(1, x.length)
// );
// console.log(arrayConMayusculas);

// MÉTODOS DE ARRAYS - EJERCICIO 3 - PÁGINA 23
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

// const notas = [4, 10, 15, 9, 6, 2];

// function compare(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// const notasOrdenadas = notas.sort(compare);
// console.log(notasOrdenadas);

// MÉTODOS DE ARRAYS - EJERCICIO 4 - PÁGINA 23
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

// const notas = [4, 10, 15, 9, 6, 2];

// function compare(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// const notaMax = notas.sort(compare).findLast((x) => x);
// console.log(notaMax);

// MÉTODOS DE ARRAYS - EJERCICIO 5.A - PÁGINA 24
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const inventors = [
//   { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
//   { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
//   { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
//   { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
//   { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
//   { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
//   { first: "Max", last: "Planck", year: 1858, passed: 1947 },
//   { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
//   { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
//   { first: "Sarah", last: "Goode", year: 1855, passed: 1905 },
//   { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
//   { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
// ];

// const seculoXVI = inventors.filter((x) => x.year > 1800 && x.year < 1901);
// console.log(seculoXVI);

// MÉTODOS DE ARRAYS - EJERCICIO 5.B - PÁGINA 24
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const nomesCompletos = inventors.map((x) => x.first + " " + x.last);
// console.log(nomesCompletos);

// MÉTODOS DE ARRAYS - EJERCICIO 5.C - PÁGINA 24
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const nomesCompletosOrdenadosPorApellido = nomesCompletos.sort((x, y) => {
//   const xLast = x.split(" ");
//   const yLast = y.split(" ");

//   if (xLast[1] < yLast[1]) {
//     return -1;
//   } else if (xLast[1] > yLast[1]) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// console.log(nomesCompletosOrdenadosPorApellido);

// MÉTODOS DE ARRAYS - EJERCICIO 5.D - PÁGINA 24
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const iventorsOrdenadosPorApellidos = inventors
//   .sort((x, y) => {
//     const xLast = x.last;
//     const yLast = y.last;

//     if (xLast < yLast) {
//       return -1;
//     } else if (xLast > yLast) {
//       return 1;
//     } else {
//       return 0;
//     }
//   })
//   .map((x) => x.first + " " + x.last);
// console.log(iventorsOrdenadosPorApellidos);

// MÉTODOS DE ARRAYS - EJERCICIO 5.E - PÁGINA 24
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const inventorsOrdenadosPorFechaDeNacimiento = inventors.sort((x, y) => {
//   xDate = x.year;
//   yDate = y.year;

//   if (xDate > yDate) {
//     return 1;
//   } else if (xDate < yDate) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

// console.log(inventorsOrdenadosPorFechaDeNacimiento);

// MÉTODOS DE ARRAYS - EJERCICIO 5.F - PÁGINA 24
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const sumaDosAnos = inventors.reduce(
//   (accumulator, currentValue) =>
//     accumulator + currentValue.passed - currentValue.year,
//   0
// );

// console.log(sumaDosAnos);

// MÉTODOS DE ARRAYS - EJERCICIO 5.G - PÁGINA 24
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const maisLonxevos = inventors.sort((x, y) => {
//   xAge = x.passed - x.year;
//   yAge = y.passed - y.year;

//   if (xAge < yAge) {
//     return 1;
//   } else if (xAge > yAge) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

// console.log(maisLonxevos);

// MÉTODOS DE ARRAYS - EJERCICIO 6 - PÁGINA 24
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];
