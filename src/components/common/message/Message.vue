<template>
  <div class="msg-box">{{ msg }}</div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: {
      type: String,
      default: '这是一条提示信息'
    }
  }
}
</script>

<style lang="less" scoped>
@keyframes fadein {
  0% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.msg-box {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
  animation: fadein 2s forwards;
}
</style>
