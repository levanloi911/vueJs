import { createRouter, createWebHistory } from "vue-router";
import AnimalCollectionVue from "../components/AnimalCollection.vue";
import FoodItemsVue from "../components/FoodItems.vue";
import Login from "../components/login/index.vue";
import signUp from "../components/signUp/index.vue";


export const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/animals', component: AnimalCollectionVue },
      { path: '/food', component: FoodItemsVue },
      { path: '/login', component: Login },
      { path: '/signup', component: signUp },
  ]
});