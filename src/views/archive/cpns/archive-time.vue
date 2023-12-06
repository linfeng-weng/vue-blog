<template>
  <div class="archive-time">
    <template v-for="blockData in archive">
      <div class="month-box">
        <h1>{{ blockData.blockTitle }}</h1>
        <template v-for="article in blockData.articles" :key="article._id">
          <div class="article" @click="viewPost(article._id)">
            <span class="date">{{ dayjs(article.created_at).format('YYYY-MM-DD') }}</span>
            <span class="title">{{ article.title }}</span>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import { useArticleStore } from '@/stores/modules/article'
import { storeToRefs } from 'pinia'
import router from '@/router'

// 新建Store实例
const articleStore = useArticleStore()

// 获取所有文章数据-响应式
const { allArticle } = storeToRefs(articleStore)

const archive = ref([])

// 用于将文章格式化并按最新时间排列归档的函数
const getFormatArchive = () => {
  let currentBlock = null
  allArticle.value.forEach((article) => {
    const blockTitle = dayjs(article.created_at).format('YYYY-MM')
    // 检查是否要创建新的时间块
    if (!currentBlock || currentBlock.blockTitle !== blockTitle) {
      currentBlock = { blockTitle, articles: [] }
      archive.value.unshift(currentBlock)
    }
    currentBlock.articles.push(article)
  })
}

// 点击跳转到对应文章界面
const viewPost = (id) => {
  router.push(`/article/${id}`)
}

onBeforeMount(async () => {
  // 初始化数据
  await articleStore.fetchAllArticle()
  getFormatArchive()
})
</script>

<style lang="less" scoped>
.archive-time {
  margin: 0 25px;
  padding: 50px 90px;
  box-shadow: var(--box-shadow);
  border-radius: 8px;
  background-color: #fff;

  .month-box {
    margin: 50px 0;

    h1 {
      font-weight: normal;
      margin-bottom: 20px;
      cursor: default;
    }

    .article {
      letter-spacing: 0.5px;
      height: 30px;
      line-height: 30px;
      border-left: 2px solid #e5e7eb;
      transition: all 0.3s;
      cursor: pointer;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;

      .date {
        padding: 6px;
        color: #9ca3af;
      }

      .title {
        color: #4b5563;
        padding: 6px;
      }

      &:hover {
        transform: scale(1.03);
        border-left: 2px solid var(--second-color);
        transition: all 0.3s;
      }
    }
  }
}

// 响应式
@media (max-width: 540px) {
  .archive-time {
    box-shadow: none;
    padding: 10px 15px;
    font-size: 14px;
    .month-box {
      margin: 15px 0;
      h1 {
        font-size: 20px;
      }
    }
  }
}
</style>
