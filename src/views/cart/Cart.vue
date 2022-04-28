<template>
  <div>
    <NavBar class="nav-bar">
      <template #center>购物车({{ length }})</template>
    </NavBar>
    <VScroll ref="csroller">
      <CartList :goodsList="cartList" />
    </VScroll>
    <CartBottomBar />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import VScroll from '@/components/common/scroll/VSroll'

import CartList from './components/CartList.vue'
import CartBottomBar from './components/CartBottomBar.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    VScroll,
    CartList,
    CartBottomBar
  },
  computed: {
    // TIP 数据从 store 中取出，所以只要 state 中的数据改变了，组件都能监听到
    ...mapGetters({
      length: 'cartListLength',
      cartList: 'cartList'
    })
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  background-color: @color-tint;
  color: #fff;
}
</style>
