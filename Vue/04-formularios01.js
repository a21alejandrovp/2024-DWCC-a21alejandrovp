import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      texto: "",
      checked: [],
      // checked0: "false",
      // checked1: "false",
      // checked2: "false",
      // checked3: "false",
      picked: "",
      selected: "",
    };
  },
}).mount("#div");
