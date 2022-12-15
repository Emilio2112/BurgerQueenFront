import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SignupView from "@/views/SignupView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";
import BurgerView from "@/views/BurgerView.vue";
import RankingView from "@/views/RankingView.vue";
import ProfileUserView from "@/views/ProfileUserView.vue";
import RestaurantsView from "@/views/RestaurantsView.vue";
import RestBurgerView from "@/views/RestBurgerView.vue";
import Editar from "@/views/Editar.vue";
import Delete from "@/views/ConfirmDelete.vue";
import Despedida from "@/views/Despedida.vue";
import BurgersView from "@/views/BurgersView.vue";

import AdminView from "@/views/AdminView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/despedida",
    name: "despedida",
    component: Despedida,
  },
  {
    path: "/delete",
    name: "delete",
    component: Delete,
  },
  {
    path: "/editar",
    name: "editar",
    component: Editar,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileUserView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/burger/:id",
    name: "burger",
    component: BurgerView,
  },
  {
    path: "/burgers",
    name: "burgers",
    component: BurgersView,
  },
  {
    path: "/ranking",
    name: "ranking",
    component: RankingView,
  },
  {
    path: "/restaurant",
    name: "restaurant",
    component: RestaurantsView,
  },
  {
    path: "/restaurant/:id",
    name: "restburger",
    component: RestBurgerView,
    props: true,
  },
  {
    path: "/admin",
    name: "soloadmin",
    component: AdminView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
