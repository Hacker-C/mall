<template>
  <div>
    <div class="empty" v-show="!goodsList.length">
      <img src="@/assets/images/cart/empty_cart.png" alt="" />
      <p>登录后可同步购物车中商品</p>
    </div>
    <CartListItem v-for="item in goodsList" :goods="item" :key="item.iid" />
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'

export default {
  name: 'CartList',
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    CartListItem
  }
}
</script>

<style lang="less" scoped>
.empty {
  text-align: center;
  margin-top: 50%;
  transform: translateY(-50%);
  img {
    width: 100px;
  }
  p {
    font-size: 18px;
    margin-top: 10px;
    color: #333;
  }
}
</style>
