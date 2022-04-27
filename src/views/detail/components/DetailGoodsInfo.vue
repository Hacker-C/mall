<template>
  <div class="detail-info">
    <header v-if="detailInfo.desc">
      <div class="top"></div>
      <div class="middle">{{ detailInfo.desc }}</div>
      <div class="bottom"></div>
    </header>
    <main>
      <header v-if="detailInfo.detailImage">{{ title }}</header>
      <section v-if="detailInfo.detailImage">
        <img
          @load="imagesLoad"
          v-for="(item, index) in images"
          :src="item"
          :key="index"
        />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    images() {
      return this.detailInfo.detailImage[0].list
    },
    title() {
      return this.detailInfo.detailImage[0].key
    }
  },
  methods: {
    // TIP所有图片加载完才发送事件，以便于 Detial 组件正确的获取 offsetTop
    imagesLoad() {
      this.$emit('change')
    }
  }
}
</script>

<style lang="less" scoped>
.detail-info {
  header {
    padding: 20px;
    .middle {
      padding: 15px 0;
      font-size: 20px;
      color: #444;
    }
    .top {
      height: 1px;
      width: 100px;
      background-color: #333;
      &::before {
        content: '';
        display: block;
        height: 6px;
        width: 6px;
        background-color: #444;
        position: relative;
        bottom: 3px;
      }
    }
    .bottom {
      height: 1px;
      width: 100px;
      background-color: #333;
      position: absolute;
      right: 20px;
      &::after {
        content: '';
        display: block;
        height: 6px;
        width: 6px;
        background-color: #444;
        position: relative;
        bottom: 3px;
        left: 94px;
      }
    }
  }
  main {
    header {
      font-size: 20px;
      color: #333;
    }
    section {
      img {
        width: 100%;
      }
    }
  }
}
</style>
