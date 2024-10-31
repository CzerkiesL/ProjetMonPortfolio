import { createWebHistory, createRouter } from 'vue-router';

import AboutView from '../views/AboutView.vue';
import ProjectView from '../views/ProjectView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/ProjetMonPortfolio/',
    component: AboutView,
    meta: {
      title: 'Ludovic Czerkies | A Propos',
    },
  },
  {
    path: '/ProjetMonPortfolio/project',
    component: ProjectView,
    meta: {
      title: 'Ludovic Czerkies | Mes Realisations',
    },
  },
  {
    path: '/ProjetMonPortfolio/contact',
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
  document.title = to.meta.title;
});

export default router;
