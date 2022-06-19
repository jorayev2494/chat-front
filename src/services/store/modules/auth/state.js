let keyAccessToken = window.keyAccessToken = 'access_token';
let keyRefreshToken = window.keyRefreshToken = 'refresh_token';
let accessToken = window.localStorage.getItem(keyAccessToken);
let refreshToken = window.localStorage.getItem(keyRefreshToken);
let isAuth = (typeof(accessToken) === 'string');

export default {
    isAuth,
    keyAccessToken,
    keyRefreshToken,
    accessToken,
    refreshToken
};