<template>
  <div class="detail-container">
    <DetailNavBar />
    <VScroll
      :refresh="DRefresh"
      :infinite="DInfinite"
      ref="dscroll"
      @change="onChange"
    >
      <DetailSwiper :images="topImages" />
      <DetailBaseInfo :info="goods" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detailInfo="detailInfo" />
      <DetailGoodsParams :goodsParams="goodsParams" />
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

import VScroll from '@/components/common/scroll/VSroll'

import { getDetail, Goods, Shop, GoodsParams } from '@/apis/detail.js'

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
      goodsParams: {}
    }
  },
  created() {
    this.iid = this.$route.params.iid
    this.getGoodsData(this.iid)
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
    },
    DRefresh(done) {
      setTimeout(() => {
        done()
      }, 1000)
    },
    DInfinite() {},
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
