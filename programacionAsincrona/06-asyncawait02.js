async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 10;
}

async function imprimirResultado() {
  wait().then((resultado) => {
    console.log(resultado);
  });
}

imprimirResultado();
