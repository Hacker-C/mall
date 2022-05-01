<template>
  <div class="bottom-view">
    <div>
      <img src="@/assets/images/profile/gouwuche-tianchong.png" alt="" />
      <span>我的购物车</span>
    </div>
    <div>
      <img src="@/assets/images/profile/gouwu.png" alt="" />
      <span>下载购物APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomView'
}
</script>

<style lang="less" scoped>
.bottom-view {
  div:nth-child(1) {
    border-bottom: 1px solid #ccc;
  }
  div {
    padding: 10px 15px;
    img {
      width: 25px;
      vertical-align: middle;
    }
    span {
      font-size: 18px;
      margin-left: 10px;
    }
  }
}
</style>
