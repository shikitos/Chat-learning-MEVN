<template>
  <div>
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
div {
  display: flex;
  margin-left: 5%;
  align-self: flex-end;
  margin-bottom: 40px;
  flex-direction: row;
  background: #fff;
  border-top: 1px solid rgba(112, 143, 151, 0.15);
}
input {
  padding: 27px 61px;
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
button {
  cursor: pointer;
  background: url("../../assets/Chat-send.svg") no-repeat center;
  box-shadow: 4px 4px 25px rgba(42, 139, 242, 0.15),
    2px 2px 25px rgba(42, 139, 242, 0.05), 4px 6px 10px rgba(42, 139, 242, 0.15);
  border: none;
  border-radius: 100%;
  padding: 15px;
  height: fit-content;
  display: flex;
  align-self: center;
}
</style>
