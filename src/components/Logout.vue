<template>
  <div>
    <p>Log out</p>
  </div>
</template>

<script>
export default {
  name: "Logout"
};
</script>

<style scoped>
p::before {
  content: " ";
  position: absolute;
  background: url("../assets/Header-logout.svg");
  width: 24px;
  height: 24px;
  margin-right: 16px;
  margin-top: -2.5px;
  left: 35px;
}
p {
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  color: #707c97;
  display: flex;
  margin-left: 70px;

}
</style>
