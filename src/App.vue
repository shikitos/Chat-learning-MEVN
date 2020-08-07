<template>
  <div id="app">
    <Header id="header" />
    <ChatArea />
  </div>
</template>

<script>
import Header from "@/components/Header";
import ChatArea from "@/components/ChatArea/Chat";

export default {
  name: "App",
  components: {
    ChatArea,
    Header
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "TT Norms";
  src: url("assets/fonts/TTNorms-Regular.ttf");
}
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: row;
  font-family: "TT Norms", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 100vh;
  background: linear-gradient(180deg, #f3f3fb 0%, #fdfbfd 100%);
}
#header {
  background: #ffffff;
  box-shadow: 14.0351px 0 25px rgba(86, 128, 248, 0.03),
    35.0877px 0 70px rgba(86, 128, 248, 0.05),
    23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02);
}
</style>
