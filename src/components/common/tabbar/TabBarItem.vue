<template>
  <div class="item" @click="goto">
    <div class="img">
      <slot name="icon"></slot>
    </div>
    <div class="text" :style="active">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: ['link'],
  methods: {
    goto() {
      this.$router.push(this.link)
    }
  },
  created() {
    console.log(this.$route.path)
  },
  computed: {
    isActive() {
      return this.$route.path === this.link
    },
    active() {
      return this.isActive ? { color: '#fe647f' } : {}
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  img {
    margin-top: 8px;
    margin-bottom: 3px;
    width: 24px;
  }
}
</style>
