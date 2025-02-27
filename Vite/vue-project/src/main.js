// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import Fooditem from "./components/Fooditem.vue";
import Item from "./components/Item.vue";
import exerciseb from "./components/exerciseb.vue";

// createApp(App).mount("#app");

const app = createApp(App);
app.component("Fooditem", Fooditem);
app.component("Item", Item);
app.component("exerciseb", exerciseb);
app.mount("#app");
