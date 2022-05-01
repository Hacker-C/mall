<template>
  <div class="sub-scroll">
    <VScroll :setWidth75="true" ref="subScroll">
      <ul class="item-container">
        <li v-for="item in subCategoryList" :key="item.acm">
          <img :src="item.image" alt="" />
          <p>
            {{ item.title }}
          </p>
        </li>
      </ul>
    </VScroll>
  </div>
</template>

<script>
import VScroll from '@/components/common/scroll/VSroll'

export default {
  name: 'SubCategory',
  props: {
    subCategoryList: {
      type: Array,
      default() {
        return {}
      }
    }
  },
  components: {
    VScroll
  }
}
</script>

<style lang="less" scoped>
.sub-scroll {
  flex: 3;
  width: 100%;
  position: relative;
}
.item-container {
  width: 100%;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  li {
    text-align: center;
    margin-top: 30px;
    img {
      width: 50px;
    }
    p {
      margin-top: 10px;
      font-size: 15px;
    }
  }
}
</style>
