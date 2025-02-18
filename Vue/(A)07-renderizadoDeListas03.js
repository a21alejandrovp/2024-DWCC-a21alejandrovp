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
      oculto: false,
    };
  },
  methods: {
    añadirPokemon() {
      this.iniciales.push({ id: id++, name: this.nuevoPokemon });
    },
    eliminarPokemon(e) {
      if (e.target.tagName === "LI") {
        console.log(this.iniciales);
        for (let i = 0; i < this.iniciales.length; i++) {
          if (e.target.innerText === this.iniciales[i].name) {
            let pos = i;
            this.iniciales.splice(pos, 1);
            e.target.remove();
            break;
          }
        }
      }
    },
    ocultarLista() {
      this.oculto = true;
    },
    mostrarLista() {
      this.oculto = false;
    },
  },
}).mount("#app");
