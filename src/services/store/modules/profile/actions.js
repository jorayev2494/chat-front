let widthLocalSore = false;

export async function loadProfileAsync({ commit, getters }) {
    if (widthLocalSore && getters['getProfile']) {
        return;
    }

    await window.axios.get('/api/profile').then((response) => {
        commit('setProfile', response.data);
    });
}