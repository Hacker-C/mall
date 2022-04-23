<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in tabs"
      :key="item"
      @click="change(index)"
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
    change(index) {
      this.currentIndex = index
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
