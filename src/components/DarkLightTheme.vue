<template>
  <div class="DarkLightTheme">
    <label for="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        value="false"
        v-model="checked"
        @change="checkInput"
      />
      <span></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "DarkLightTheme",
  data: function() {
    return {
      checked: this.checked
    };
  },
  methods: {
    checkInput: function() {
      //recreate this function as short as I can
      let app = document.getElementById("app");
      let header = document.getElementById("header");
      let headerIcon = document.getElementById("headerIcon");
      let chatArea = document.getElementById("chatArea");
      let inputAndClick = document.getElementById("inputAndClick");
      let userInfo = document.getElementById("userInfo");
      let userActionsAttach = document.getElementById("userActionsAttach");
      let userActionMore = document.getElementById("userActionMore");
      let userLogoInfo = document.getElementById("userLogoInfo");
      if (this.checked) {
        app.classList.add("Dark-Theme");
        header.classList.add("Dark-Theme-header");
        headerIcon.classList.add("Dark-Theme-header");
        chatArea.classList.add("Dark-Theme-header");
        inputAndClick.classList.add("Dark-Theme-header");
        userInfo.classList.add("Dark-Theme-header");
        userActionsAttach.classList.add("Dark-Theme-Chat-attach");
        userActionMore.classList.add("Dark-Theme-Chat-more");
        userLogoInfo.classList.add("Dark-Theme-header");
      } else {
        app.classList.remove("Dark-Theme");
        header.classList.remove("Dark-Theme-header");
        headerIcon.classList.remove("Dark-Theme-header");
        chatArea.classList.remove("Dark-Theme-header");
        inputAndClick.classList.remove("Dark-Theme-header");
        userInfo.classList.remove("Dark-Theme-header");
        userActionsAttach.classList.add("Dark-Theme-Chat-action");
        userActionMore.classList.add("Dark-Theme-Chat-action");
        userLogoInfo.classList.remove("Dark-Theme-header");
      }
    }
  }
};
</script>

<style scoped>
/*
.DarkLightTheme {
  transform: translate(150px, 150px);
  position: relative;
  width: 90px;
  height: 40px;
  border: 2px solid white;
  z-index: -2;
  border-right: 50px;
}
.DarkLightTheme input {
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
span {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 35px;
  height: 35px;
  z-index: -1;
  border-right: 50px;
  transition: all 0.4s;
  background-color: rgb(255, 255, 255);
}
.DarkLightTheme input:checked ~ span {
  transform: translateX(145%) scale(1);
  background-color: #1651ff;
}
*/
</style>
