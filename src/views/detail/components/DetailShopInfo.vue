<template>
  <div class="shop">
    <header>
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </header>
    <main>
      <div class="left">
        <div class="sell">
          <div>
            {{ shop.sells }}
          </div>
          <div>总销量</div>
        </div>
        <div class="total">
          <div>{{ shop.goodsCount }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item, index) in shop.score" :key="index">
            <span>{{ item.name }}</span>
            <span :style="{ color: item.isBetter ? 'red' : 'green' }">
              {{ item.score }}
            </span>
            <span :style="{ backgroundColor: item.isBetter ? 'red' : 'green' }">
              {{ item.isBetter ? '高' : '低' }}
            </span>
          </li>
        </ul>
      </div>
    </main>
    <footer>
      <div>进店逛逛</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.shop {
  header {
    padding: 10px;
    img {
      height: 60px;
      vertical-align: middle;
      border-radius: 50%;
      border: 2px solid #ccc;
    }
    span {
      font-size: 20px;
      color: @color-text;
      margin-left: 10px;
    }
  }
  main {
    font-size: 17px;
    display: flex;
    margin-top: 20px;
    .left {
      flex: 1;
      display: flex;
      > div {
        flex: 1;
        text-align: center;
        > div {
          height: 40px;
          line-height: 40px;
        }
      }
    }
    .right {
      flex: 1;
      position: relative;
      &:before {
        content: '';
        display: block;
        height: 50px;
        width: 1px;
        background-color: #ccc;
        position: absolute;
        top: 15px;
      }
      ul {
        padding: 0 10px 0 20px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li {
          display: flex;
          span:nth-child(1) {
            flex: 3;
          }
          span:nth-child(2) {
            flex: 2;
          }
          span:nth-child(3) {
            flex: 1;
            color: #fff;
            text-align: center;
            padding: 2px 0;
          }
        }
      }
    }
  }
  footer {
    display: flex;
    justify-content: center;
    div {
      font-size: 18px;
      color: @color-text;
      background-color: #f1f5fb;
      width: 180px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 5px;
      margin-top: 20px;
    }
  }
}
</style>
