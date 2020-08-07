<template>
  <div>
    <div class="Icon-img"></div>
    <div class="wrapper-info">
      <p class="name">Nikita Shitov</p>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icon"
};
</script>

<style scoped>
.wrapper-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
}
.Icon-img {
  background: #000 url("../assets/just_example.jpg") no-repeat center center /
    contain;
  width: 86px;
  height: 86px;
  border-radius: 100%;
  margin-left: 20px;
}
.wrapper-info > .name {
  color: #0d1c2e;
  font-size: 18px;
  line-height: 21px;
  font-weight: 800;
}
span::before {
  position: absolute;
  width: 11px;
  height: 6px;
  content: " ";
  background-image: url("../assets/Icon-Shape.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 10px;
  margin-top: 9px;
}
</style>
