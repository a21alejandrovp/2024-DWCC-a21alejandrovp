// EJERCICIOS EVENTOS.PDF (https://mestre.iessanclemente.net/pluginfile.php/2051/mod_resource/content/67/Eventos.pdf)
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------

// MANEJADORES DE EVENTOS - EJERCICIO 5 - PÁGINA 6
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------

const click = document
  .querySelector("img")
  .addEventListener("click", console.log("Click"));
const dbclick = document
  .querySelector("img")
  .addEventListener("dbclick", console.log("dbclick"));
const contextmenu = document
  .querySelector("img")
  .addEventListener("contextmenu", console.log("contextmenu"));
const mousedown = document
  .querySelector("img")
  .addEventListener("mousedown", console.log("mousedown"));
const moseup = document
  .querySelector("img")
  .addEventListener("mouseup", console.log("mouseup"));
const mouseover = document
  .querySelector("img")
  .addEventListener("mouseover", console.log("mouseover"));
const mouseout = document
  .querySelector("img")
  .addEventListener("mouseout", console.log("mouseout"));
const dragstart = document
  .querySelector("img")
  .addEventListener("dragstart", console.log("dragstart"));
const drag = document
  .querySelector("img")
  .addEventListener("drag", console.log("drag"));
const dragend = document
  .querySelector("img")
  .addEventListener("dragend", console.log("dragend"));
