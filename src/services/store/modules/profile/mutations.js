export function setProfile(state, payload) {
    if (payload == null) {
        window.localStorage.removeItem(state.keyProfile);
    } else {
        let profile = JSON.stringify(payload);
        window.localStorage.setItem(state.keyProfile, profile)
    }

    state.profile = payload;
}