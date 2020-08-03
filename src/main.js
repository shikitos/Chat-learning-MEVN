import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

function fillSpaceWhenResize() {
  let app = document.getElementById("app");
  app.addEventListener(
    "resize",
    () => {
      app.style.width = window.innerWidth;
      app.style.height = window.innerHeight;
    },
    false
  );
}

fillSpaceWhenResize();
