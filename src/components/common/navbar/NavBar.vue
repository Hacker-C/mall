<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="less" scoped>
.navbar {
  height: @navbar-height;
  line-height: @navbar-height;
  border-bottom: 1px solid #ccc;
  // TODO 原生滚动需要使用
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  font-size: 22px;
  .center {
    flex: 1;
    text-align: center;
  }
  .left,
  .right {
    width: 50px;
  }
}
</style>
