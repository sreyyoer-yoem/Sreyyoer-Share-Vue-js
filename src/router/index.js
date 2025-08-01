// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import your page components
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import practice from '../views/practice.vue';
import product from '../views/product.vue';
import validation from '../views/validation.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/practice', component: practice },
  { path: '/product', component: product },
  { path: '/validation', component: validation }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
