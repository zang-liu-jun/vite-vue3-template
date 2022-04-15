import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/hello",
    name: "hello",
    component: () => import("@/pages/Hello.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
