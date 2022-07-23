export function setChats(state, payload) {
    state.chats = payload;
}

export function setCurrentChat(state, payload) {
    state.currentChat = payload;
}

export function setCurrentMessages(state, payload) {
    state.currentMessages = payload;
}

export function pushCurrentMessages(state, payload) {
    state.currentMessages.push(payload);
}

export function updateCurrentMessage(state, payload) {
    let fIndex = state.currentMessages.findIndex(msg => msg.id === payload.id);

    if (fIndex === null) return;

    state.currentMessages[fIndex] = payload;
    state.currentMessages[fIndex]['medias'] = payload['medias'];
}

export function deleteCurrentMessage(state, payload) {
    state.currentMessages = state.currentMessages.filter(msg =>  msg.id != payload.id);
}

export function makeMessageSee(state, payload) {
    // console.log('makeMessageSee payload', payload);
    state.currentMessages.map((msg) => {
        console.log('makeMessageSee is_seen', msg.is_seen, msg, payload);
        if (msg.id === payload.message_id) {
            msg.is_seen = payload.is_seen;
        }
    });
}

export function unshiftChat(state, payload) {
    state.chats.unshift(payload);
    // console.log('unshiftChat', temp, [payload, ...state.chats]);
    // state.chats = temp;
}