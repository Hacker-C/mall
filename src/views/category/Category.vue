<template>
  <div>
    <CategoryNavBar />
    <div class="category-container">
      <MainCategory @change="onChange" :categoryList="categoryList" />
      <SubCategory :subCategoryList="subCategoryList" :key="subKey" />
    </div>
  </div>
</template>

<script>
import { getMainCategory, getSubCategory } from '@/apis/category.js'

import CategoryNavBar from './components/CategoryNavBar'
import MainCategory from './components/MainCategory'
import SubCategory from './components/SubCategory'

export default {
  name: 'Category',
  components: {
    MainCategory,
    CategoryNavBar,
    SubCategory
  },
  data() {
    return {
      categoryList: [],
      subCategoryList: [],
      subKey: 0
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    async getCategory() {
      let res = await getMainCategory()
      this.categoryList = res.data.category.list
    },
    async getSubData(key) {
      const res = await getSubCategory(key)
      this.subCategoryList = res.data.list
    },
    onChange(key) {
      this.getSubData(key)
    }
  }
}
</script>

<style lang="less" scoped>
.category-container {
  display: flex;
}
</style>
