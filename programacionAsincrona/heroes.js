function leerFichero() {
  const json = xhr.reponse;

  console.log(json);

  let header = document.querySelector("header");
  let h1 = document.createElement("h1");
  header.append(h1);
}

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);
xhr.responseType = "json";
xhr.send();
xhr.addEventListener("load", leerFichero);
