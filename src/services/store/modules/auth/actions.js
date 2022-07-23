// let MDI = new MediaDeviceInfo();

let data = {
    device_id: 'MDI.deviceId'
};

export async function loginAsync({ commit }, payload) {
    await window.axios.post('/auth/login', {...data, ...payload}).then((response) => {
        commit('setIsAuth', true);
        commit('setAccessToken', response.data.access_token);
        commit('setRefreshToken', response.data.refresh_token);
    });
}

export async function logoutAsync({ commit }) {
    await new Promise((resolve, reject) => {
        try {
            commit('setIsAuth', false);
            commit('setAccessToken', null);
            commit('setRefreshToken', null);
            commit('profile/setProfile', null, { root: true });
            
            return resolve();
        } catch (error) {
            return reject(false);
        }

        // window.axios.post('/oauth/logout').then((response) => {
        //     if (response.status == 202) {
        //         commit('setIsAuth', false);
        //         commit('setAccessToken', null);
        //         commit('profile/setProfile', null, { root: true });
        //     }

        //     return resolve(true);
        // }).catch(() => {
        //     return reject(false);
        // })
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