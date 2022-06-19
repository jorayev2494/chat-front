<template>
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
            <a class="dropdown-item d-flex align-items-center justify-content-between delete-item" id="delete-item-1" href="#" @click="deleteMessageAsync(message.id)">
                Delete <i class="bx bx-trash text-muted ms-2"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: Object,
            required: true
        }
    },
    methods: {
        async deleteMessageAsync(id) {
            await this.$store.dispatch('chats/deleteMessageAsync', id);
        }
    },
}
</script>

<style>

</style>