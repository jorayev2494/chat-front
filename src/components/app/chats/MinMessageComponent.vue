<template>
    <li class="chat-list" :class="isMyMessage(message) ? 'right' : 'left'" id="chat-list-1">
        <div class="conversation-list">
            <div class="user-chat-content">
                <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                        <p class="mb-3 ctext-content">{{ message.text }}</p>
                        <view-media-component v-if="message.medias" :medias="message.medias" class="mb-2"></view-media-component>
                    </div>
                    <div class="dropdown align-self-start message-box-drop">
                        <a class="dropdown-toggle" href="#"
                            role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="ri-more-2-fill"></i>
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="collapse" data-bs-target=".replyCollapse">
                                Reply <i class="bx bx-share ms-2 text-muted"></i>
                            </a>
                            <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">
                                Forward <i class="bx bx-share-alt ms-2 text-muted"></i>
                            </a>
                            <a class="dropdown-item d-flex align-items-center justify-content-between copy-message" href="#" id="copy-message-1">
                                Copy <i class="bx bx-copy text-muted ms-2"></i>
                            </a>
                            <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">
                                Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i>
                            </a>
                            <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">
                                Mark as Unread <i class="bx bx-message-error text-muted ms-2"></i>
                            </a>
                            <a class="dropdown-item d-flex align-items-center justify-content-between delete-item" id="delete-item-1" href="#">
                                Delete <i class="bx bx-trash text-muted ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="conversation-name">
                    <small class="text-muted time">
                        {{ message.created_at }}
                    </small>
                    <span class="text-success check-message-icon">
                        <i class="bx bx-check"></i>
                    </span>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
import ViewMediaComponent from '../components/ViewMediaComponent.vue';

export default {
    name: 'MinMessageComponent',
    props: {
        message: {
            type: Object,
            required: true
        }
    },
    methods: {
        isMyMessage: (message) =>  message.user.id === 1,
    },
    components: {
        ViewMediaComponent
    },
}
</script>

<style>

</style>