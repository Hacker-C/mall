<template>
  <div>
    <NavBar class="home-nav">
      <template #center>购物街</template>
    </NavBar>
    <HomeSwiper :bannerImages="bannerImages" />
    <RecommendView :recommendImages="recommend" />
    <FeaturesView />
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './components/HomeSwiper'
import RecommendView from './components/RecommendView'
import FeaturesView from './components/FeaturesView'

import { getHomeMultidata } from '@/apis/home.js'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeaturesView
  },
  data() {
    return {
      banners: [],
      recommend: []
    }
  },
  computed: {
    bannerImages() {
      return this.banners.map(item => {
        const { image, link } = item
        return { image, link }
      })
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  }
}
</script>

<style lang="less" scoped>
.home-nav {
  background-color: @color-tint;
  color: #fff;
}
</style>
