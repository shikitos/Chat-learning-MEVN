<template>
  <div class="InputAndClick">
    <label>
      <input type="text" placeholder="Type a message here" />
    </label>
    <button></button>
  </div>
</template>

<script>
export default {
  name: "InputAndClick"
};
</script>

<style scoped>
.InputAndClick {
  display: flex;
  margin-left: 5%;
  align-self: flex-end;
  margin-bottom: 20px;
  background: #fff;
  border-top: 1px solid rgba(112, 143, 151, 0.15);
  width: 100%;
}
.InputAndClick > label {
  flex: 8;
}
input {
  padding: 27px 61px 27px 0;
  width: 280px;
  border: none;
  outline: none;
}
input::placeholder {
  font-family: TT Norms;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  color: rgba(112, 124, 151, 0.5);
}
.InputAndClick > button {
  cursor: pointer;
  background: #2a8bf2 url("../../assets/Chat-send.svg") no-repeat center center /
    20px 20px;
  box-shadow: 4px 4px 25px rgba(42, 139, 242, 0.15),
    2px 2px 25px rgba(42, 139, 242, 0.05), 4px 6px 10px rgba(42, 139, 242, 0.15);
  border: none;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  align-self: center;
  margin-right: 25px;
}
</style>
