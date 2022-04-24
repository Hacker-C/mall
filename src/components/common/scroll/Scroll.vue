<template>
  <div ref="scroll">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// TIP 对引入的 better-scroll 进行二次封装
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  // BUGFIX 解决因为图片资源加载慢而导致 BScroll 无法正确计算内容高度的问题
  updated() {
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  beforeDestroy() {
    this.scroll.destroy()
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: this.probeType,
        // BUGFIX 解决上拉加载出现回弹问题
        useTransition: true,
        observeDOM: true,
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
      this.scroll.on('scroll', pos => {
        this.$emit('scroll', pos.y)
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
