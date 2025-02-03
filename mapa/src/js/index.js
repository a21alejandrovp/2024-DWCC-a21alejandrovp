let map;

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function (posicion) {
      const { latitude, longitude } = posicion.coords;
      map = L.map("map", { center: [latitude, longitude], zoom: 17 });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const generarMarcador = function generarMarcador(lugarDelClick) {
        let marker = L.marker([
          lugarDelClick.latlng.lat,
          lugarDelClick.latlng.lng,
        ]).addTo(map);

        let url =
          "https://api.open-meteo.com/v1/forecast?latitude=" +
          lugarDelClick.latlng.lat +
          "&longitude=" +
          lugarDelClick.latlng.lng +
          "&hourly=temperature_2m&timezone=America%2FAnchorage";

        // fetch(url); SEGUIR AQUI

        const div = document.createElement("div");
        const form = document.createElement("form");
        const label = document.createElement("label");
        label.for = "descripcion";
        label.innerText = "Descripción";
        const br = document.createElement("br");
        const input = document.createElement("input");
        input.type = "text";

        form.append(label, br, input);
        div.append(form);
        document.body.querySelector("div[id='marcadores']").append(div);

        // CODIGO DEL FORMULARIO
        const enviarFormulario = function enviarFormulario(e) {
          e.preventDefault();

          div.remove();
          const nuevoDiv = document.createElement("div");
          const p = document.createElement("p");
          p.innerText = input.value;

          nuevoDiv.append(p);
          document.body.querySelector("div[id='marcadores']").append(nuevoDiv);

          console.log(input.value);
        };

        form.addEventListener("submit", enviarFormulario);
      };

      map.on("click", generarMarcador);
    },
    function (error) {
      console.log(`ERROR(${error.code}): ${error.message}`);
    }
  );
} else {
  window.alert("La geolocalización no está disponible");
}
