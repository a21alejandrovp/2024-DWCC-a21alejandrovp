import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      claseAclaseB: "",
      isFalse: false,
    };
  },
  methods: {
    recogerTexto(e) {
      this.claseAclaseB = e.target.value;
    },

    ocultarParrafo(e) {
      if (this.isFalse == false) {
        this.isFalse = true;
        e.target.innerText = "Mostrar";
      } else {
        this.isFalse = false;
        e.target.innerText = "Ocultar";
      }
    },
  },
}).mount("#app");
