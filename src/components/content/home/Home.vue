<template>
  <div>
    <NavBar class="home-nav">
      <template #center>购物街</template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>
.home-nav {
  background-color: @color-tint;
  color: #fff;
}
</style>
