import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/blog",
      name: "blog",
      component: () =>
        import("@/pages/BlogPage.vue"),
    },
    {
      path: "/blog/:page",
      name: "blogPage",
      component: () =>
        import("@/pages/BlogPage.vue"),
    },
    {
      path: "/blogdetails",
      name: "blogDetails",
      component: () =>
        import("@/pages/BlogDetailsPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () =>
        import("@/pages/ErrorPage.vue"),
    },
  ],
});

export default router;
