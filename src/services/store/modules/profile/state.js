let keyProfile = window.keyAccessToken = 'profile';
let localStorageProfile = window.localStorage.getItem(keyProfile);
let profile = localStorageProfile ? JSON.parse(localStorageProfile) : localStorageProfile;

export default {
    keyProfile,
    profile
};