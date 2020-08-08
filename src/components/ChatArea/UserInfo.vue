<template>
  <div class="UserInfo" id="userInfo">
    <div>
      <UserLogo />
    </div>
    <div>
      <UserActions />
    </div>
  </div>
</template>

<script>
import UserLogo from "@/components/ChatArea/UserLogo";
import UserActions from "@/components/ChatArea/UserActions";

export default {
  name: "UserInfo",
  components: {
    UserLogo,
    UserActions
  }
};
</script>

<style scoped>
.UserInfo {
  background: #fafbff;
  border-radius: 6px 6px 0 0;
  border-bottom: 1px solid rgba(112, 124, 151, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
