<template>
  <div class="search-article">
    <div class="search-input">
      <el-input
        v-model="searchTxt"
        @clear="clear"
        size="default"
        placeholder="请输入文章标题"
        clearable
      >
        <template #prefix>
          <i class="iconfont icon-sousuo"></i>
        </template>
      </el-input>
      <button class="search-btn" @click="searchHandle">搜索</button>
    </div>
    <div class="article">
      <article-model :article-list="articleList"></article-model>
    </div>
  </div>
</template>

<script setup>
import ArticleModel from '@/components/article-model.vue'
import { searchArticleApi } from '@/service'

const isShow = ref(false)
const searchTxt = ref('')
const articleSum = ref(0)
const articleList = ref([])

const searchHandle = async () => {
  const s = searchTxt.value.trim()
  if (!s) return
  const res = await searchArticleApi(s)
  isShow.value = true
  articleSum.value = res.data.length
  articleList.value = res.data
}

const clear = () => {
  isShow.value = false
  articleList.value = []
}
</script>

<style lang="less" scoped>
.search-article {
  margin: 20px 25px;

  .search-input {
    padding: 0 20px;
    display: flex;
    align-items: center;
    column-gap: 25px;
    width: 100%;
    .search-btn {
      flex-shrink: 0;
      padding: 8px 15px;
      font-size: 14px;
      background-color: var(--second-color);
      color: #fff;
      border: 0;
      border-radius: 2px;
      cursor: pointer;
      &:hover {
        background-color: var(--hover-color);
      }
    }
  }

  .article {
    .title {
      margin: 20px 20px;
      font-size: 18px;
      font-weight: 600;
    }
  }
}

@media (max-width: 540px) {
  .search-article {
    margin: 0;
    .search-input {
      padding: 10px;
      column-gap: 10px;
    }
  }
}
</style>
