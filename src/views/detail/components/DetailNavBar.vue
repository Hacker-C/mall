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
  props: {
    controlIndex: {
      type: Number,
      default: 0
    }
  },
  created() {
    this.currentIndex = this.controlIndex
  },
  methods: {
    changeItem(index) {
      this.currentIndex = index
      // TIP 发送当前点击的 index 给 Detail 组件使用
      this.$emit('scrollTo', index)
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
