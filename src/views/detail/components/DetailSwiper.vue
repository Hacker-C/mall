<template>
  <Swiper class="swiper-wrapper">
    <SwiperItem v-for="(item, index) in images" :key="index">
      <a href="">
        <img :src="item" alt="" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-wrapper {
  margin-top: @navbar-height;
  height: 300px;
  overflow: hidden;
}
</style>
