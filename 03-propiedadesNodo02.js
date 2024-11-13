// EJERCICIOS DOM.PDF (https://mestre.iessanclemente.net/pluginfile.php/2049/mod_resource/content/65/DOM.pdf)
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

// PROPIEDADES DE UN NODO - EJERCICIO 2 - PÁGINA 17
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

const enlaces = document.getElementsByTagName("a");
const enlacesLen = enlaces.length;
console.log(enlacesLen);

// ------------------------------------------------

const penultima = document.body.querySelectorAll("a")[enlacesLen - 2];
console.log(penultima);

console.log(document.documentElement);

// ------------------------------------------------

const ligazonsProba = document.getElementsByTagName("a");
let contador = 0;

for (const a of ligazonsProba) {
  if ((a.href = "http://proba")) {
    contador++;
  }
}

// ------------------------------------------------

// SEGUIR EN EL APARTADO 4
