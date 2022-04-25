<template>
  <div>
    <DetailNavBar />
    <DetailSwiper :images="topImages" />
  </div>
</template>

<script>
import DetailNavBar from './components/DetailNavBar.vue'
import DetailSwiper from './components/DetailSwiper.vue'

import { getDetail } from '@/apis/detail.js'

export default {
  name: 'Detail',
  data() {
    return {
      iid: '',
      topImages: []
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
      this.topImages = res.result.itemInfo.topImages
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper
  }
}
</script>

<style lang="less" scoped></style>
