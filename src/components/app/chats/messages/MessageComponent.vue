<template>
    <li class="chat-list" :class="isMyMessage(message) ? 'right' : 'left'" id="chat-list-1">
        <div class="conversation-list">
            <div class="chat-avatar">
                <img :src="message.user.avatar" :alt="message.user.avatar">
            </div>
            <div class="user-chat-content">
                <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                        <p class="mb-3 ctext-content">{{ message.id }}) {{ message.text }}</p>
                        <view-media-component v-if="message.medias" :medias="message.medias" class="mb-2"></view-media-component>
                    </div>
                    <MessageDropdown :message="message"></MessageDropdown>
                </div>
                <div class="conversation-name">
                    <small class="text-muted time">
                        {{ message.created_at }}
                    </small>
                    <span class="text-success check-message-icon" style="font-size: 20px;">
                        <!-- https://boxicons.com/?query=check -->
                        <i v-if="message.is_seen" class="bx bx-check-double"></i>
                        <i v-else class="bx bx-check"></i>
                    </span>
                </div>
            </div>
        </div>
    </li>
</template>

<script>

import ViewMediaComponent from '../../components/ViewMediaComponent.vue';
import MessageDropdown from './MessageDropdown.vue';

export default {
    name: 'MessageComponent',
    props: {
        message: {
            type: Object,
            required: true
        }
    },
    methods: {
        isMyMessage: function(message) {
            return message.user.id == this.$store.getters['profile/getProfile']?.id
        },
    },
    components: {
        ViewMediaComponent,
        MessageDropdown
    },
}
</script>

<style>

</style>