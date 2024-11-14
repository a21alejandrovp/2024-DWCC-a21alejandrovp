// EJERCICIOS DOM.PDF (https://mestre.iessanclemente.net/pluginfile.php/2049/mod_resource/content/65/DOM.pdf)
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

// PROPIEDADES DE UN NODO - EJERCICIO 1 - PÁGINA 16
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

const body = document.querySelector("body");
const form = body.querySelector("form");
const formLabel = form.getElementsByTagName("label")[3];

console.log(formLabel.innerHTML);
console.log(formLabel.innerText);
console.log(formLabel.textContent);

// ------------------------------------------------

const value = formLabel.querySelector("input").value;
console.log(value);

// ------------------------------------------------

const valueChecked = formLabel.querySelector("input:checked").value;
console.log(valueChecked);

// ------------------------------------------------

const ul = body.querySelector("ul");
const liGroup = ul.getElementsByTagName("li");

for (const li of liGroup) {
  console.log(li.textContent);
}

// ------------------------------------------------

console.log(liGroup.length);

// ------------------------------------------------

const div1 = body.querySelector("div");
const div2 = div1.querySelector("div");
console.log(div2.dataset.widgetName);
