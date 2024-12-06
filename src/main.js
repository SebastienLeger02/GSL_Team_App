// import { createApp } from "vue";
// import "./tailwind.css";
// import App from "./App.vue";
// import { createPinia } from "pinia";
// import routes from "./routes.js";
// import { createRouter, createWebHistory } from "vue-router";

// // const router = createRouter({
// //   history: createWebHistory(),
// //   router,
// // });

// createApp(App)
//   .use(routes)
//   .use(createPinia())
//   .mount("#app");

// // createApp(App)
// //   .use(router.push())
// //   .use(createPinia())
// //   .mount("#app");

import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";

const router = createRouter({
  history: createWebHistory(),
  routes, 
  linkActiveClass: "active-link", 
});

createApp(App)
  .use(router)
  .use(createPinia())
  .mount("#app");