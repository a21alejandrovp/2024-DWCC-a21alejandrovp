// EJERCICIOS DOM.PDF (https://mestre.iessanclemente.net/pluginfile.php/2049/mod_resource/content/65/DOM.pdf)
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

// RECORRIENDO EL DOM - EJERCICIO 2 - PÁGINA 7
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

const input2 = document.getElementById("input2");
console.log(input2);

// -------------------------------------------

const paragrafos = document.getElementsByTagName("p");
console.log(paragrafos);

// -------------------------------------------

const paragrafosLipsum = document
  .getElementById("lipsum")
  .getElementsByTagName("p");

for (const p of paragrafosLipsum) {
  console.log(p);
}

// -------------------------------------------

const forms = document.getElementsByTagName("form");

for (const f of forms) {
  console.log(f);
}

// -------------------------------------------

const inputs = document.getElementsByTagName("input");

for (const i of inputs) {
  console.log(i);
}

// -------------------------------------------

const inputsSexo = document.querySelectorAll("input[name='sexo']");

for (const p of inputsSexo) {
  console.log(p);
}

inputsSexo.forEach((p) => {
  console.log(p);
});

// -------------------------------------------

const importantItems = document.getElementsByClassName("important");

for (const i of importantItems) {
  console.log(i);
}
