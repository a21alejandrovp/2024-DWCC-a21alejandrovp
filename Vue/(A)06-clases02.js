import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      solid: "activa",
      dashed: "nonactiva",
    };
  },
  methods: {
    toggle(e) {
      if (e.target.classList == "activa") {
        e.target.classList.replace("activa", "nonactiva");
      } else {
        e.target.classList.replace("nonactiva", "activa");
      }
    },
  },
}).mount("#app");
