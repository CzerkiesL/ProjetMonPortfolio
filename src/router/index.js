import { createWebHistory, createRouter } from 'vue-router';

import AboutView from '../views/AboutView.vue';
import ProjectView from '../views/ProjectView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    component: AboutView,
  },
  {
    path: '/project',
    component: ProjectView,
  },
  {
    path: '/contact',
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
