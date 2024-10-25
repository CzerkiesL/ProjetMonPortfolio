import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueScreen from 'vue-screen';

import App from './App.vue';
import router from './router/index.js';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faXTwitter,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import './style/main.less';

library.add(faXTwitter, faLinkedinIn, faGithub, faAt);

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(VueScreen);
app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
