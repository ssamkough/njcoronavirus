import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Map",
    component: () => import("../views/Home.vue"),
    meta: { title: "NJ Coronavirus Map - Map" }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: { title: "NJ Coronavirus Map - About" }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
