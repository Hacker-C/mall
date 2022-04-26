<template>
  <div class="detail-info">
    <header v-if="detailInfo.desc">
      <span>{{ detailInfo.desc }}</span>
      <span v-for="i in 2" :key="i"></span>
    </header>
    <main>
      <header v-if="detailInfo.detailImage">{{ title }}</header>
      <section v-if="detailInfo.detailImage">
        <img v-for="(item, index) in images" :src="item" :key="index" />
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
  }
}
</script>

<style lang="less" scoped>
.detail-info {
  header {
    display: flex;
    padding: 10px;
    span {
      flex: 1;
      height: 70px;
      line-height: 70px;
      font-size: 18px;
      color: #333;
    }
    span:nth-child(1) {
      border-top: 2px solid #aaa;
      &:before {
        content: '';
        display: block;
        height: 6px;
        width: 6px;
        background-color: #000;
        position: relative;
        bottom: 4px;
      }
    }
    span:nth-child(3) {
      position: relative;
      border-bottom: 2px solid #aaa;
      &:before {
        content: '';
        display: block;
        height: 6px;
        width: 6px;
        background-color: #000;
        position: absolute;
        bottom: -4px;
        right: 0;
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
