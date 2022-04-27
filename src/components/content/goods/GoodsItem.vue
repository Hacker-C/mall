<template>
  <div class="goods-item" @click="toDetail">
    <img :src="showImage" />
    <div class="info">
      <p>{{ item.title }}</p>
      <div>
        <span class="price">{{ price(item) }}</span>
        <span>
          <img class="star" src="@/assets/icons/star.png" alt="" />
          {{ item.cfav }}
        </span>
      </div>
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
    price(item) {
      let p = item.orgPrice || item.price
      return p.indexOf('￥') === -1 ? p : p.slice(1)
    },
    toDetail() {
      // TODO 有的 item_id 发送请求失效，所以判断一下，无法请求的就不请求
      if (this.item.iid) this.$router.push('/detail/' + this.item.iid)
      // this.$router.push('/detail/' + (this.item.iid || this.item.item_id))
    }
  },
  computed: {
    showImage() {
      return this.item.image || this.item.show.img
    }
  }
}
</script>
<style lang="less" scoped>
.goods-item {
  width: 48%;
  height: 340px;
  position: relative;
  img {
    width: 180px;
  }
  .info {
    font-size: 20px;
    position: absolute;
    bottom: 10px;
    div {
      display: flex;
      justify-content: center;
    }
    p {
      width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 18px;
      padding: 5px;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span:nth-child(1) {
      color: @color-tint;
      margin-right: 5px;
    }
  }
  .star {
    width: 23px;
    vertical-align: middle;
  }
}
</style>
