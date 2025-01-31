if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(
    function (posicion) {
      console.log(posicion);
      // desestruturación de obxectos
      const { latitude, longitude } = posicion.coords;
      console.log(`latitude: ${latitude}, lonxitude: ${longitude}`);

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
  /* geolocation IS NOT available */
}
