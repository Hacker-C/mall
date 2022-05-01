<template>
  <NavBar class="navbar">
    <template #center>分类</template>
  </NavBar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'CategoryNavBar',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background-color: @color-tint;
  color: #fff;
}
</style>
