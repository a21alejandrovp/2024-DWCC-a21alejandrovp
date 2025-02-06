// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;
const { createApp } = Vue;
createApp({
  data() {
    return {
      message: "Ola mundo!",
    };
  },
}).mount("#app");
