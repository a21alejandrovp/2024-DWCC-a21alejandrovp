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
