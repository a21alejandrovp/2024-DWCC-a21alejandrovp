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
// -----------------------------

// console.log(Math.ceil(Math.random() * 3));

// MATH - EJERCICIO 1.B - PÁGINA 6
// -----------------------------

// console.log(Math.ceil(Math.random() * 2 + 1));

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

// DATE - EJERCICIO 1 - PÁGINA 8
// -----------------------------
