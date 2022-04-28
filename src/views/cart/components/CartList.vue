<template>
  <div>
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

<style lang="less" scoped></style>
