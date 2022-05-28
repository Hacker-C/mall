<template>
  <div class="beian">
    ©MurphyChen 2022 |
    <a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备 2022004296号</a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BeiAn'
}
</script>

<style scoped lang="less">
.beian {
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  font-size: 14px;
  text-align: center;
  color: #333;
  background-color: #f5f4f5;
  a {
    color: #555;
    text-decoration: none;
  }
}
</style>
