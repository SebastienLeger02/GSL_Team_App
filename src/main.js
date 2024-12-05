import { createApp } from 'vue';
import './tailwind.css';
import App from './App.vue';
import { createPinia } from "pinia";
import { router } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  router,
});

createApp(App)
  .use(router)
  .use(createPinia())
  .mount("#app");

// createApp(App)
//   .use(router.push())
//   .use(createPinia())
//   .mount("#app");
