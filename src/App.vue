<template>
  <router-view></router-view>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {},
  methods: {
    chatsListen: function (chats) {
      chats.forEach((chat) => {
        window.console.log("chatsListenId: ", chat);
        // window.Echo.channel(`chat.${chat.id}`)
        //             .listen('.message.sent', (event) => {
        //                 window.console.log("WebSocket: ", event);
        //                 if (event.message.chat_id == this.currentChat.id) {
        //                     // event.message.chat_id === this.currentChat.id
        //                     console.log('Public channel Socket message: ', event.message);
        //                     this.$store.commit('chats/pushCurrentMessages', event.message)
        //                 } else {
        //                     window.alert(`Chat id: ${event.message.chat_id}, Text of message: ${event.message.text}`);
        //                 }
        //             });

        window.Echo.private(`chat.${chat.id}`).listen(".message.sent", (event) => {
          window.console.log("Private channel: ", event);
        });
      });
    },
    chatsLeave: function (chats) {
        chats.forEach((chat) => {
        window.console.log('Laving: ', chat);
        window.console.log("ChatsListenId: ", chat);
        // window.Echo.channel(`chat.${chat.id}`)
        //             .listen('.message.sent', (event) => {
        //                 window.console.log("WebSocket: ", event);
        //                 if (event.message.chat_id == this.currentChat.id) {
        //                     // event.message.chat_id === this.currentChat.id
        //                     console.log('Public channel Socket message: ', event.message);
        //                     this.$store.commit('chats/pushCurrentMessages', event.message)
        //                 } else {
        //                     window.alert(`Chat id: ${event.message.chat_id}, Text of message: ${event.message.text}`);
        //                 }
        //             });

        window.Echo.private(`chat.${chat.id}`).leave(".message.sent", (event) => {
          window.console.log("Private channel: ", event);
        });
      });
    },
  },
  created() {
    this.chatsUnsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "chats/setCurrentChat") {
        window.console.log("State subscribe", state.chats);
        this.chatsListen(state.chats.chats);
      }
    });
  },
  computed: {
    ...mapGetters({
      chats: "chats/getChats",
      currentChat: "chats/getCurrentChat",
      currentMessages: "chats/getCurrentMessages",
    }),
  },
  unmounted() {
    this.chatsUnsubscribe();
    this.chatsLeave(this.chats);
  },
};
</script>

<style></style>
