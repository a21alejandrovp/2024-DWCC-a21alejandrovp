if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function (posicion) {
      const { latitude, longitude } = posicion.coords;
      const map = L.map("map", { center: [latitude, longitude], zoom: 17 });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
    },
    function (error) {
      console.log(`ERROR(${error.code}): ${error.message}`);
    }
  );
} else {
  window.alert("La geolocalización no está disponible");
}

// const generarFormulario = function generarFormulario() {
//   const div = document.createElement("div");
//   const form = document.createElement("form");
//   const label = document.createElement("label");
//   label.for = "descripcion";
//   label.innerText = "Descripción";
//   const br = document.createElement("br");
//   const input = document.createElement("input");
//   input.type = "text";

//   form.append(label, br, input);
//   div.append(form);
//   document.body.querySelector("div[id='map']").append(div);
// };

// const funcionalidad1 = document
//   .querySelector("div[id='map']")
//   .addEventListener("click", generarFormulario);
