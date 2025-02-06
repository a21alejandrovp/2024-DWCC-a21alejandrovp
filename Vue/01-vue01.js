import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    const cadea = "<b>Cadena de ejemplo</b>";
    const number = 29;
    const array = [0, 1, 2];
    const objeto = {
      id: "0",
      nombre: "objeto0",
    };
    return {
      cadea,
      number,
      array,
      objeto,
      nuevoId: 29,
      nuevoIdClase: { id: "29", class: "veintinueve" },
    };
  },
}).mount("#app");
