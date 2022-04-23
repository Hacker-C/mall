<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in tabs"
      :key="item"
      @click="change(index, item)"
    >
      <span :class="{ active: index === currentIndex }">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    change(index, item) {
      this.currentIndex = index
      this.$emit('changeGoodsList', item)
    }
  }
}
</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  position: sticky;
  top: @navbar-height;
  background-color: #fff;
  z-index: 999;
  div {
    flex: 1;
    text-align: center;
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: center;
    span {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      padding: 0 8px;
    }
  }
}
.active {
  border-bottom: 3px solid @color-tint;
}
</style>
