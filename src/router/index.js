import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import NotFound from "../pages/_NotFound.vue";

import DefaultLayout from "../layouts/DefaultLayout.vue";
import CustomerLayout from "../layouts/customer/CustomerLayout.vue";

import StoreList from "../pages/customer/StoreList.vue";
import StoreDetail from "../pages/customer/StoreDetail.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", component: Home },
      { path: "/:pathMatch(.*)*", component: NotFound },
    ],
  },
  {
    path: "/customer",
    component: CustomerLayout,
    children: [
      { path: "stores", component: StoreList },
      { path: "stores/:id", component: StoreDetail },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
