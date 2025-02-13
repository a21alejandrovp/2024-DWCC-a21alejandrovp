import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      isTrue: true,
      isFalse: false,
    };
  },
  methods: {
    toggle() {
      if (this.isTrue == true) {
        this.isTrue = false;
        this.isFalse = true;
      } else {
        this.isTrue = true;
        this.isFalse = false;
      }
    },
  },
}).mount("#app");
