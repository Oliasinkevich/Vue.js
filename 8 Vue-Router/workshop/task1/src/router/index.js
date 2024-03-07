import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutUs from "@/components/AboutUs.vue";
import ContactUs from "@/components/ContactUs.vue";
import NotFound from "@/components/NotFound.vue";
import CatalogList from "@/pages/CatalogList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutUs,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactUs,
    },
    {
      path: "/catalog",
      name: "catalog",
      component: CatalogList,
    },
    {
      path: "/catalog/:page",
      name: "catalogPage",
      component: CatalogList,
    },
    {
      path: "/404",
      component: NotFound,
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
  ],
});

export default router;
