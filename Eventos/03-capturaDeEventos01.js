// EJERCICIOS EVENTOS.PDF (https://mestre.iessanclemente.net/pluginfile.php/2051/mod_resource/content/67/Eventos.pdf)
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------

// PROPAGACIÓN E CAPTURA DE EVENTOS - EJERCICIO 1 - PÁGINA 14
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------

// const eliminarPane = document
//   .getElementById("container")
//   .addEventListener("click", (event) => {
//     if (event.target.closest("button")) {
//       event.target.closest("div").remove();
//     }
//   });

const eliminarPane1 = document
  .getElementById("container")
  .addEventListener("click", (event) => {
    console.log(event.target.tagName);
    if (event.target.tagName == "BUTTON") {
      event.target.closest("div").remove();
    }
  });
