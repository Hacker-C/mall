<template>
  <div id="app">
    <router-view></router-view>
    <TabBar />
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style lang="less" scoped></style>
