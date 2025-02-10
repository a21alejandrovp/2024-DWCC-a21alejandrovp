import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      message: "Ola mundo!",
      pokemon: "Pikachu",
      paragrafo: "",
      paragrafo2: "",
    };
  },
  methods: {
    mensaxePorConsola() {
      console.log(this.pokemon);
    },
    escribirParagrafo(e) {
      this.paragrafo = e.target.value;
    },
    escribirParagrafo2(e) {
      this.paragrafo2 = e.target.value;
    },
    borrarInput(e) {
      e.target.value = "";
    },
  },
}).mount("#app");
