// EJERCICIOS EVENTOS.PDF (https://mestre.iessanclemente.net/pluginfile.php/2051/mod_resource/content/67/Eventos.pdf)
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------

// MANEJADORES DE EVENTOS - EJERCICIO 1 - PÁGINA 5
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------

const cambiarClase = function cambiarClase() {
  const span = document.getElementById("adicional").classList.toggle("oculto");
  const ligazon = document.getElementById("ligazon").classList.toggle("oculto");
};

const mostrarSpan = document
  .getElementById("ligazon")
  .addEventListener("click", cambiarClase);
