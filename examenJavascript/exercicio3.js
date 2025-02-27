const obtenerDatos = function obtenerDatos() {
  const fecha = new Date();

  let ampm = "";
  let horas = fecha.getHours();

  if (horas === 0) {
    horas = 12;
    ampm = "AM";
  } else if (horas > 12) {
    horas -= 12;
    ampm = "PM";
  } else {
    if (horas < 12) ampm = "AM";
    if (horas === 12) ampm = "PM";
  }

  horas = horas.toString().padStart(2, "0");
  const minutos = fecha.getMinutes().toString().padStart(2, "0");
  const segundos = fecha.getSeconds().toString().padStart(2, "0");

  const div = document.querySelector("div");
  div.innerText = `${horas}:${minutos}:${segundos} ${ampm}`;
};

const div = document.createElement("div");
document.body.append(div);
setInterval(obtenerDatos, 1000);
