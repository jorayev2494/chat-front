import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import store from '@/services/store/index.js';

export function response(response) {
    window.console.log(`Interceptor (response) => {method: ${response.config.method}, url: ${response.config.url}}:  `, response);

    return response;
}

export function error(error) {
    let errorResponse = error.response;
    let serverStatusText = getReasonPhrase(error.response.status);

    window.console.warn('Server Status Text: ', serverStatusText);
    window.console.warn(`Interceptor (error.response) => {method: ${errorResponse.method}, url: ${errorResponse.url}: `, errorResponse);

    const { status } = error.response
  
    if (error.response.status === StatusCodes.UNAUTHORIZED) {
        window.console.warn('Server: 401', error.response);
        clearStore();
        clearLocalStorage();
           
    // #region Test
    //   Swal.fire({
    //     icon: 'warning',
    //     title: i18n.t('token_expired_alert_title'),
    //     text: i18n.t('token_expired_alert_text'),
    //     reverseButtons: true,
    //     confirmButtonText: i18n.t('ok'),
    //     cancelButtonText: i18n.t('cancel')
    //   }).then(() => {
    //     store.commit('auth/LOGOUT')
  
    //     router.push({ name: 'login' })
    //   })
    //#endregion
    }
  
    if (status >= 500) {
        window.console.warn('Interceptor Server: 500', error.response);
    }
  
    return error;
}

function clearStore() {
    let storeClearData = {
        'auth/setIsAuth': false,
        'auth/setAccessToken': null,
        'profile/setProfile': null
    };

    for (const key in storeClearData) {
        if (Object.hasOwnProperty.call(storeClearData, key)) {
            const val = storeClearData[key];
            store.commit(key.toString(), val);
        }
    }
}

function clearLocalStorage() {
    ['access_token', 'profile'].forEach(element => {
        window.localStorage.removeItem(element);
    });   
}