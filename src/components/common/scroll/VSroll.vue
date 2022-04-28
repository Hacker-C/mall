<template>
  <scroller
    :refreshLayerColor="refreshLayerColor"
    :refreshText="refreshText"
    :noDataText="'没有更多数据了...'"
    style="padding-top: 50px"
    :on-refresh="refresh"
    :on-infinite="infinite"
    ref="vscroller"
  >
    <div class="content">
      <slot></slot>
    </div>
  </scroller>
</template>

<script>
// TODO 封装 VScroll 组件

export default {
  name: 'VScroll',
  props: {
    refresh: {
      type: Function,
      default: function (done) {
        done()
      }
    },
    infinite: {
      type: Function,
      default: function (done) {
        done()
      }
    },
    refreshText: {
      type: String,
      default: ''
    },
    refreshLayerColor: {
      type: String,
      default: 'transparent'
    }
  },
  data() {
    return {
      x: 0,
      y: 0,
      timer: null
    }
  },
  // TIP 方案1：解决无法监听 scroll 事件的问题
  updated() {
    this.timer = setInterval(() => {
      // BUGFIX 解决切换路由无法读取 getPosition 问题
      if (this.$refs.vscroller && this.$refs.vscroller.getPosition) {
        let { left, top } = this.$refs.vscroller.getPosition()
        this.x = left
        this.y = top
      }
    }, 200)
  },
  beforeDestroy() {
    this.timer = null
  },
  // TIP 监听 emit(change) 事件，只有当 scrollTop 值改变了才发送事件给 home
  watch: {
    y() {
      this.$emit('change', this.y)
    }
  },
  beforeDestroy() {
    this.timer = null
  },
  // TIP 方案2：解决无法监听 scroll 事件的问题
  // updated() {
  //   let _this = this
  //   window.addEventListener('touchmove', function () {
  //     // this.scrollTop
  //     let top = _this.$refs.vscroller.getPosition().top
  //     _this.$emit('change', top)
  //   })
  // },
  methods: {
    scrollTo(x, y, animate = true) {
      this.$refs.vscroller.scrollTo(x, y, animate)
      // TODO 设置动画后，需要点两下，才能生效
      // BUGFIX 不是 bug，是因为要等动画停止，才能触发点击事件
      // TODO this.$refs.vscroller.scrollTo(0, 0, true)
    },
    resize() {
      this.$refs.vscroller.resize()
    }
  }
}
</script>

<style lang="less" scoped></style>
