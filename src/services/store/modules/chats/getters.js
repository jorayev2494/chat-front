export function getChats(state) {
    return state.chats.map((chat) => {
        if (chat.type === 'chat') {
            let authUserId = 1;
            let findToUser = chat.members.find(u => u.id !== authUserId);    
            
            chat.toUser = findToUser;
        }

        return chat;
    });
}

export function getCurrentChat(state) {
    return state.currentChat;
}

export function getCurrentMessages(state) {
    return state.currentMessages;
}