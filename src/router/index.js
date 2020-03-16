import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/covid-19",
    name: "Covid",
    component: () => import("../views/Covid.vue"),
    meta: {
      title: "NJ Coronavirus Map - Info",
      metaTags: [
        {
          name: "description",
          content: "Information about Coronavirus."
        },
        {
          property: "og:description",
          content: "Information about Coronavirus."
        }
      ]
    }
  },
  {
    path: "/",
    name: "Map",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "NJ Coronavirus Map",
      metaTags: [
        {
          name: "description",
          content: "Map of Coronavirus cases in New Jersey."
        },
        {
          property: "og:description",
          content: "Map of Coronavirus cases in New Jersey."
        }
      ]
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      title: "NJ Coronavirus Map - About",
      metaTags: [
        {
          name: "description",
          content: "About for Map of Coronavirus cases in New Jersey."
        },
        {
          property: "og:description",
          content: "About for Map of Coronavirus cases in New Jersey."
        }
      ]
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  document.description = to.meta.description;
  next();
});

export default router;
