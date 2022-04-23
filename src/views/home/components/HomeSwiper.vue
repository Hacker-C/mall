<template>
  <Swiper>
    <SwiperItem v-for="(item, index) in bannerImages" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper'
import SwiperItem from '@/components/common/swiper/SwiperItem'

export default {
  name: 'HomeSwiper',
  props: {
    bannerImages: {
      type: Array
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style lang="less" scoped></style>
