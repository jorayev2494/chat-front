export function setIsAuth(state, payload) {
    state.isAuth = payload;
}

export function setAccessToken(state, payload) {
    if (payload === null) {
        window.localStorage.removeItem(state.keyAccessToken);
    } else {
        window.localStorage.setItem(state.keyAccessToken, payload)
    }

    state.accessToken = payload;
}

export function setRefreshToken(state, payload) {
    if (payload === null) {
        window.localStorage.removeItem(state.keyRefreshToken);
    } else {
        window.localStorage.setItem(state.keyRefreshToken, payload)
    }

    state.refreshToken = payload;
}