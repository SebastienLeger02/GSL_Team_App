import Home from "./views/Home.vue";
import Category from "./views/Category.vue";
import Platform from "./views/Platform.vue";
import Game from "./views/Game.vue";
import NotFound from "./views/NotFound.vue";
// import Film from "./views/Film.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/category/", name: "category", component: Category },
  { path: "/platform/", name: "platform", component: Platform },
  { path: "/platform/", name: "platform", component: Platform },
  { path: "/game/", name: "game", component: Game },
  //   {
  //     path: "/film/:id", name: "film", component: Film, children: [
  //       { path: "/person/:charid", name: "character", component: Character }, // Añado la ruta con el parámetro para cada película
  //     ]
  //   },
  { path: "/:path(.*)",name :"notFound", component: NotFound },
];