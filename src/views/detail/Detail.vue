<template>
  <div class="detail-container">
    <DetailNavBar
      @scrollTo="scrollTo"
      :controlIndex="controlIndex"
      :key="controlIndex"
    />
    <Message
      v-show="isMessageShow"
      :key="msgKey"
      msg="加入成功，正在购车等候~"
    />
    <!-- key 改变可以重新渲染组件，从而传入新的 controlIndex 值 -->
    <VScroll ref="dscroller" @change="onChange">
      <DetailSwiper :images="topImages" />
      <DetailBaseInfo :info="goods" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detailInfo="detailInfo" @change="imagesLoaded" />
      <DetailGoodsParams :goodsParams="goodsParams" ref="paramsCpn" />
      <DetailGoodsComments :rates="rates" ref="commentsCpn" />
      <GoodsList
        :goodsList="recommendGoods"
        title="更多相似推荐"
        ref="recommendCpn"
      />
    </VScroll>
    <DetailBottomBar @addCart="addToCart" />
    <BackTop v-show="isShowBackTop" @click.native="scrollToTop" />
  </div>
</template>

<script>
import DetailNavBar from './components/DetailNavBar.vue'
import DetailSwiper from './components/DetailSwiper.vue'
import DetailBaseInfo from './components/DetailBaseInfo.vue'
import DetailShopInfo from './components/DetailShopInfo.vue'
import DetailGoodsInfo from './components/DetailGoodsInfo.vue'
import DetailGoodsParams from './components/DetailGoodsParams.vue'
import DetailGoodsComments from './components/DetailGoodsComments.vue'
import DetailBottomBar from './components/DetailBottomBar.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'

import VScroll from '@/components/common/scroll/VSroll'
import BackTop from '@/components/content/backtop/BackTop'
import Message from '@/components/common/message/Message'

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParams
} from '@/apis/detail.js'

import { throttle } from '@/common/utils.js'

export default {
  name: 'Detail',
  data() {
    return {
      iid: '',
      topImages: [],
      goods: {},
      shop: {},
      temp: 0, // TIP scrollTop 值
      detailInfo: {},
      goodsParams: {},
      rates: {},
      recommendGoods: [],
      paramsY: 0, // TIP 商品参数模块的 offsetTop
      commentsY: 0,
      recommendY: 0,
      // TIP 父组件提供控制 navbar 显示的中间变量
      // TIP 此变量的值可以为 0、1、2、3，分别代表不同模块的位置
      controlIndex: 0,
      isShowBackTop: false,
      isMessageShow: false,
      msgKey: -99
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailGoodsComments,
    DetailBottomBar,
    GoodsList,
    VScroll,
    BackTop,
    Message
  },
  created() {
    this.iid = this.$route.params.iid
    // 请求商品详情数据
    this.getGoodsData(this.iid)
    // 请求商品推荐数据
    this.getRecommend()
  },
  mounted() {
    this.imagesLoaded()
  },
  methods: {
    async getGoodsData(iid) {
      let res = await getDetail(iid)
      let data = res.result
      // TIP 获取轮播图数据
      this.topImages = data.itemInfo.topImages
      // TIP 获取商品基本信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      // TIP 获取店铺信息
      this.shop = new Shop(data.shopInfo)
      // TIP 商品详情数据
      this.detailInfo = data.detailInfo
      // TIP 商品参数数据
      this.goodsParams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      )
      // TIP 商品评论信息
      this.rates = data.rate
    },
    async getRecommend() {
      let res = await getRecommend()
      this.recommendGoods = res.data.list
    },
    onChange(y) {
      this.temp = y
      this.srollToShow(y)
      if (
        (y > 800 && !this.isShowBackTop) ||
        (y <= 800 && this.isShowBackTop)
      ) {
        // BUGFIX 节流思想，防止组件创建过于频繁影响页面渲染性能
        this.isShowBackTop = !this.isShowBackTop
      }
    },
    // TIP 滚动到指定位置，显示不同的 navbar
    srollToShow(y) {
      if (y < this.paramsY - 50) {
        this.controlIndex !== 0 && (this.controlIndex = 0)
      } else if (y < this.commentsY - 50) {
        this.controlIndex !== 1 && (this.controlIndex = 1)
      } else if (y < this.recommendY - 50) {
        this.controlIndex !== 2 && (this.controlIndex = 2)
      } else {
        this.controlIndex !== 3 && (this.controlIndex = 3)
      }
    },
    imagesLoaded() {
      this.paramsY = this.$refs.paramsCpn.$el.offsetTop
      this.commentsY = this.$refs.commentsCpn.$el.offsetTop
      this.recommendY = this.$refs.recommendCpn.$el.offsetTop
    },
    // TIP Navbar 点击发送此事件
    scrollToTop() {
      this.help(0)
    },
    scrollTo(x = 0) {
      if (x === 0) this.help(0)
      else if (x === 1) this.help(this.paramsY - 50)
      else if (x === 2) {
        this.help(this.commentsY - 50)
      } else {
        // x === 3
        this.help(this.recommendY - 50)
      }
    },
    help(y) {
      this.$refs.dscroller.scrollTo(0, y)
      setTimeout(() => {
        this.$refs.dscroller.scrollTo(0, y)
      }, 10)
    },
    // TIP 添加到购物车
    // BUGFIX 添加节流，设置 2 秒内多次点击，只生效一次
    addToCart: throttle(function () {
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      product.count = 1
      this.$store.dispatch('addToCart', product)
      this.msgKey++
      this.isMessageShow = true
    }, 2000)
  }
}
</script>

<style lang="less" scoped>
.detail-container {
  padding-bottom: 70px;
  background-color: #fff;
}
</style>
