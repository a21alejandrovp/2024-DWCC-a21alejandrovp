// EJERCICIOS DOM.PDF (https://mestre.iessanclemente.net/pluginfile.php/2049/mod_resource/content/65/DOM.pdf)
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

// CLONADO DE NODOS - EJERCICIO 3 - PÁGINA 22
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------

let taboa = document.getElementById("taboa");
taboa.remove();

// Como el texto "Texto" esta fuera de las celdas y filas de la tabla, el navegador lo interpreta como un nodo de texto independiente. Dado que el remove elimina las cabezeras, celdas y filas de una tabla, el texto no es eliminado.
