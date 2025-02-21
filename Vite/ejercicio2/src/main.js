// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import Item from "./components/Item.vue";

// createApp(App).mount("#app");

const app = createApp(App);
app.component("Item", Item);
app.mount("#app");
