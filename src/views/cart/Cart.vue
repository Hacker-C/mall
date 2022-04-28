<template>
  <div>
    <NavBar class="nav-bar">
      <template #center>购物车({{ length }})</template>
    </NavBar>
    <VScroll ref="csroller">
      <CartList :goodsList="cartList" />
    </VScroll>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import VScroll from '@/components/common/scroll/VSroll'
import CartList from './components/CartList.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    VScroll,
    CartList
  },
  computed: {
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
