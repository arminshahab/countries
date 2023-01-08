import { createRouter, createWebHistory } from "vue-router";
import Countries from "../views/Countries.vue";
import Country from "../views/Country.vue";

const routes = [
  {
    path: "/",
    redirect: "/countries",
  },
  {
    path: "/countries",
    name: "Countries",
    component: Countries,
  },
  {
    path: "/countries/:country",
    name: "Country",
    component: Country,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
