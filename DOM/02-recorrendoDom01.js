// EJERCICIOS DOM.PDF (https://mestre.iessanclemente.net/pluginfile.php/2049/mod_resource/content/65/DOM.pdf)
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

// RECORRIENDO EL DOM - EJERCICIO 1 - PÁGINA 11
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------

const divs = document.getElementsByTagName("div");

for (const d of divs) {
  console.log(d);
}

// --------------------------------------------

const uls = document.getElementsByTagName("ul");

for (const ul of uls) {
  console.log(ul);
}

// --------------------------------------------

const li1 = document.getElementsByTagName("li")[1];
console.log(li1);
