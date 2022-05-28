<template>
  <div>
    <div class="tabbar">
      <TabBarItem link="/home">
        <template v-slot:icon>
          <img v-if="$route.path === '/home'" src="@/assets/icons/home_active.png" alt="" />
          <img v-else src="@/assets/icons/home.png" alt="" />
        </template>
        <template v-slot:text>
          <span>主页</span>
        </template>
      </TabBarItem>
      <TabBarItem link="/category">
        <template v-slot:icon>
          <img v-if="$route.path === '/category'" src="@/assets/icons/classify_active.png" alt="" />
          <img v-else src="@/assets/icons/classify.png" alt="" />
        </template>
        <template v-slot:text>
          <span>分类</span>
        </template>
      </TabBarItem>
      <TabBarItem link="/cart">
        <template v-slot:icon>
          <img v-if="$route.path === '/cart'" src="@/assets/icons/cart_active.png" alt="" />
          <img v-else src="@/assets/icons/cart.png" alt="" />
        </template>
        <template v-slot:text>
          <span>购物车</span>
        </template>
      </TabBarItem>
      <TabBarItem link="/profile">
        <template v-slot:icon>
          <img v-if="$route.path === '/profile'" src="@/assets/icons/my_active.png" alt="" />
          <img v-else src="@/assets/icons/my.png" alt="" />
        </template>
        <template v-slot:text>
          <span>我的</span>
        </template>
      </TabBarItem>
    </div>
    <!-- 由于我的域名已备案，所以必须加这个备案号信息，不需要的直接删除这个 BeiAn 组件，然后修改下面 style 中的 bottom 值 为 -1px -->
    <BeiAn />
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'
import BeiAn from '@/components/common/beian/BeiAn'

export default {
  name: 'TabBar',
  components: {
    TabBarItem,
    BeiAn
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
  width: 100%;
  position: fixed;
  // bottom: -1px;
  bottom: 10px;
  border-top: 1px solid #ccc;
  display: flex;
}
</style>
