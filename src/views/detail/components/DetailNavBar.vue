<template>
  <NavBar class="navbar">
    <template #left>
      <img src="@/assets/images/common/back.png" alt="返回" @click="back" />
    </template>
    <template #center>
      <div class="title">
        <div
          v-for="(item, index) in list"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="changeItem(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </NavBar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      list: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    changeItem(index) {
      this.currentIndex = index
      switch (index) {
        case 0:
          this.$emit('scrollTo', 0)
          break
        case 1:
          this.$emit('scrollTo', 1)
          break
        case 2:
          this.$emit('scrollTo', 2)
          break
        case 3:
          this.$emit('scrollTo', 3)
          break
      }
    },
    back() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background-color: #fff;
}
img {
  width: 30px;
  margin-top: 10px;
  margin-left: 8px;
}
.title {
  display: flex;
  color: @color-text;
  font-size: 20px;
  div {
    flex: 1;
  }
}
.active {
  color: @color-tint;
}
</style>
