<template>
  <div class="carbar">
    <div class="check-all" @click="checkAll">
      <div>
        <img v-show="isCheckAll" src="@/assets/images/cart/chosen.png" alt="" />
      </div>
      <div>全选</div>
    </div>
    <div class="total">合计：</div>
    <div class="go">去结算(6)</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  computed: {
    ...mapGetters({
      isCheckAll: 'isCheckAll'
    })
  },
  methods: {
    checkAll() {
      this.$store.dispatch('checkAll', !this.isCheckAll)
    }
  }
}
</script>

<style lang="less" scoped>
.carbar {
  position: fixed;
  bottom: 70px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #ddd;
  display: flex;
  .check-all {
    flex: 1;
    margin-left: 10px;
    display: flex;
    div:nth-child(1) {
      width: 22px;
      height: 22px;
      outline: 1px solid #555;
      border-radius: 22px;
      position: relative;
      top: 9px;
      img {
        width: 22px;
        position: absolute;
      }
    }
    div:nth-child(2) {
      font-size: 14px;
      margin-left: 3px;
      color: #666;
    }
  }
  .total {
    flex: 3;
    color: #555;
    font-size: 18px;
  }
  .go {
    flex: 2;
    color: #fff;
    font-size: 16px;
    text-align: center;
    background-color: #ff5200;
  }
}
</style>
