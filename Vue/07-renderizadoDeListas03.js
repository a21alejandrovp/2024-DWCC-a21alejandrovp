import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

let id = 0;

createApp({
  data() {
    return {
      iniciales: [
        { id: id++, name: "Charmander" },
        { id: id++, name: "Pikachu" },
        { id: id++, name: "Squirtle" },
        { id: id++, name: "Venusaur" },
      ],
      nuevoPokemon: "",
    };
  },
  methods: {
    añadirPokemon() {
      this.iniciales.push(this.nuevoPokemon);
      console.log(this.iniciales);
    },
    eliminarPokemon(e) {
      console.log(e.target.value);
    },
  },
}).mount("#app");
