<template>
  <div class="tag-post">
    <div class="header">
      <div class="left">
        <i class="iconfont icon-tianchongxing-"></i>
        <h3>{{ nameChosen }}</h3>
      </div>
      <div class="right">
        <p @click="$router.go(-1)">返回</p>
      </div>
    </div>
    <article-model :articleList="tagArticle" />
  </div>
</template>

<script setup>
import ArticleModel from '@/components/article-model.vue'
import { useRoute } from 'vue-router'
import useTagStore from '@/stores/modules/tag'
import { storeToRefs } from 'pinia'
const route = useRoute()
const tagStore = useTagStore()
const { tagArticle, nameChosen } = storeToRefs(tagStore)

onActivated(() => {
  tagArticle.value = []
  tagStore.fetchArticleByTName(route.params.id)
})
</script>

<style lang="less" scoped>
.tag-post {
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
  .tag-post {
    .header {
      .left {
        .icon-tianchongxing-::before {
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
