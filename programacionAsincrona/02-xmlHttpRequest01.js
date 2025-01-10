function leerFicheiro() {
  const json = xhr.response;

  let nombres = "Os nomes das gatas son ";

  for (let i = 0; i < json.length - 1; i++) {
    nombres = nombres + json[i].name + ", ";
  }
  nombres = nombres.substring(0, nombres.length - 2);
  nombres = nombres + " e " + json[json.length - 1].name;

  console.log(nombres);

  let gatiños = "Hay ";
  let contadorM = 0;
  let contadorF = 0;

  for (let i = 0; i < json.length; i++) {
    for (let j = 0; j < json[i].kittens.length; j++) {
      if (json[i].kittens[j].gender == "f") {
        contadorF++;
      } else {
        contadorM++;
      }
    }
  }

  let contador = contadorM + contadorF;

  console.log(
    "Hay " +
      contador +
      " gatiños: " +
      contadorF +
      " femias e " +
      contadorM +
      " machos"
  );
}

const xhr = new XMLHttpRequest();
xhr.open("GET", "sample.json");
xhr.responseType = "json";
xhr.send();
xhr.addEventListener("load", leerFicheiro);
