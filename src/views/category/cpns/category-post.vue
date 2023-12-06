<template>
  <div class="category-post">
    <div class="header">
      <div class="left">
        <i class="iconfont icon-wenjianjia"></i>
        <h3>{{ route.params.name }}</h3>
      </div>
      <div class="right">
        <p @click="$router.go(-1)">返回</p>
      </div>
    </div>
    <article-model :articleList="categoryArticle" />
  </div>
</template>

<script setup>
import ArticleModel from '@/components/article-model.vue'
import { useRoute } from 'vue-router'
import useCategoryStore from '@/stores/modules/category'
import { storeToRefs } from 'pinia'
const route = useRoute()
const categoryStore = useCategoryStore()
const { categoryArticle } = storeToRefs(categoryStore)

onActivated(() => {
  categoryArticle.value = []
  categoryStore.fetchArticleByCName(route.params.name)
})
</script>

<style lang="less" scoped>
.category-post {
  .header {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      column-gap: 5px;
    }

    .right {
      color: #565656;
      cursor: pointer;
      font-size: 14px;

      &:hover {
        color: var(--second-color);
        transition: all 0.2s;
      }
    }
  }
}

@media (max-width: 540px) {
  .category-post {
    .header {
      .left {
        .icon-wenjianjia::before {
          font-size: 14px;
        }
        h3 {
          font-size: 14px;
        }
      }
      .right {
        font-size: 12px;
      }
    }
  }
}
</style>
