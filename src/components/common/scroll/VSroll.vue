<template>
  <scroller
    :refreshLayerColor="'red'"
    :refreshText="'疯狂刷新中'"
    :noDataText="'没有更多数据了...'"
    :snappingHeight="'140'"
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
      default() {
        return function (done) {
          setTimeout(() => {
            done()
          }, 1000)
        }
      }
    },
    infinite: {
      type: Function,
      default() {
        return function (done) {
          setTimeout(() => {
            done()
          }, 1000)
        }
      }
    }
  },
  methods: {
    scrollTo() {
      this.$nextTick(() => {
        this.$refs.vscroller.scrollTo(0, 0, true)
      })
      // TODO 设置动画后，需要点两下，才能生效
      // BUGFIX 不是 bug，是因为要等动画停止，才能触发点击事件
      // TODO this.$refs.vscroller.scrollTo(0, 0, true)
    }
  }
}
</script>

<style lang="less" scoped></style>
