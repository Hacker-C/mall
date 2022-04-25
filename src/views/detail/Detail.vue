<template>
  <DetailNavBar />
</template>

<script>
import DetailNavBar from './components/DetailNavBar.vue'

export default {
  name: 'Detail',
  data() {
    return {
      iid: ''
    }
  },
  created() {
    this.iid = this.$route.params.iid
  },
  components: {
    DetailNavBar
  }
}
</script>

<style lang="less" scoped></style>
