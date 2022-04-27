<template>
  <div class="detail-container">
    <DetailNavBar @scrollTo="scrollTo" />
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
import GoodsList from '@/components/content/goods/GoodsList.vue'

import VScroll from '@/components/common/scroll/VSroll'

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParams
} from '@/apis/detail.js'

export default {
  name: 'Detail',
  data() {
    return {
      iid: '',
      topImages: [],
      goods: {},
      shop: {},
      temp: 0,
      detailInfo: {},
      goodsParams: {},
      rates: {},
      recommendGoods: [],
      paramsY: 0, // TIP 商品参数模块的 offsetTop
      commentsY: 0,
      recommendY: 0
    }
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
    },
    imagesLoaded() {
      this.paramsY = this.$refs.paramsCpn.$el.offsetTop
      this.commentsY = this.$refs.commentsCpn.$el.offsetTop
      this.recommendY = this.$refs.recommendCpn.$el.offsetTop
    },
    scrollTo(x) {
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
    GoodsList,
    VScroll
  }
}
</script>

<style lang="less" scoped>
.detail-container {
  padding-bottom: 70px;
  background-color: #fff;
}
</style>
