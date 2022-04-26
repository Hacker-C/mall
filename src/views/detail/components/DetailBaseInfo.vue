<template>
  <div class="info-container" v-if="info">
    <div class="info-title">
      <h3>{{ info.title }}</h3>
    </div>
    <div class="price">
      <span class="new-price">{{ info.newPrice }}</span>
      <span class="old-price">{{ info.oldPrice }}</span>
      <span class="discount-desc">{{ info.discount }}</span>
    </div>
    <div class="extra" v-if="info.columns">
      <span>{{ info.columns[0] }}</span>
      <span>{{ info.columns[1] }}</span>
      <span>{{ service }}</span>
    </div>
    <!-- 解决解析时还没获取数据就尝试读取属性导致读不到属性的问题 -->
    <div class="services" v-if="this.info.services">
      <div v-for="(item, index) in this.info.services.slice(0, 2)" :key="index">
        <img :src="item.icon" alt="" />
        <span>
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    info: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    service() {
      return this.info.services[2].name
    }
  }
}
</script>

<style lang="less" scoped>
.info-container {
  .info-title {
    font-size: 19px;
    padding: 10px;
    color: #555;
  }
  .price {
    padding: 15px 10px;
    span {
      padding: 0 3px;
    }
    .new-price {
      font-size: 30px;
      color: @color-tint;
    }
    .old-price {
      font-size: 20px;
      color: #777;
      text-decoration: line-through;
    }
    .discount-desc {
      background-color: @color-tint;
      color: #fff;
      font-size: 18px;
      padding: 0 5px;
      border-radius: 10px;
      position: relative;
      bottom: 10px;
    }
  }
  .extra {
    padding: 10px 0;
    font-size: 17px;
    color: #8c8c8c;
    display: flex;
    border-bottom: 3px solid #ccc;
    span {
      flex: 1;
      text-align: center;
    }
  }
  .services {
    display: flex;
    border-bottom: 3px solid #ccc;
    div {
      padding: 10px;
      height: 80px;
      img {
        height: 20px;
      }
      span {
        font-size: 18px;
      }
      &:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      &:nth-child(2) {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
}
</style>
