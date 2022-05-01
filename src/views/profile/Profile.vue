<template>
  <div>
    <TopView />
    <MiddleView />
    <BottomView />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import TopView from './components/TopView'
import MiddleView from './components/MiddleView'
import BottomView from './components/BottomView'

export default {
  name: 'Profile',
  components: {
    NavBar,
    TopView,
    MiddleView,
    BottomView
  }
}
</script>

<style lang="less" scoped>
.title {
  background-color: @color-tint;
  color: #fff;
  font-size: 19px;
}
</style>
