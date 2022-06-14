export async function loadUsersAsync({ commit }) {
    await window.axios.get('/api/users').then(response => {
        // window.console.log('loaded', response);
        commit('setUsers', response.data);
    });
}