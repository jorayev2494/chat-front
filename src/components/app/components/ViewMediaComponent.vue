<template>
    <div v-if="medias.length">
        <div class="profile-media-img">
            <div class="media-img-list" v-for="(media, idx) in medias" :key="idx">
                <a href="#">
                    <img :src="media.url" :alt="media.url" class="img-fluid">
                </a>
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