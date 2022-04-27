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
import { debounce } from '@/common/utils.js'

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
    // debounce(this.createCpn, 200, true)
  },
  methods: {
    createCpn() {
      this.currentIndex = this.controlIndex
    },
    changeItem(index) {
      this.currentIndex = index
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
