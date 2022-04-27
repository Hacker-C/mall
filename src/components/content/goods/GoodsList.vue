<template>
  <div>
    <h3 class="goods-title">{{ title }}</h3>
    <div class="goods-list">
      <GoodsItem v-for="item in goodsList" :key="item.image" :item="item" />
    </div>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
export default {
  name: 'GoodsList',
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style lang="less" scoped>
.goods-title {
  color: #333;
  font-weight: 400;
  font-size: 20px;
  padding: 10px;
  text-align: center;
}
.goods-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
