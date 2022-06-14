<template>
    <div v-if="previewMedias.length">
        <div class="d-flex">
            <div class="flex-grow-1" v-if="title">
                <h5 class="font-size-11 text-muted text-uppercase">{{ title }}</h5>
            </div>
            <!-- <div class="flex-shrink-0">
                <a href="#" class="font-size-12 d-block mb-2">Show all</a>
            </div> -->
        </div>
        <div class="profile-media-img mb-4">
            <div class="media-img-list" v-for="(media, idx) in previewMedias" :key="idx">
                <a href="#">
                    <img :src="media" :alt="media" class="img-fluid">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: null
        },
        medias: {
            type: Array,
            required: true
        },
        isAuthor: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            previewMedias: []
        }
    },
    methods: {
        makePreviewUrl: function () {
            this.medias.forEach(media => this.previewMedias.push(URL.createObjectURL(media)));
        }
    },
    mounted() {
        this.makePreviewUrl();
    },
}
</script>

<style>

</style>