// EJERCICIOS DOM.PDF (https://mestre.iessanclemente.net/pluginfile.php/2049/mod_resource/content/65/DOM.pdf)
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

// CLONADO DE NODOS - EJERCICIO 5 - PÁGINA 22
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------

const ul = document.querySelector("ul");
const one = document.querySelector("li[id=one]");
let a = 3;

for (let i = 0; i < 2; i++) {
  const li = document.createElement("li");
  li.innerText = a;
  a--;
  one.after(li);
}
