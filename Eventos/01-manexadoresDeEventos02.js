// EJERCICIOS EVENTOS.PDF (https://mestre.iessanclemente.net/pluginfile.php/2051/mod_resource/content/67/Eventos.pdf)
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------

// MANEJADORES DE EVENTOS - EJERCICIO 2 - PÁGINA 5
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------

const valorTexto = function valorTexto() {
  const value = document.querySelector("input[id='text']").value;
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = value;
  ul.append(li);
};

const añadirLista = document
  .querySelector("input[id='button']")
  .addEventListener("click", valorTexto);
