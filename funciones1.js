function desconto(prezo, desconto) {
  prezoFinal = prezo - (prezo * desconto) / 100;
  return prezoFinal;
}

a = 200;
b = 25;
console.log(desconto(a, b));
