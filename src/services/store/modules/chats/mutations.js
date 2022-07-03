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