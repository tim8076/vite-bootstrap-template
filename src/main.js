import { createApp } from 'vue';
import { createPinia } from 'pinia';

import * as bootstrap from 'bootstrap';
import App from './App.vue';
import router from './router';
// Import all of Bootstrap's JS

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(bootstrap);

app.mount('#app');
