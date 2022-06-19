<template>
    <div class="user-profile-img">
        <img src="assets/images/small/img-4.jpg" class="profile-img" style="height: 160px;" alt="">
        <div class="overlay-content">
            <div>
                <div class="user-chat-nav p-2 ps-3">

                    <div class="d-flex w-100 align-items-center">
                        <div class="flex-grow-1">
                            <h5 class="text-white mb-0">My Profile</h5>
                        </div>
                        <div class="flex-shrink-0">
                            <div class="dropdown">
                                <button class="btn nav-btn text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class='bx bx-dots-vertical-rounded'></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">
                                        Info <i class="bx bx-info-circle ms-2 text-muted"></i>
                                    </a>
                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">
                                        Setting <i class="bx bx-cog text-muted ms-2"></i>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">
                                        Help <i class="bx bx-help-circle ms-2 text-muted"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
        <div class="mb-lg-3 mb-2">
            <img :src="profile.avatar" class="rounded-circle avatar-lg img-thumbnail" :alt="profile.avatar">
        </div>

        <h5 class="font-size-16 mb-1 text-truncate">{{ profile.full_name }}</h5>
        <p class="text-muted font-size-14 text-truncate mb-0">{{ profileRoleComp }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProfileHeaderComponent',
    props: {
        profile: {
            type: Object,
            required: true
        }
    },
    computed: {
        profileRoleComp: function() {
            return this.profile.is_admin ? 'Admin' : 'User';
        }
    }
}
</script>

<style>

</style>