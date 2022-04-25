<template>
  <Swiper>
    <SwiperItem v-for="(item, index) in bannerImages" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load.once="imageLoad" />
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
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) this.$emit('swiperImageLoad')
      this.isLoad = true
    }
  }
}
</script>

<style lang="less" scoped></style>
