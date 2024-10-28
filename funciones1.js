// EJERCICIO 1 - PÁGINA 36 (PDF SINTAXE)
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

// FUNCIONES - EJERCICIO 1 - PÁGINA 9
// ----------------------------------
// ----------------------------------

// const cubo = (valor) => {
//   return valor * valor * valor;
// };

// console.log(cubo(5));

// FUNCIONES - EJERCICIO 2 - PÁGINA 9
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

// const area = (function (lado, altura) {
//   return lado * altura;
// })(2, 3);

// console.log(area);

// FUNCIONES - EJERCICIO 7 - PÁGINA 9
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

// const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

// let valores = objects.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.price,
//   0
// );

// console.log(valores);

// MÉTODOS DE ARRAYS - EJERCICIO 2 - PÁGINA 22
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

// const nomesPersoas = persoas.map((x) => x.nome);
// console.log(nomesPersoas);

// MÉTODOS DE ARRAYS - EJERCICIO 1.C - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------

// const nomesEnMaiusculas = persoas.map((x) => x.nome.toUpperCase());
// console.log(nomesEnMaiusculas);

// MÉTODOS DE ARRAYS - EJERCICIO 1.D - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------

// const idENome = persoas.map((x) => ({ Nome: x.nome, ID: x.id }));
// console.log(idENome);

// MÉTODOS DE ARRAYS - EJERCICIO 2.A - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------

const diasSemana = [
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo",
];

// const empezanPorM = diasSemana.filter((x) => x.startsWith("m"));
// console.log(empezanPorM);

// MÉTODOS DE ARRAYS - EJERCICIO 2.B - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------

// OPCIÓN 1
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
// const empiezaPorS = (x) => x.charAt(0) == "s";

// if (diasSemana.some(empiezaPorS) == true) {
//   console.log("HAY algún día de la semana que empieza por 'S'");
// } else {
//   console.log("NO HAY ningún día de la semana que empieza por 'S'");
// }

// MÉTODOS DE ARRAYS - EJERCICIO 2.C - PÁGINA 23
// ---------------------------------------------
// ---------------------------------------------

// const acabanEnS = (x) => x.charAt(length) == "s";

// if (diasSemana.every(acabanEnS) == true) {
//   console.log("TODOS los días de la semana acaban en 'S'");
// } else {
//   console.log("NO TODOS los días de la semana acaban en 'S'");
// }
