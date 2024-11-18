// EJERCICIOS DOM.PDF (https://mestre.iessanclemente.net/pluginfile.php/2049/mod_resource/content/65/DOM.pdf)
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

// CLONADO DE NODOS - EJERCICIO 7 - PÁGINA 23
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------

const crearCalendario = function crearCalendario(elemento, ano, mes) {
  const diasSemana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const primeiroDiaDoMes = new Date(ano, mes - 1, 1);
  const diaDeInicio = primeiroDiaDoMes.getDay(); // = 2 ya que es un miércoles
  let dia = 1;
  const ultimoDiaDoMes = new Date(ano, mes, 0);
  const diaDeFin = ultimoDiaDoMes.getDate();
  console.log(diaDeFin);

  const ul = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  ul.append(thead);
  thead.append(tr);

  for (const dia of diasSemana) {
    const th = document.createElement("th");
    th.textContent = dia;
    tr.append(th);
  }

  let contador = 0;
  const tbody = document.createElement("tbody");
  for (let i = 0; i < 5; i++) {
    const tr2 = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (contador < diaDeInicio) {
        const td = document.createElement("td");
        tr2.append(td);
        contador++;
      } else if (dia <= diaDeFin) {
        const td = document.createElement("td");
        td.innerText = dia;
        tr2.append(td);
        dia++;
        contador++;
      } else {
        const td = document.createElement("td");
        tr2.append(td);
      }
    }
    tbody.append(tr2);
  }
  ul.append(tbody);
  elemento.append(ul);
};

crearCalendario(document.body, 2022, 2);
