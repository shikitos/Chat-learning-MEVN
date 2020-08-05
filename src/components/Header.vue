<template>
  <div>
    <Icon class="Icon" />
    <nav>
      <ul>
        <li class="Header-home">Home</li>
        <li class="Header-chat">Chat</li>
        <li class="Header-contact">Contact</li>
        <li class="Header-notifications">Notifications</li>
        <li class="Header-settings">Settings</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Header",
  components: {
    Icon
  }
};
</script>

<style scoped>
.Icon,
ul {
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-left: 47px;
}
ul {
  list-style: none;
  margin-left: 79px;
}
ul > li {
  margin-bottom: 46px;
  text-transform: uppercase;
  color: #707c97;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
}
.Icon {
  margin-top: 87px;
  margin-bottom: 75px;
}
ul > li:hover {
  color: #2a8bf2;
}
.Header-home::before {
  content: " ";
  position: absolute;
  background: url("../assets/Header-home.svg");
  width: 24px;
  height: 24px;
  left: 35px;
  top: 281px;
}
.Header-home:hover::before {
  content: url("../assets/Header-home-hover.svg");
}
.Header-chat::before {
  content: " ";
  position: absolute;
  background: url("../assets/Header-chat.svg");
  width: 24px;
  height: 24px;
  left: 35px;
  top: 346px;
}
.Header-chat:hover::before {
  content: url("../assets/Header-chat-hover.svg");
}
.Header-contact::before {
  content: " ";
  position: absolute;
  background: url("../assets/Header-contact.svg");
  width: 24px;
  height: 24px;
  left: 35px;
  top: 412px;
}
.Header-contact:hover::before {
  content: url("../assets/Header-contact-hover.svg");
}
.Header-notifications::before {
  content: " ";
  position: absolute;
  background: url("../assets/Header-notifications.svg");
  width: 24px;
  height: 24px;
  left: 35px;
  top: 478px;
}
.Header-notifications:hover::before {
  content: url("../assets/Header-notifications-hover.svg");
}
.Header-settings::before {
  content: " ";
  position: absolute;
  background: url("../assets/Header-settings.svg");
  width: 24px;
  height: 24px;
  left: 35px;
  top: 541px;
}
.Header-settings:hover::before {
  content: url("../assets/Header-settings-hover.svg");
}
</style>
