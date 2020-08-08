<template>
  <div class="UserActions">
    <ul>
      <li>
        <button class="UserActions-attach" id="userActionsAttach"></button>
      </li>
      <li>
        <button class="UserActions-more" id="userActionMore"></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserAction"
};
</script>

<style scoped>
.UserActions {
  flex-direction: row;
  margin-right: 25px;
}
.UserActions > ul {
  display: flex;
  list-style: none;
}
.UserActions-attach {
  background: url("../../assets/Chat-attach.svg") no-repeat center;
  width: 52px;
  height: 52px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 100%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.03),
    0 7px 25px rgba(42, 139, 242, 0.03), 0 5px 25px rgba(42, 139, 242, 0.07);
  cursor: pointer;
}
.UserActions-more {
  background: url("../../assets/Chat-more.svg") no-repeat center;
  width: 52px;
  height: 52px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 100%;
  margin-left: 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.03),
    0 7px 25px rgba(42, 139, 242, 0.03), 0 5px 25px rgba(42, 139, 242, 0.07);
  cursor: pointer;
}
</style>
