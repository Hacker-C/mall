<template>
  <div class="goods-item">
    <img :src="item.show.img" />
    <p>{{ item.title }}</p>
    <div class="info">
      <span>{{ price(item.orgPrice) }}</span>
      <span>
        <img class="star" src="@/assets/icons/star.png" alt="" />
        {{ item.cfav }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    price(p) {
      return p.slice(1)
    }
  }
}
</script>
<style lang="less" scoped>
.goods-item {
  width: 48%;
  img {
    width: 100%;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    padding: 5px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info {
    display: flex;
    justify-content: center;
    span:nth-child(1) {
      color: @color-tint;
      margin-right: 5px;
    }
    font-size: 20px;
  }
  .star {
    width: 23px;
    vertical-align: middle;
  }
}
</style>
