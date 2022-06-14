import { createApp } from 'vue';
import router from './services/route/index.js';
import store from './services/store/index.js';
import services from './services/index.js';
import App from './App.vue';
require('./services/webSocket/index.js');



let app = createApp(App);
app.use(router);
app.use(store);
app.use(services);
app.mount('#app');
