import { createApp } from 'vue';
import './tailwind.css';
import App from './App.vue';
import { createPinia } from "pinia";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router.push())
  .use(createPinia())
  .mount("#app");
