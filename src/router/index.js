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
      description:
        "Portfolio developpeur web de Ludovic Czerkies, cette page contient quelque information a propos de mon parcour et des différente technologie que j'ai apprise.",
    },
  },
  {
    path: '/project',
    component: ProjectView,
    meta: {
      title: 'Ludovic Czerkies | Mes Realisations',
      description:
        "Portfolio developpeur web de Ludovic Czerkies, cette page contient quelque projet que j'ai realiser avec quelque information a propos de c'est projet, ainsi que les liens github les concernant",
    },
  },
  {
    path: '/contact',
    component: ContactView,
    meta: {
      title: 'Ludovic Czerkies | Me Contacter',
      description:
        "Portfolio developpeur web de Ludovic Czerkies, cette page contient les liens pour accéder a mes réseaux ainsi qu'a mon cv et vous donne la possibilité de m'envoyer directement un mail au besoin.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(to => {
  const { title, description } = to.meta;
  document.title = title;
  document.description = description;
});

export default router;
