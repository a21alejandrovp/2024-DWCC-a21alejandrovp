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

// const crearCalendario = function crearCalendario(elemento, ano, mes) {
//   // Array co nome dos días da semana (empezamos polo luns)
//   const diasSemana = [
//     "Luns",
//     "Martes",
//     "Mércores",
//     "Xoves",
//     "Venres",
//     "Sábado",
//     "Domingo",
//   ];

//   // Crear o obxecto Date para o primeiro día do mes (en formato ano, mes-1, 1)
//   const primeiroDiaDoMes = new Date(ano, mes - 1, 1);
//   // Determinar o día da semana do primeiro día (0 = Domingo, 1 = Luns, ..., 6 = Sábado)
//   const diaDeInicio = primeiroDiaDoMes.getDay();
//   const numeroDeDiasNoMes = new Date(ano, mes, 0).getDate(); // Número de días no mes

//   // Crear a táboa onde se vai mostrar o calendario
//   const tabela = document.createElement("table");
//   tabela.classList.add("calendario");

//   // Crear a cabeceira da táboa (nombres dos días da semana)
//   const cabecera = document.createElement("thead");
//   const filaCabecera = document.createElement("tr");
//   diasSemana.forEach((dia) => {
//     const th = document.createElement("th");
//     th.textContent = dia;
//     filaCabecera.append(th);
//   });
//   cabecera.append(filaCabecera);
//   tabela.append(cabecera);

//   // Crear o corpo da táboa
//   const corpo = document.createElement("tbody");
//   let fila = document.createElement("tr");

//   // Engadir días vacíos se o primeiro día do mes non é un luns
//   for (let i = 0; i < diaDeInicio; i++) {
//     const tdVacio = document.createElement("td");
//     fila.append(tdVacio);
//   }

//   // Engadir os días do mes
//   for (let dia = 1; dia <= numeroDeDiasNoMes; dia++) {
//     const td = document.createElement("td");
//     td.textContent = dia;

//     // Engadir clase 'hoxe' se o día é o día actual
//     const dataActual = new Date();
//     if (
//       dataActual.getFullYear() === ano &&
//       dataActual.getMonth() + 1 === mes &&
//       dataActual.getDate() === dia
//     ) {
//       td.classList.add("hoxe");
//     }

//     fila.append(td);

//     // Se se completou unha semana, engadir a fila ao corpo e crear unha nova
//     if ((dia + diaDeInicio) % 7 === 0) {
//       corpo.append(fila);
//       fila = document.createElement("tr");
//     }
//   }

//   // Engadir a última fila se non está vacía
//   if (fila.children.length > 0) {
//     corpo.append(fila);
//   }

//   tabela.append(corpo);
//   elemento.append(tabela);
// };

// crearCalendario(document.body, 2022, 11);

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
  console.log(ultimoDiaDoMes);

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
      } else {
        const td = document.createElement("td");
        td.innerText = dia;
        tr2.append(td);
        dia++;
      }
    }
    tbody.append(tr2);
  }
  ul.append(tbody);
  elemento.append(ul);
};

crearCalendario(document.body, 2022, 11);
