// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import Fooditem from "./components/Fooditem.vue";

// createApp(App).mount("#app");

const app = createApp(App);
app.component("Fooditem", Fooditem);
app.mount("#app");
