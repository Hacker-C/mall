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
  font-size: 0.53rem;
  img {
    margin-top: 0.2rem;
    margin-bottom: 0.1rem;
    width: 0.65rem;
  }
}
</style>
