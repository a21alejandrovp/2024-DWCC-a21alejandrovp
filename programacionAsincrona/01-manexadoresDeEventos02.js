const h1 = document.createElement("h1");
h1.innerText = "Título";
const button1 = document.createElement("input");
button1.type = "button";
button1.value = "Inicio";
button1.id = "button1";
const button2 = document.createElement("input");
button2.type = "button";
button2.value = "Fin";
button2.id = "button2";

const body = document.body;
body.append(h1);
body.append(button1);
body.append(button2);

let intervalId;

const intervalo = function intervalo() {
  const titulo = document.querySelector("h1");
  let cor = "red";

  intervalId = setInterval(() => {
    titulo.style.backgroundColor = cor;
    cor = cor === "red" ? "blue" : "red";
  }, 1000);
};

const pararIntervalo = function pararIntervalo() {
  clearInterval(intervalId);
};

button1.addEventListener("click", intervalo);
button2.addEventListener("click", pararIntervalo);
