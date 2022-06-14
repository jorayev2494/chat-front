let localStorageProfile = window.localStorage.getItem('profile');
let profile = localStorageProfile ? JSON.parse(localStorageProfile) : localStorageProfile;

export default () => ({
    keyProfile: 'profile',
    profile
});