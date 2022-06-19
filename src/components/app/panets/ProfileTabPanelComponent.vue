<template>
    <div class="tab-pane show active" id="pills-user" role="tabpanel" aria-labelledby="pills-user-tab">
        <!-- Start profile content -->
        <div>
            <ProfileHeaderComponent :profile="profile"></ProfileHeaderComponent>
            <!-- End profile user -->

            <!-- Start user-profile-desc -->
            <div class="p-4 profile-desc" data-simplebar>
                <div class="text-muted">
                    <p class="mb-4">If several languages coalesce, the grammar of the resulting language is more simple.</p>
                </div>

                <div>
                    <div class="d-flex py-2" v-for="(iconInfo, idx) in iconInforms" :key="idx">
                        <div class="flex-shrink-0 me-3">
                            <i class="bx align-middle text-muted" :class="iconInfo.icon"></i>
                        </div>
                        <div class="flex-grow-1">
                            <p class="mb-0">{{ profile[iconInfo.slug] }}</p>
                        </div>
                    </div>
                </div>

                <hr class="my-4">

                <div>
                    <div class="d-flex">
                        <div class="flex-grow-1">
                            <h5 class="font-size-11 text-muted text-uppercase">Media</h5>
                        </div>
                        <div class="flex-shrink-0">
                            <a href="#" class="font-size-12 d-block mb-2">Show all</a>
                        </div>
                    </div>
                    <div class="profile-media-img">
                        <div class="media-img-list">
                            <a href="#">
                                <img src="assets/images/small/img-1.jpg" alt="media img" class="img-fluid">
                            </a>
                        </div>
                        <div class="media-img-list">
                            <a href="#">
                                <img src="assets/images/small/img-2.jpg" alt="media img" class="img-fluid">
                            </a>
                        </div>
                        <div class="media-img-list">
                            <a href="#">
                                <img src="assets/images/small/img-4.jpg" alt="media img" class="img-fluid">
                                <div class="bg-overlay">+ 15</div>
                            </a>
                        </div>
                    </div>
                </div>

                <hr class="my-4">

                <div>
                    <div>
                        <h5 class="font-size-11 text-muted text-uppercase mb-3">Attached Files</h5>
                    </div>

                    <div>
                        <div class="card p-2 border mb-2">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                    <div class="avatar-title bg-soft-primary text-primary rounded-circle">
                                        <i class="bx bx-file"></i>
                                    </div>
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <h5 class="font-size-14 text-truncate mb-1">design-phase-1-approved.pdf</h5>
                                    <p class="text-muted font-size-13 mb-0">12.5 MB</p>
                                </div>

                                <div class="flex-shrink-0 ms-3">
                                    <div class="d-flex gap-2">
                                        <div>
                                            <a href="#" class="text-muted px-1">
                                                <i class="bx bxs-download"></i>
                                            </a>
                                        </div>
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i class="bx bx-share-alt ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card p-2 border mb-2">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                    <div class="avatar-title bg-soft-primary text-primary rounded-circle">
                                        <i class="bx bx-image"></i>
                                    </div>
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <h5 class="font-size-14 text-truncate mb-1">Image-1.jpg</h5>
                                    <p class="text-muted font-size-13 mb-0">4.2 MB</p>
                                </div>

                                <div class="flex-shrink-0 ms-3">
                                    <div class="d-flex gap-2">
                                        <div>
                                            <a href="#" class="text-muted px-1">
                                                <i class="bx bxs-download"></i>
                                            </a>
                                        </div>
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i class="bx bx-share-alt ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card p-2 border mb-2">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                    <div class="avatar-title bg-soft-primary text-primary rounded-circle">
                                        <i class="bx bx-image"></i>
                                    </div>
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <h5 class="font-size-14 text-truncate mb-1">Image-2.jpg</h5>
                                    <p class="text-muted font-size-13 mb-0">3.1 MB</p>
                                </div>

                                <div class="flex-shrink-0 ms-3">
                                    <div class="d-flex gap-2">
                                        <div>
                                            <a href="#" class="text-muted px-1">
                                                <i class="bx bxs-download"></i>
                                            </a>
                                        </div>
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i class="bx bx-share-alt ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card p-2 border mb-2">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                    <div class="avatar-title bg-soft-primary text-primary rounded-circle">
                                        <i class="bx bx-file"></i>
                                    </div>
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <h5 class="font-size-14 text-truncate mb-1">Landing-A.zip</h5>
                                    <p class="text-muted font-size-13 mb-0">6.7 MB</p>
                                </div>

                                <div class="flex-shrink-0 ms-3">
                                    <div class="d-flex gap-2">
                                        <div>
                                            <a href="#" class="text-muted px-1">
                                                <i class="bx bxs-download"></i>
                                            </a>
                                        </div>
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i class="bx bx-share-alt ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- end user-profile-desc -->
        </div>
        <!-- End profile content -->
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
import ProfileHeaderComponent from '../profile/ProfileHeaderComponent.vue';

export default {
    name: 'ProfileTabPanelComponent',
    data() {
        return {
            iconInforms: [
                {
                    icon: 'bx-user',
                    slug: 'full_name'
                },
                {
                    icon: 'bx-message-rounded-dots',
                    slug: 'email'
                },
                // {
                //     icon: 'bx-location-plus',
                //     slug: 'location'
                // }
            ]
        }
    },
    components: {
        ProfileHeaderComponent
    },
    mounted() {
        console.log('profile:', this.profile);
    },
    computed: {
        ...mapGetters({
            profile: 'profile/getProfile',
        })
    }
}
</script>

<style>

</style>