import { createWebHistory, createRouter } from 'vue-router';

import AboutView from '../views/AboutView.vue';
import ProjectView from '../views/ProjectView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    component: AboutView,
    meta: {
      title: 'Ludovic Czerkies | A Propos',
    },
  },
  {
    path: '/project',
    component: ProjectView,
    meta: {
      title: 'Ludovic Czerkies | Mes Realisations',
    },
  },
  {
    path: '/contact',
    component: ContactView,
    meta: {
      title: 'Ludovic Czerkies | Me Contacter',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(to => {
  const title = to.meta.title;
  document.title = title;
});

export default router;
