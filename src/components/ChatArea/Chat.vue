<template>
  <div class="Chat">
    <UserInfo />
    <ChatArea />
    <InputAndClick class="input-text" />
  </div>
</template>

<script>
import InputAndClick from "@/components/ChatArea/InputAndClick";
import ChatArea from "@/components/ChatArea/ChatArea";
import UserInfo from "@/components/ChatArea/UserInfo";

export default {
  name: "Chat",
  components: {
    InputAndClick,
    ChatArea,
    UserInfo
  }
};
</script>

<style scoped>
.Chat {
  min-width: 650px;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  align-self: flex-end;
  margin-bottom: 40px;
}
.input-text {
  flex-direction: row;
}
</style>
