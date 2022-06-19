export async function loadChatsAsync({ commit }) {
    await new Promise((resolve, reject) => {
        window.axios.get('/chats').then((response) => {
            commit('setChats', response.data);
            return resolve(true);
        }).catch(() => {
            return reject(false);
        });
    })
}

export async function loadChat({ commit }, payload) {
    await new Promise((resolve, reject) => {
        window.axios.get(`/chats/${payload}`).then((response) => {
            commit('setCurrentMessages', response.data);
            return resolve(true);
        }).catch(() => {
            return reject(false);
        });
    })
}

export async function sendMessageAsync({ commit }, payload) {
    await new Promise((resolve, reject) => {
        var config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        window.axios.post('/chats', payload, config).then((response) => {
            commit('pushCurrentMessages', response.data);

            return resolve(true);
        }).catch(() => {
            return reject(false);
        });
    })
}

export async function deleteMessageAsync({ commit }, payload) {
    await new Promise((resolve, reject) => {
        window.axios.delete(`/chats/${payload}`).then((response) => {
            commit('deleteCurrentMessage', payload);
            window.console.log('deleteMessageAsync response: ', response);

            return resolve(true);
        }).catch((err) => {
            return reject(err);
        });
    })
}