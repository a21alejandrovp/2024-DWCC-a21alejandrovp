function mostrarTexto(parameter) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(parameter);
    }, 3000);
  });
}

let promise = mostrarTexto("Hola Mundo!");

promise.then(function (texto) {
  console.log(texto);
});
