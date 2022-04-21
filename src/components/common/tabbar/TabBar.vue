<template>
  <div class="tabbar">
    <TabBarItem link="/home">
      <template v-slot:icon>
        <img
          v-if="$route.path === '/home'"
          src="@/assets/icons/home_active.png"
          alt=""
        />
        <img v-else src="@/assets/icons/home.png" alt="" />
      </template>
      <template v-slot:text>
        <span>主页</span>
      </template>
    </TabBarItem>
    <TabBarItem link="/classify">
      <template v-slot:icon>
        <img
          v-if="$route.path === '/classify'"
          src="@/assets/icons/classify_active.png"
          alt=""
        />
        <img v-else src="@/assets/icons/classify.png" alt="" />
      </template>
      <template v-slot:text>
        <span>分类</span>
      </template>
    </TabBarItem>
    <TabBarItem link="/cart">
      <template v-slot:icon>
        <img
          v-if="$route.path === '/cart'"
          src="@/assets/icons/cart_active.png"
          alt=""
        />
        <img v-else src="@/assets/icons/cart.png" alt="" />
      </template>
      <template v-slot:text>
        <span>购物车</span>
      </template>
    </TabBarItem>
    <TabBarItem link="/profile">
      <template v-slot:icon>
        <img
          v-if="$route.path === '/profile'"
          src="@/assets/icons/my_active.png"
          alt=""
        />
        <img v-else src="@/assets/icons/my.png" alt="" />
      </template>
      <template v-slot:text>
        <span>我的</span>
      </template>
    </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'

export default {
  name: 'TabBar',
  components: {
    TabBarItem
  },
  methods: {
    goto() {
      console.log(111)
    }
  }
}
</script>

<style lang="less" scoped>
.tabbar {
  background-color: #f5f4f5;
  height: 70px;
  margin-bottom: 0.1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ccc;
  display: flex;
}
</style>
