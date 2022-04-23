<template>
  <div class="goods-list">
    <GoodsItem v-for="item in goodsList" :key="item.image" :item="item" />
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
export default {
  name: 'GoodsList',
  props: {
    goodsList: {
      type: Array
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
