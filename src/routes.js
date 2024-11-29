import Home from "./views/Home.vue";
// import NotFound from "./views/NotFound.vue";
// import Film from "./views/Film.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
//   {
//     path: "/film/:id", name: "film", component: Film, children: [
//       { path: "/person/:charid", name: "character", component: Character }, // Añado la ruta con el parámetro para cada película
//     ]
//   },
//   { path: "/:path(.*)", component: NotFound },
];