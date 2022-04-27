<template>
  <div class="container">
    <div class="size">
      <ul v-if="goodsParams.sizes">
        <li v-for="(item, index) in goodsParams.sizes[0]" :key="index">
          <span v-for="(item, index) in item" :key="index">{{ item }}</span>
        </li>
      </ul>
    </div>
    <div class="info">
      <ul v-if="goodsParams.infos">
        <li v-for="(item, index) in goodsParams.infos" :key="index">
          <span>{{ item.key }}</span>
          <span>{{ item.value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsParams',
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 10px;
  font-size: 16px;
  color: #666;
  .size {
    border-bottom: 3px solid @color-bg;
    ul li {
      display: flex;
      height: 45px;
      line-height: 45px;
      &:nth-child(-n + 5) {
        border-bottom: 1px solid #ddd;
      }
      span:nth-child(1) {
        flex: 4;
      }
      span:nth-child(n + 2) {
        flex: 2;
      }
    }
  }
  .info {
    ul li {
      display: flex;
      padding: 11px 0;
      border-bottom: 1px solid #ddd;
      span:nth-child(1) {
        flex: 1;
        display: flex;
        align-items: center;
      }
      span:nth-child(2) {
        flex: 2;
        color: @color-tint;
      }
    }
  }
}
</style>
