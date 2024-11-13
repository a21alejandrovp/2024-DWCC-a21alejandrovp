// EJERCICIOS DOM.PDF (https://mestre.iessanclemente.net/pluginfile.php/2049/mod_resource/content/65/DOM.pdf)
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

// RECORRIENDO EL DOM - EJERCICIO 1 - PÁGINA 7
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

const ageTable = document.getElementById("age-table");
console.log(ageTable);

// -------------------------------------------

const labelElements = document
  .getElementById("age-table")
  .getElementsByTagName("label");

for (const label of labelElements) {
  console.log(label);
}

// -------------------------------------------

const firstTableCell = document.getElementById("age-table").querySelector("td");
console.log(firstTableCell);

// -------------------------------------------

const nameForm = document.querySelector("form[name='search']");
console.log(nameForm);

// -------------------------------------------

const firstInput = document
  .querySelector("form[name='search']")
  .querySelector("input");
console.log(firstInput);
