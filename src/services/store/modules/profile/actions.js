// let widthLocalSore = false;

export async function loadProfileAsync({ commit }) {
    // if (widthLocalSore && getters['getProfile']) {
    //     return;
    // }
    await new Promise((resolve, reject) => {
        window.axios.get('/profile').then((response) => {
            commit('setProfile', response.data);
            console.log('loadProfileAsync: ', response);
            return resolve(true);
        }).catch(() => {
            reject(false);
        })
    });
}