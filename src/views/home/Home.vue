<template>
  <div>
    <NavBar class="home-nav">
      <template #center>购物街</template>
    </NavBar>
    <TabControl
      @changeGoodsList="changeGoodsList"
      :tabs="['流行', '新款', '精选']"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    />
    <VScroll
      :refresh="HRefresh"
      :infinite="HInfinite"
      refreshText="松开刷新"
      refreshLayerColor="#fe647f"
      ref="hscroller"
      @change="onChange"
    >
      <HomeSwiper
        :bannerImages="bannerImages"
        @swiperImageLoad="swiperImageLoad"
      />
      <RecommendView :recommendImages="recommend" />
      <FeaturesView />
      <TabControl
        @changeGoodsList="changeGoodsList"
        :tabs="['流行', '新款', '精选']"
        ref="tabControl2"
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
import VScroll from '@/components/common/scroll/VSroll'
import TabControl from '@/components/content/tab-control/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import BackTop from '@/components/content/backtop/BackTop'

import { getHomeMultidata, getHomeData } from '@/apis/home.js'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendView,
    FeaturesView,
    VScroll,
    NavBar,
    BackTop,
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
      show: 'pop', // TIP 决定 tab 切换
      isShowBackTop: false,
      isTabFixed: false,
      tabOffsetTop: 0,
      saveY: 0,
      temp: 0
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
  activated() {
    this.$nextTick(() => {
      // TIP 设置切换底部 tabber 时还在原位置
      this.$refs.hscroller.resize()
      this.$refs.hscroller.scrollTo(0, this.saveY, false)
      this.$refs.hscroller.resize()
    })
  },
  deactivated() {
    // TIP 保存原来位置
    this.saveY = this.temp
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
      this.isTabFixed = y > this.tabOffsetTop - 66
      this.temp = y
    },
    scrollToTop() {
      // TIP 调用 VScroller 组件内部的方法回到顶部
      // BUGFIX 解决需要点击两次才能回到顶部的问题（第一次停止transform的移动，第二次调用其移动）
      this.help()
    },
    help() {
      this.$refs.hscroller.scrollTo(0, 0)
      setTimeout(() => {
        this.$refs.hscroller.scrollTo(0, 0)
      }, 10)
    },
    // TODO 下拉刷新
    HRefresh(done) {
      this.initData()
      done()
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
    // TIP 获取首页商品数据，每次请求都增加数据页数
    // TIP 第一次请求 30 个数据，第二次再请求 30 个，递增
    async getHomeData(type) {
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
    // TIP tabcontrol 切换
    changeGoodsList(item) {
      let hash = {
        流行: ['pop', 0],
        新款: ['new', 1],
        精选: ['sell', 2]
      }
      this.show = hash[item][0]
      // ! 保持两个 tabcontrol 当前激活的相同
      this.$refs.tabControl1.currentIndex = hash[item][1]
      this.$refs.tabControl2.currentIndex = hash[item][1]
    },
    // TIP 监听轮播图图片加载完成
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  }
}
</script>

<style lang="less" scoped>
.home-nav {
  background-color: @color-tint;
  color: #fff;
}
.tab-control {
  margin-top: @navbar-height;
  position: relative;
  z-index: 9;
}
</style>
