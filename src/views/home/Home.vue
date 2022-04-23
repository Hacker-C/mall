<template>
  <div>
    <NavBar class="home-nav">
      <template #center>购物街</template>
    </NavBar>
    <HomeSwiper :bannerImages="bannerImages" />
    <RecommendView :recommendImages="recommend" />
    <FeaturesView />
    <TabControl
      @changeGoodsList="changeGoodsList"
      :tabs="['流行', '新款', '精选']"
    />
    <GoodsList :goodsList="goods[show].list" />
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

import TabBar from '@/components/common/tabbar/TabBar'
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tab-control/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'

import { getHomeMultidata, getHomeData } from '@/apis/home.js'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendView,
    FeaturesView,
    NavBar,
    TabBar,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      show: 'pop'
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
    // TIP 请求首页轮播图和第二模块推荐的数据
    this.getHomeMultidata()
    // TIP 请求首页商品的数据
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1
      getHomeData(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
      })
    },
    changeGoodsList(item) {
      let hash = {
        流行: 'pop',
        新款: 'new',
        精选: 'sell'
      }
      this.show = hash[item]
    }
  }
}
</script>

<style lang="less" scoped>
.home-nav {
  background-color: @color-tint;
  color: #fff;
}
</style>
