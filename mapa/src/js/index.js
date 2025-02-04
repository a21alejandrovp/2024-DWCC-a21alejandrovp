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
          "&current=temperature_2m&hourly=temperature_2m";

        console.log(url);

        const dvii = document.createElement("div");
        const dvi = document.createElement("div");
        dvi.style.display = "flex";
        dvi.style.height = "10%";
        dvi.style.width = "75%";
        dvi.style.border = "1px solid black";
        dvi.style.borderRadius = "25px";
        dvi.style.justifyContent = "center";
        dvi.style.alignItems = "center";
        dvi.style.margin = "10px";
        const div = document.createElement("div");
        const form = document.createElement("form");
        form.style.display = "flex";
        form.style.flexDirection = "column";
        form.style.justifyContent = "center";
        form.style.alignItems = "center";
        const label = document.createElement("label");
        label.for = "descripcion";
        label.innerText = "Descripción";
        const br = document.createElement("br");
        const input = document.createElement("input");
        input.type = "text";

        form.append(label, br, input);
        div.append(form);
        dvi.append(div);
        document.body.querySelector("div[id='marcadores']").append(dvi);

        // CODIGO DEL FORMULARIO
        const enviarFormulario = function enviarFormulario(e) {
          e.preventDefault();

          dvi.remove();
          const nuevoDiv = document.createElement("div");
          const p = document.createElement("p");
          p.innerText = input.value;
          p.style.margin = 0;

          nuevoDiv.append(p);

          fetch(url)
            .then((response) => {
              return response.json();
            })
            .then((json) => {
              console.log(json.current.temperature_2m);
              const p2 = document.createElement("p");
              p2.innerText = json.current.temperature_2m;
              p2.style.margin = 0;
              nuevoDiv.append(p2);

              if (json.current.temperature_2m < 15) {
                nuevoDiv.style.backgroundColor = "blue";
              } else if (
                json.current.temperature_2m >= 15 &&
                json.current.temperature_2m < 25
              ) {
                nuevoDiv.style.backgroundColor = "orange";
              } else {
                nuevoDiv.style.backgroundColor = "red";
              }
            });

          nuevoDiv.style.display = "flex";
          nuevoDiv.style.flexDirection = "column";
          nuevoDiv.style.height = "10%";
          nuevoDiv.style.width = "70%";
          nuevoDiv.style.border = "1px solid black";
          nuevoDiv.style.justifyContent = "center";
          nuevoDiv.style.alignItems = "center";
          nuevoDiv.style.margin = "10px";
          nuevoDiv.style.borderRadius = "25px";
          nuevoDiv.style.color = "white";

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
