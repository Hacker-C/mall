<template>
  <div class="scroll-wrapper" ref="scroll">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// TIP 对引入的 better-scroll 进行二次封装
// ! wrapper 记得给高度
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
import PullDown from '@better-scroll/pull-down'

BScroll.use(PullUp)
BScroll.use(PullDown)

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.initScroll()
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: 2,
        click: true,
        pullUpLoad: true,
        pullDownRefresh: true
      })

      this.scroll.on('pullingUp', () => {
        console.log('上拉加载')
        // TIP 调用这个方法后才能执行下一次上拉加载
        this.scroll.finishPullUp()
      })

      this.scroll.on('pullingDown', () => {
        console.log('下拉刷新')
        // TIP 调用这个方法后才能执行下一次下拉刷新
        this.scroll.finishPullDown()
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
