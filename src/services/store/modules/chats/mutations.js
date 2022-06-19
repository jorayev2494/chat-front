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

export function deleteCurrentMessage(state, payload) {
    state.currentMessages = state.currentMessages.filter(msg =>  msg.id != payload);
}