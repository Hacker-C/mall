<template>
  <div>
    <NavBar class="home-nav">
      <template #center>购物街</template>
    </NavBar>
    <HomeSwiper :bannerImages="bannerImages" />
    <RecommendView :recommendImages="recommend" />
    <FeaturesView />
    <TabControl :tabs="['流行', '新款', '精选']" />
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
import HomeSwiper from './components/HomeSwiper'
import RecommendView from './components/RecommendView'
import FeaturesView from './components/FeaturesView'

import TabBar from '../../common/tabbar/TabBar'
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tab-control/TabControl'

import { getHomeMultidata } from '@/apis/home.js'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendView,
    FeaturesView,
    NavBar,
    TabBar,
    TabControl
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
