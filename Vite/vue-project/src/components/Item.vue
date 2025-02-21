<script>
export default {
  data() {
    return {
      message: "Ola mundo!",
    };
  },
  methods: {
    cambioTamano(e) {
      if (e.target.innerText == "To uppercase") {
        this.message = this.message.toUpperCase();
        e.target.innerText = "To lowercase";
      } else {
        this.message = this.message.toLowerCase();
        e.target.innerText = "To uppercase";
      }
    },

    // cambioTamano(e) {
    //   if (this.message === this.message.toUpperCase()) {
    //     this.message = this.message.toLowerCase();
    //     e.target.innerText = "To uppercase";
    //   } else {
    //     this.message = this.message.toUpperCase();
    //     e.target.innerText = "To lowercase";
    //   }
    // },

    anadirExclamacion() {
      this.message = this.message + "!";
    },
  },
};
</script>
<template>
  <h1>{{ message }}</h1>
  <button @click="cambioTamano">To uppercase</button>
  <button @click="anadirExclamacion">Añadir exclamacion</button>
</template>
<style></style>
