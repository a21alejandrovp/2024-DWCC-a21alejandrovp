// EJERCICIOS OBXECTOS.PDF (https://mestre.iessanclemente.net/pluginfile.php/2048/mod_resource/content/63/Obxectos.pdf)

// STRINGS - EJERCICIO 1 - PÁGINA 4
// --------------------------------

// const cadea = "desenvolvemento web";
// const novaCadea = `${cadea.at(0).toUpperCase()}esenvolvemento web`;
// console.log(novaCadea);

// const cadea = "desenvolvemento web";
// const novaCadea = cadea.replace("d", "D");
// console.log(novaCadea);

// STRINGS - EJERCICIO 2 - PÁGINA 4
// --------------------------------

// function reverseString(cadea) {
//   let novaCadea = ``;

//   for (let i = cadea.length - 1; i >= 0; i--) {
//     novaCadea = `${novaCadea}${cadea.at(i)}`;
//   }

//   return novaCadea;
// }

// const nome = `Alejandro`;
// console.log(reverseString(nome));

// STRINGS - EJERCICIO 3 - PÁGINA 4
// --------------------------------

// function enmascarar(cadea) {
//   let novaCadea = "";
//   let i = cadea.length;

//   for (let j = 0; j < i; j++) {
//     if (j < i - 4) {
//       novaCadea = `${novaCadea}*`;
//     } else {
//       novaCadea = `${novaCadea}${cadea.at(j)}`;
//     }
//   }

//   return novaCadea;
// }

// const numeros = "49665110";
// console.log(enmascarar(numeros));

// NUMBER - EJERCICIO 1 - PÁGINA 5
// -------------------------------

// let num = 49665110;
// let cadeaNum = num.toString();
// console.log(cadeaNum.length);

// MATH - EJERCICIO 1.A - PÁGINA 6
// -------------------------------

// console.log(Math.floor(Math.random() * 4 ));

// MATH - EJERCICIO 1.B - PÁGINA 6
// -------------------------------

// console.log(Math.floor(Math.random() * 3 + 1));

// MATH - EJERCICIO 1.C - PÁGINA 6
// -------------------------------

// function numeroAleatorio(num1, num2) {
//   return Math.floor(Math.random() * (num2 + 1 - num1) + num1);
// }

// console.log(numeroAleatorio(5, 10));

// MATH- EJERCICIO 2 - PÁGINA 6
// ----------------------------

// function formato(min) {
//   let horas = "";
//   let minRestantes = "";

//   if (min / 60 > 0) {
//     horas = min / 60;
//     minRestantes = min % 60;
//   } else {
//     minRestantes = min;
//   }

//   return `Horas: ${horas}, Minutos: ${minRestantes}`;
// }

// console.log(formato(3600));

// MATH - EJERCICIO 3 - PÁGINA 6
// -----------------------------

// function area(radio) {
//   let area = Math.PI * radio;
//   return area;
// }

// console.log(area(4));

//
//
//
//
// POR HACER (DATE, ARRAYS)
//
//
//
//

// DATE - EJERCICIO 1 - PÁGINA 8
// -----------------------------

// let data = new Date("2024-07-25");
//
// const nomesDias = [
//   "Domingo",
//   "Luns",
//   "Martes",
//   "Mércores",
//   "Xoves",
//   "Venres",
//   "Sábado",
// ];
//
// console.log(nomesDias[data.getDay()]);

// DATE - EJERCICIO 2 - PÁGINA 8
// -----------------------------

// function numeroDiasMes(mes, ano) {
//   let data = new Date(ano, mes, 0);
//   return data.getDate();
// }
//
// console.log(numeroDiasMes(2, 2024));

// DATE - EJERCICIO 3 - PÁGINA 8
// -----------------------------

// function eFinSemana(data) {
//   if (data.getDay() == 0 || data.getDay() === 6) return true;
//   else return false;
// }
//
// console.log(eFinSemana(new Date("2024-09-12")));

// DATE - EJERCICIO 4 - PÁGINA 8
// -----------------------------

// function diasTranscurridos(data) {
//   let primeiroDiaAno = new Date(data.getFullYear(), 0, 1);
//
//   let diferencia = data - primeiroDiaAno;
//   return Math.floor(diferencia / (1000 * 60 * 60 * 24));
// }
//
// console.log(diasTranscurridos(new Date(2024, 9, 11)));
// console.log(diasTranscurridos(new Date(2024, 0, 11)));

// ARRAYS - EJERCICIO 1 - PÁGINA 10
// --------------------------------
// POR TERMINAR

// const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];

// function indices(elemento, arrayElementos) {
//   let newArrayElementos = [];

//   for (let i = 0; i < arrayElementos.length; i++) {
//     if (arrayElementos[i] === elemento) {
//       newArrayElementos.push(i);
//     }

//     return newArrayElementos;
//   }
// }

// console.log(indices(1, numeros));

//
//
//
//
// ACTUALIZADO
//
//
//
//

// OBJETOS - EJERCICIO 1 - PÁGINA 23
// ---------------------------------

// const television = {
//   marca: "LG",
//   categoría: "televisores",
//   unidades: 4,
//   prezo: 354.99,
//   importe() {
//     prezoTotalUnidades = this.prezo * this.unidades;
//     console.log(prezoTotalUnidades);
//   },
// };

// console.log(television);
// television.importe();

// OBJETOS - EJERCICIO 2 - PÁGINA 23
// ---------------------------------

// const game = {
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const {
//   odds: { team1, x, team2 },
// } = game;
// console.log(team1, x, team2);

// OBJETOS - EJERCICIO 3.A - PÁGINA 23
// -----------------------------------

// const game = {
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
// };

// for (const [key, value] of Object.entries(game.scored)) {
//   console.log(`Gol ${parseInt(key) + 1}: ${value}`);
// }

// OBJETOS - EJERCICIO 3.B - PÁGINA 23
// -----------------------------------
