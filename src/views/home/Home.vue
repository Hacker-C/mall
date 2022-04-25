<template>
  <div>
    <NavBar class="home-nav">
      <template #center>购物街</template>
    </NavBar>
    <VScroll
      :refresh="HRefresh"
      :infinite="HInfinite"
      ref="hscroller"
      style="overflow: scroll"
      @change="onChange"
    >
      <HomeSwiper :bannerImages="bannerImages" />
      <RecommendView :recommendImages="recommend" />
      <FeaturesView />
      <TabControl
        @changeGoodsList="changeGoodsList"
        :tabs="['流行', '新款', '精选']"
      />
      <GoodsList :goodsList="goods[show].list" />
    </VScroll>
    <BackTop v-show="isShowBackTop" @click.native="scrollToTop" />
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

import { debounce, throttle } from '@/common/utils'
import BackTop from '@/components/content/backtop/BackTop'
import VScroll from '@/components/common/scroll/VSroll'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendView,
    FeaturesView,
    NavBar,
    BackTop,
    TabBar,
    TabControl,
    GoodsList,
    VScroll
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
      show: 'pop', // TIP 决定 tab 切换
      isShowBackTop: false
    }
  },
  computed: {
    // TIP 计算属性，计算轮播图所需要的图片地址和链接
    bannerImages() {
      return this.banners.map(item => {
        const { image, link } = item
        return { image, link }
      })
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      // TIP 请求首页轮播图和第二模块推荐的数据
      this.initTop()
      // TIP 请求首页商品的数据
      this.getHomeData('pop')
      this.getHomeData('new')
      this.getHomeData('sell')
    },
    onChange(y) {
      // TIP 方案1：解决无法监听 scroll 事件的问题（VScroll.vue）
      // 回到顶部
      this.isShowBackTop = y > 800
    },
    scrollToTop() {
      this.$nextTick(() => {
        // TIP 调用 VScroller 组件内部的方法回到顶部
        this.$refs.hscroller.scrollTo()
      })
    },
    // TODO 下拉刷新
    HRefresh(done) {
      this.initData()
      setTimeout(() => {
        done()
      }, 500)
    },
    // TODO 上拉请求数据
    async HInfinite(done) {
      let msg = await this.getHomeData(this.show)
      if (msg === 'success') {
        done()
      } else {
        done(true)
      }
    },
    async initTop() {
      // TIP 获取首页轮播图和推荐数据
      let res = await getHomeMultidata()
      res = res.data
      this.banners = res.banner.list
      this.recommend = res.recommend.list
    },
    async getHomeData(type) {
      // TIP 获取首页商品数据，每次请求都增加数据页数
      // TIP 第一次请求 30 个数据，第二次再请求 30 个，递增
      const page = this.goods[type].page + 1
      let res = await getHomeData(type, page)
      let list = res.data.list
      if (list.length > 0) {
        this.goods[type].list.push(...res.data.list)
        // ! 递增
        this.goods[type].page++
        return 'success'
      } else {
        return 'none'
      }
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
