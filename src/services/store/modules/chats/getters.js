export function getChats(state) {

    let keyProfile = window.keyAccessToken = 'profile';
    let localStorageProfile = window.localStorage.getItem(keyProfile);
    let profile = localStorageProfile ? JSON.parse(localStorageProfile) : localStorageProfile;

    window.console.log('profile profile profile profile: ', profile);

    return state.chats?.map((chat) => {
        // if (chat.type === 'chat') {
            let findToUser = chat.members.find(u => u.id !== profile.id); 

            console.log('findToUser findToUser findToUser findToUser: ', findToUser);
            
            chat.toUser = findToUser;
        // }

        return chat;
    });
}

export function getCurrentChat(state) {
    return state.currentChat;
}

export function getCurrentMessages(state) {
    return state.currentMessages;
}