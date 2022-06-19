<template>
    <li class="nav-item dropdown profile-user-dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img :src="profile?.avatar" :alt="profile?.avatar" class="profile-user rounded-circle">
        </a>
        <div class="dropdown-menu">
            <a class="dropdown-item d-flex align-items-center justify-content-between" id="pills-user-tab" data-bs-toggle="pill" href="#pills-user" role="tab">
                Profile <i class="bx bx-user-circle text-muted ms-1"></i>
            </a>
            <a class="dropdown-item d-flex align-items-center justify-content-between" id="pills-setting-tab" data-bs-toggle="pill" href="#pills-setting" role="tab">
                Setting <i class="bx bx-cog text-muted ms-1"></i>
            </a>
            <a class="dropdown-item d-flex align-items-center justify-content-between" href="auth-changepassword.html">
                Change Password <i class="bx bx-lock-open text-muted ms-1"></i>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" @click="logoutAsync()">
                Log out <i class="bx bx-log-out-circle text-muted ms-1"></i>
            </a>
        </div>
    </li>
</template>

<script>

import { mapGetters } from 'vuex' 

export default {
    methods: {
        logoutAsync: async function () {
            this.$router.push({ name: 'login' });
            await this.$store.dispatch('auth/logoutAsync').then(() => {
                
            }).catch(() => {
                
            });
        }
    },
    computed: {
        ...mapGetters({
            profile: 'profile/getProfile'
        })
    },

}
</script>

<style>

</style>