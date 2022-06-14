import Echo from 'laravel-echo';
window.Pusher = require('pusher-js');
 
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

// This assumes you have already saved your bearer token in your browsers local storage
// const token = localStorage.getItem('user-token')

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'laravel_rdb',
    cluster: 'mt1',
    wsHost: '127.0.0.1',
    // authEndpoint: 'http://api.somedomain.com/broadcasting/auth',
    encrypted: false,
    forceTLS: false,
    wsPort: 6001,
    // wssPort: 6001,
    // disableStats: true,
    // enabledTransports: ['ws', 'wss'],
    // auth: {
    //     headers: {
    //     authorization: 'Bearer ' + token,
    //     }
    // }
})