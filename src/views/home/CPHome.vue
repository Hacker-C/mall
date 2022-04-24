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
    <BBackTop v-show="isShowBackTop" @click.native="scrollToTop" />
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
import BBackTop from '@/components/content/bbacktop/BBackTop'
import VScroll from '@/components/common/scroll/VSroll'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendView,
    FeaturesView,
    NavBar,
    BBackTop,
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
      show: 'pop',
      isShowBackTop: false
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
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  methods: {
    onChange(y) {
      // TIP 方案1：解决无法监听 scroll 事件的问题（VScroll.vue）
      this.isShowBackTop = y > 800
    },
    scrollToTop() {
      this.$nextTick(() => {
        this.$refs.hscroller.scrollTo()
      })
    },
    // TODO 下拉请求数据
    HRefresh(done) {
      setTimeout(() => {
        done()
      }, 1000)
    },
    // TODO 上拉请求数据
    HInfinite: function (done) {
      this.getHomeData(this.show).then(res => {
        if (res === 'success') {
          console.log(res)
          done()
        }
        if (res === 'none') {
          done(true)
        }
      })
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1
      return getHomeData(type, page).then(res => {
        if (res.data.list.length) {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++
          return 'success'
        } else {
          return 'none'
        }
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
