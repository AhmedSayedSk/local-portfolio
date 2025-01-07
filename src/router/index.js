import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import { Quasar } from 'quasar';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
