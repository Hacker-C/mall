<template>
  <div class="detail-container">
    <DetailNavBar />
    <VScroll ref="dscroll" @change="onChange">
      <DetailSwiper :images="topImages" />
      <DetailBaseInfo :info="goods" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detailInfo="detailInfo" />
      <DetailGoodsParams :goodsParams="goodsParams" />
      <DetailGoodsComments :rates="rates" />
      <GoodsList :goodsList="recommendGoods" title="更多相似推荐" />
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
      recommendGoods: []
    }
  },
  created() {
    this.iid = this.$route.params.iid
    // 请求商品详情数据
    this.getGoodsData(this.iid)
    // 请求商品推荐数据
    this.getRecommend()
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
