<template>
  <div class="detail-container">
    <DetailNavBar />
    <DetailSwiper :images="topImages" />
    <DetailBaseInfo :info="goods" />
  </div>
</template>

<script>
import DetailNavBar from './components/DetailNavBar.vue'
import DetailSwiper from './components/DetailSwiper.vue'
import DetailBaseInfo from './components/DetailBaseInfo.vue'

import { getDetail, Goods } from '@/apis/detail.js'

export default {
  name: 'Detail',
  data() {
    return {
      iid: '',
      topImages: [],
      goods: {}
    }
  },
  created() {
    this.iid = this.$route.params.iid
    this.getGoodsData(this.iid)
  },
  methods: {
    async getGoodsData(iid) {
      let res = await getDetail(iid)
      // TIP 获取轮播图数据
      let data = res.result
      this.topImages = data.itemInfo.topImages
      // TIP 获取商品基本信息
      console.log(data)
      let goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.goods = goods
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  }
}
</script>

<style lang="less" scoped>
.detail-container {
  padding-bottom: 70px;
}
</style>
