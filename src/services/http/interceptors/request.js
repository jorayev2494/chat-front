import store from '../../store/index.js';

export default function (request) {
    window.console.log(`Interceptor (request)  => {method: ${request.method}, url: ${request.url}}: `, request);
    let accessToken = store.getters['auth/getAccessToken'];
    
    if (accessToken) {
        request.headers.common.Authorization = `Bearer ${accessToken}`;
    }
  
    // const locale = store.getters['lang/locale']
    // if (locale) {
    //   request.headers.common['Accept-Language'] = locale
    // }
  
    // request.headers['X-Socket-Id'] = Echo.socketId()
  
    return request
}