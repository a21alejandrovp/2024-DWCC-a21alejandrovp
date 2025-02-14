import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  computed: {
    numsPares() {
      return this.nums.filter((i) => i % 2 == 0);
    },
  },
}).mount("#app");
