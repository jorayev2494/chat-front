<template>
    <div class="message-img mb-0" v-if="medias.length">
        <div class="media-img-list" v-for="(media, idx) in medias" :key="idx">
            <div>
                <a :href="media.url" class="popup-img d-inline-block">
                    <img :src="media.url" :alt="media.url" class="rounded border">
                </a>
            </div>
            <div class="message-img-link">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item dropdown">
                        <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx-dots-horizontal-rounded"></i>
                        </a>
                        <div class="dropdown-menu" style="">
                            <a class="dropdown-item d-flex align-items-center justify-content-between" href="assets/images/small/img-2.jpg" download="">
                                Download <i class="bx bx-download ms-2 text-muted"></i>
                            </a>
                            <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="collapse" data-bs-target=".replyCollapse">
                                Reply <i class="bx bx-share ms-2 text-muted"></i>
                            </a>
                            <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">
                                Forward <i class="bx bx-share-alt ms-2 text-muted"></i>
                            </a>
                            <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">
                                Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i>
                            </a>
                            <a class="dropdown-item d-flex align-items-center justify-content-between delete-image" href="#">
                                Delete <i class="bx bx-trash ms-2 text-muted"></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViewMediaComponent',
    props: {
        title: {
            type: String,
            default: null
        },
        medias: {
            type: Array,
            required: true
        }
    },
    methods: {

    },
    mounted() {
        
    },
}
</script>

<style>

</style>