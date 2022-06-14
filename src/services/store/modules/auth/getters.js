export function getIsAuth(state) {
    return state.isAuth;
}

export function getAccessToken() {
    return window.localStorage.getItem('access_token');
    // return state.accessToken;
}