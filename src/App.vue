<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <TabBar v-if="!/detail/.test($route.path)" />
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
