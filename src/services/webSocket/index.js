import Echo from 'laravel-echo';
window.Pusher = require('pusher-js');
 
// https://gist.github.com/sdwru/2fc0cd414b12cabfb3b84d05bb693375

import store from '../store/index.js';

function getToken() {
    return store.getters['auth/getAccessToken'];
}

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'laravel_rdb',
    cluster: 'mt1',
    wsHost: '127.0.0.1',
    authEndpoint: 'http://127.0.0.1:8000/websockets/auth',
    encrypted: false,
    forceTLS: false,
    wsPort: 6001,
    wssPort: 6001,
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
    auth: {
        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + getToken(),
            // 'Auth-Token': 'Bearer ' + getToken(),
            'X-App-ID': 'laravel_rdb'
        }
    }
})

export default window.Echo;