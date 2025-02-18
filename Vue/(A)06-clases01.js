import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      isTrue: true,
      esVerdadero: true,
      greenRed: "red",
    };
  },
  methods: {
    toggle() {
      // if (this.isTrue == true) {
      //   this.isTrue = false;
      //   this.isFalse = true;
      // } else {
      //   this.isTrue = true;
      //   this.isFalse = false;
      // }

      this.greenRed == "red"
        ? (this.greenRed = "green")
        : (this.greenRed = "red");
    },
    toggle1() {
      if (this.esVerdadero == true) {
        this.esVerdadero = false;
      } else {
        this.esVerdadero = true;
      }
    },
  },
}).mount("#app");
