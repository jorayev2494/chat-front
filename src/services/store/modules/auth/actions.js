let authData = {
    client_id: 1,
    client_secret: 'GtJOz71iEJnw1Vwt9ukozz2akllNtTu3pMOHvMQH'
};

export async function loginAsync({ commit }, payload) {
    await window.axios.post('/oauth/token', { grant_type: 'password', ...authData, ...payload }).then((response) => {
        commit('setIsAuth', true);
        commit('setAccessToken', response.data.access_token);
        commit('setRefreshToken', response.data.refresh_token);
    });
}

export async function logout({ commit }) {
    await window.axios.post('/oauth/logout').then((response) => {
        if (response.status == 202) {
            commit('setIsAuth', false);
            commit('setAccessToken', null);
            commit('profile/setProfile', null, { root: true });
        }
    });
}

// export async function refresh({ commit }) {
//     await window.axios.post('/api/auth/token', { grant_type: 'refresh_token', ...authData, ...payload }).then((response) => {
//         if (response.status == 200) {
//             commit('setIsAuth', true);
//             commit('setAccessToken', response.data.access_token);
//         }
//     });
// }