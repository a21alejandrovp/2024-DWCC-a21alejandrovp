import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      texto: "",
    };
  },
  methods: {
    getText(evento) {
      this.texto = evento.target.value;
    },
  },
}).mount("#body");
