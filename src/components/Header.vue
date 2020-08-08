<template>
  <div class="header">
    <Icon class="Icon" />
    <nav>
      <ul>
        <li class="Header-home">
          <a href="#">Home</a>
        </li>
        <li class="Header-chat">
          <a href="#">Chat</a>
        </li>
        <li class="Header-contact">
          <a href="#">Contact</a>
        </li>
        <li class="Header-notifications">
          <a href="#">Notifications</a>
        </li>
        <li class="Header-settings">
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
    <DarkLightTheme />
    <Logout class="Logout" />
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import Logout from "@/components/Logout";
import DarkLightTheme from "@/components/DarkLightTheme";

export default {
  name: "Header",
  components: {
    Icon,
    Logout,
    DarkLightTheme
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #707c97;
}
.header {
  width: 20%;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.Icon,
ul {
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-left: 40px;
}
ul {
  list-style: none;
  margin-left: 70px;
}
ul > li {
  margin-bottom: 35px;
  text-transform: uppercase;
  color: #707c97;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  font-weight: 800;
}
.Icon {
  margin-top: 5vh;
  margin-bottom: 7vh;
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
  margin-top: -2.5px;
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
  margin-top: -2.5px;
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
  margin-top: -2.5px;
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
  margin-top: -2.5px;
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
  margin-top: -2.5px;
}
.Header-settings:hover::before {
  content: url("../assets/Header-settings-hover.svg");
}
nav {
  margin-bottom: 37vh;
}
</style>
