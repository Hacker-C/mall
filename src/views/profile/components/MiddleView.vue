<template>
  <div class="middle">
    <div>
      <img src="@/assets/images/profile/xiaoxi.png" alt="" />
      <span>我的消息</span>
    </div>
    <div>
      <img src="@/assets/images/profile/jifen.png" alt="" />
      <span>积分商城</span>
    </div>
    <div>
      <img src="@/assets/images/profile/huiyuan.png" alt="" />
      <span>会员卡</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiddleView'
}
</script>

<style lang="less" scoped>
.middle {
  border-bottom: 20px solid @color-bg;
  div:nth-child(-n + 2) {
    border-bottom: 1px solid #ccc;
  }
  div {
    padding: 10px 15px;
    font-size: 17px;
    img {
      width: 25px;
      vertical-align: middle;
    }
    span {
      margin-left: 10px;
    }
  }
}
</style>
