import { createStore } from 'vuex';
import auth from './modules/auth/index.js';
import user from './modules/user/index.js';
import profile from './modules/profile/index.js';
import chats from './modules/chats/index.js';

const store = createStore({
    modules: {
        auth,
        user,
        profile,
        chats
    }
});

export default store; 