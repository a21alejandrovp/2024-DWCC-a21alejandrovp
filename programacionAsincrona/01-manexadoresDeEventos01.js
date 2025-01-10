// const escribirNumeros = function escribirNumeros(desde, ata) {
//   let contador = desde;

//   const intervalo = setInterval(() => {
//     console.log(contador);
//     contador++;

//     if (contador > ata) {
//       clearInterval(intervalo);
//     }
//   }, 1000);
// };

const escribirNumeros = function (desde, ata) {
  let contador = desde;

  for (let i = 0; i <= ata - desde; i++) {
    setTimeout(() => {
      console.log(contador);
      contador++;
    }, 1000 * i);
  }
};

escribirNumeros(1, 5);
