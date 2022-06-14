<template>
    <li>
        <div class="d-flex align-items-center">
            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                <!-- <div class="avatar-title bg-soft-primary text-primary rounded-circle">
                    <i class="bx bx-file"></i>
                </div> -->
                <div class="avatar-title rounded-circle">
                    <img :src="chat.toUser.avatar" :alt="chat.toUser.avatar" width="50" height="50" />
                </div>
            </div>
            <div class="flex-grow-1 overflow-hidden">
                <h5 class="font-size-14 mb-1">
                    <a href="#" @click="loadChat(chat)" class="text-truncate p-0">{{ chat.toUser.full_name }}</a>
                </h5>
                <p class="text-muted text-truncate font-size-13 mb-0">
                    {{ getLastPreviewMessage(chat.messages) }}
                </p>
            </div>

            <div class="flex-shrink-0 ms-3">
                <div class="dropdown">
                    <a class="dropdown-toggle font-size-16 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="bx bx-dots-horizontal-rounded"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">
                            Open <i class="bx bx-folder-open ms-2 text-muted"></i>
                        </a>
                        <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">
                            Edit <i class="bx bx-pencil ms-2 text-muted"></i>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">
                            Delete <i class="bx bx-trash ms-2 text-muted"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        chat: {
            type: Object,
            required: true
        },
        loadChat: {
            type: Function,
            required: true
        }
    },
    methods: {
        getLastPreviewMessage(messages) {
            if (messages.length > 0) {
                return messages[0].text ?? 'No message text...';
            }

            return 'No message ...';
        }
    },
}
</script>

<style>

</style>