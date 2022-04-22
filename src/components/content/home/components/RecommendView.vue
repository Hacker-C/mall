<template>
  <div class="rec-comtainer">
    <div v-for="item in recommendImages" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommendImages: {
      type: []
    }
  }
}
</script>

<style lang="less" scoped>
.rec-comtainer {
  display: flex;
  justify-content: space-around;
  img {
    height: 80px;
  }
  .title {
    text-align: center;
    font-size: 18px;
  }
  padding: 5px 0;
  border-bottom: 40px solid #eee;
}
</style>
