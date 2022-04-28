<template>
  <div class="goods-item">
    <div class="check">
      <div>
        <img src="@/assets/images/cart/chosen.png" alt="" v-show="true" />
      </div>
    </div>
    <div @click="toDetail" class="img-box">
      <img :src="goods.image" alt="" />
    </div>
    <div class="info-box">
      <div class="title text-more">{{ goods.title }}}</div>
      <div class="desc text-more">{{ goods.desc }}</div>
      <div class="price">
        <div>￥{{ goods.price }}</div>
        <div>x{{ goods.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    toDetail() {
      this.$router.push('/detail/' + this.goods.iid)
    }
  }
}
</script>

<style lang="less" scoped>
.goods-item {
  display: flex;
  padding: 10px;
  .check {
    width: 50px;
    position: relative;
    div {
      height: 26px;
      width: 26px;
      border-radius: 26px;
      outline: 1px solid #ccc;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 6px;
      img {
        width: 26px;
      }
    }
  }
  .img-box {
    height: 110px;
    overflow: hidden;
    border-radius: 10px;
    img {
      width: 90px;
    }
  }
  .info-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 10px;
    width: 195px;
    .title {
      font-size: 20px;
      color: #444;
    }
    .desc {
      font-size: 16px;
      color: #555;
    }
  }
  .price {
    font-size: 21px;
    div:nth-child(1) {
      float: left;
      color: #f86024;
    }
    div:nth-child(2) {
      float: right;
    }
  }
}
</style>
