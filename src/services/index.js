import axios from './http/index.js';
import ws from './webSocket/index.js';

const services = {
    install(Vue) {
        Vue.config.globalProperties.$axios = window.axios = axios;
        Vue.config.globalProperties.$ws = window.ws = ws;
        console.table('!!!!!!!!!!!!!!!!!! WS in view !!!!!!!!!!!!!!!!!!!!!!');
    }
};

export default services;