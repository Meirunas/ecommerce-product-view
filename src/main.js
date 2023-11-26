import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueMobileDetection from "vue-mobile-detection";

const app = createApp(App);
app.use(VueMobileDetection);
app.mount("#app");
