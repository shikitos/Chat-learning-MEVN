<template>
  <div>
    <img src="../assets/just_example.jpg" alt="" />
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
img {
  width: 86px;
  height: 86px;
  border-radius: 100%;
}
.wrapper-info > .name {
  color: #0d1c2e;
  font-size: 18px;
  line-height: 21px;
}
span::before {
  position: absolute;
  width: 10px;
  height: 5px;
  content: " ";
  background-image: url("../assets/Icon-Shape.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 10px;
  margin-top: 6px;
}
</style>
