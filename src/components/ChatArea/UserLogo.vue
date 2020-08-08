<template>
  <div class="UserLogo">
    <img src="../../assets/Chat-ElonMusk.jpg" alt="Avatar" />
    <div class="UserLogo-info" id="userLogoInfo">
      <p>Elon Musk</p>
      <span>last online 5 hours ago</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLogo"
};
</script>

<style scoped>
.UserLogo {
  display: flex;
  flex-direction: row;
  margin-left: 25px;
}
.UserLogo > img {
  width: 54px;
  height: 54px;
  border-radius: 100%;
}
.UserLogo-info {
  margin-left: 20px;
  display: block;
}
.UserLogo-info > p {
  text-align: left;
  font-family: TT Norms;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-transform: capitalize;
  color: #0d1c2e;
  margin-bottom: 6px;
}
.UserLogo-info > span {
  text-align: left;
  font-family: TT Norms;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  color: #2a8bf2;
}
</style>
