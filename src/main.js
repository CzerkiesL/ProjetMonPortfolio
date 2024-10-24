import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueScreen from 'vue-screen';

import App from './App.vue';
import router from './router/index.js';

import './style/main.less';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(VueScreen);
app.use(router);

app.mount('#app');
