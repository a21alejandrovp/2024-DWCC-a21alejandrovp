import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    let count = 0;
    return {
      nome: "Alejandro",
      ano: new Date().getFullYear(),
      src: "/Images/phanpy.jpeg",
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
}).mount("#body");
