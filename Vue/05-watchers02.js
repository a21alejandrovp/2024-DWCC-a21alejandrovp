import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      num1: 0,
      num2: 0,
      parImpar: "",
    };
  },
  computed: {
    sumar() {
      return this.num1 + this.num2;
    },
  },
  watch: {
    sumar() {
      this.parImpar = this.sumar % 2 == 0 ? "Par" : "Impar";
    },
  },
}).mount("#app");
