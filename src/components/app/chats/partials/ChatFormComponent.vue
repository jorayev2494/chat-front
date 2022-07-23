<template>
    <div class="chat-input-section p-3 p-lg-4">
        <media-preview-component v-if="previewMedias.length" :medias="previewMedias" :title="'Uploaded medias'"></media-preview-component>
        <form id="chatinput-form" @submit.prevent="sendMessageAsync()">
            <div class="row g-0 align-items-center">                                    
                <div class="col-auto">
                    <div class="chat-input-links me-md-2">
                        <div class="links-list-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="More">
                            <button type="button" class="btn btn-link text-decoration-none btn-lg waves-effect" data-bs-toggle="collapse" data-bs-target="#chatinputmorecollapse" aria-expanded="false" aria-controls="chatinputmorecollapse">
                                <i class="bx bx-dots-horizontal-rounded align-middle"></i>
                            </button>
                        </div>
                        <div class="links-list-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Emoji">
                            <button type="button" class="btn btn-link text-decoration-none btn-lg waves-effect emoji-btn" id="emoji-btn">
                                <i class="bx bx-smile align-middle"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="position-relative">
                        <div class="chat-input-feedback">
                            Please Enter a Message
                        </div>
                        <input autocomplete="off" type="text" class="form-control form-control-lg chat-input" v-model="message.text" id="chat-input" placeholder="Type your message...">
                    </div>
                </div>
                <div class="col-auto">
                    <div class="chat-input-links ms-2 gap-md-1">
                        <div class="links-list-item d-none d-sm-block"  data-bs-container=".chat-input-links" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-html="true"  data-bs-placement="top" data-bs-content="<div class='loader-line'><div class='line'></div><div class='line'></div><div class='line'></div><div class='line'></div><div class='line'></div></div>">
                            <button type="button" class="btn btn-link text-decoration-none btn-lg waves-effect">
                                <i class="bx bx-microphone align-middle"></i>
                            </button>
                        </div>
                        <div class="links-list-item">
                            <button type="submit" class="btn btn-primary btn-lg chat-send waves-effect waves-light" data-bs-toggle="collapse" data-bs-target=".chat-input-collapse.show" >
                                <i class="bx bxs-send align-middle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <div class="chat-input-collapse collapse" id="chatinputmorecollapse">
            <input id="attachedfile-input" type="file" class="d-none" name="medias[]" multiple @change="uploadFiles($event)">
            <label for="attachedfile-input" class="avatar-sm mx-auto stretched-link">
                <span class="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                    <i class="bx bx-paperclip"></i>
                    Upload Files
                </span>
            </label>
            <div class="card mb-0">
                <div class="card-body py-3">
                    <!-- Swiper -->
                    <div class="swiper chatinput-links">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="text-center px-2 position-relative">
                                    <div>

                                        <!-- <input id="attachedfile-input" type="file" class="d-none" name="medias" @change="uploadFiles($event)">
                                        <label for="attachedfile-input" class="avatar-sm mx-auto stretched-link">
                                            <span class="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                                <i class="bx bx-paperclip"></i>
                                                Upload Files
                                            </span>
                                        </label> -->
                                    </div>
                                    <h5 class="font-size-11 text-uppercase mt-3 mb-0 text-body text-truncate">Attached</h5>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="text-center px-2">
                                    <div class="avatar-sm mx-auto">
                                        <div class="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                            <i class="bx bxs-camera"></i>
                                        </div>
                                    </div>
                                    <h5 class="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                                        <a href="#" class="text-body stretched-link">Camera</a>
                                    </h5>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="text-center px-2">
                                    <div class="avatar-sm mx-auto">
                                        <div class="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                            <i class="bx bx-images"></i>
                                        </div>
                                    </div>
                                    
                                    <h5 class="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                                        <a href="#" class="text-body stretched-link">Gallery</a>
                                    </h5>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="text-center px-2">
                                    <div class="avatar-sm mx-auto">
                                        <div class="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                            <i class="bx bx-headphone"></i>
                                        </div>
                                    </div>
                                    
                                    <h5 class="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                                        <a href="#" class="text-body stretched-link">Audio</a>
                                    </h5>
                                </div>
                            </div>
                            <!-- <div class="swiper-slide">
                                <div class="text-center px-2">
                                    <div class="avatar-sm mx-auto">
                                        <div class="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                            <i class="bx bx-current-location"></i>
                                        </div>
                                    </div>
                                    
                                    <h5 class="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                                        <a href="#" class="text-body stretched-link">Location</a>
                                    </h5>
                                </div>
                            </div> -->
                            <div class="swiper-slide">
                                <div class="text-center px-2">
                                    <div class="avatar-sm mx-auto">
                                        <div class="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                            <i class="bx bxs-user-circle"></i>
                                        </div>
                                    </div>
                                    <!-- <h5 class="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                                        <a href="#" class="text-body stretched-link" data-bs-toggle="modal" data-bs-target=".contactModal">Contacts</a>
                                    </h5> -->
                                </div>
                            </div>

                            <div class="swiper-slide d-block d-sm-none">
                                <div class="text-center px-2">
                                    <div class="avatar-sm mx-auto">
                                        <div class="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                            <i class="bx bx-microphone"></i>
                                        </div>
                                    </div>
                                    <h5 class="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                                        <a href="#" class="text-body stretched-link">Audio</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="chat-input-collapse replyCollapse collapse">
            <div class="card mb-0">
                <div class="card-body py-3">
                    <div class="replymessage-block mb-0 d-flex align-items-start">
                        <div class="flex-grow-1">
                            <h5 class="conversation-name">Jean Berwick</h5>
                            <p class="mb-0">Yeah everything is fine. Our next meeting tomorrow at 10.00 AM</p>
                        </div>
                        <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-link mt-n2 me-n3 font-size-18" data-bs-toggle="collapse" data-bs-target=".replyCollapse.show">
                                <i class="bx bx-x align-middle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import MediaPreviewComponent from '../../components/MediaPreviewComponent.vue';

    export default {
        name: 'ChatFormComponent',
        data() {
            return {
                wsEvent: null,
                message: {
                    text: null,
                },
                previewMedias: [],
            }
        },
        methods: {
            sendMessageAsync: async function () {
                // this.sendMessage();

                // return;
                
                this.message.chat_id = this.currentChat.id;

                let messageFormData = new FormData();
                for (const messageProp in this.message) {
                    if (Object.hasOwnProperty.call(this.message, messageProp)) {
                        const value = this.message[messageProp];
                        if (value !== null) {
                            messageFormData.append(messageProp, value);
                        }
                    }
                }

                this.previewMedias = [];

                await this.$store.dispatch('chats/sendMessageAsync', messageFormData).then(() => {
                    this.clearMessage();
                }).catch((err) => {
                    window.console.log('err: ', err);
                });
            },
            uploadFiles(event) {
                this.previewMedias = event.target.files;

                this.previewMedias.forEach((media, idx) => {
                    this.message[`medias[${idx}]`] = media;
                });
            },
            clearMessage() {
                this.message = {};
            },
            sendMessage: function () {
                this.message.chat_id = this.currentChat.id;
                console.info('sendMessage: ', this.wsConnection, 'message: ', this.message);
                let wsData = {
                    event: this.wsEvent,
                    data: this.message
                };
                this.wsConnection.send(JSON.stringify(wsData));
                console.log('wsData sendMessage: ', JSON.stringify(wsData));
                this.clearMessage();
            }
        },
        computed: {
            ...mapGetters({
                currentChat: 'chats/getCurrentChat',
                currentMessages: 'chats/getCurrentMessages'
            })
        },
        components: {
            MediaPreviewComponent
        },
        created() {            
            this.wsConnection = new WebSocket('ws://127.0.0.1:6001/my-websocket?appKey=laravel_rdb', [], {
                headers: {
                    // ['Set-Cookie']: cookie,
                    'Authentication': `Bearer ${this.$store.getters['auth/getAccessToken']}`
                },
            });

            this.wsConnection.onopen = event => {
                console.info('ws onOpen:', event);
                console.info('ws onOpen:', this.wsConnection);
            }
        },
        mounted() {
            this.wsConnection.onmessage = (event) => {
                let wsEventData = JSON.parse(event.data);
                console.info('ws onMessage', event);
                console.info('ws onMessage data: ', wsEventData.event);
                this.wsEvent = wsEventData.event;
                console.info('mounted ws onMessage data: ', this.$data);
            }
        },
    }
</script>

<style>

</style>