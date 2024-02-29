<template>
  <div class="home">
    <home-header />
    <div class="main">
      <layout>
        <template #left>
          <!-- <article-model-skeleton v-show="isloading" /> -->
          <article-model :articleList="articleList" />
          <div class="pagination" v-show="!isloading">
            <el-pagination
              v-model:current-page="currentPage"
              v-model:page-size="pageSize"
              layout="prev, pager, next"
              :total="total"
              background
              @click="pageChange"
            />
          </div>
        </template>
        <template #right>
          <div class="aside">
            <user-card />
            <notice-board :content="userinfo.noticeContent" v-if="userinfo.noticeOn" />
            <music-list :id="userinfo.musicId" v-if="userinfo.musicOn" />
          </div>
        </template>
      </layout>
    </div>
  </div>
</template>

<script setup>
import HomeHeader from './cpns/home-header.vue'
import ArticleModel from '@/components/article-model.vue'
// import ArticleModelSkeleton from '@/components/article-model-skeleton.vue'
import UserCard from '@/components/user-card.vue'
import NoticeBoard from './cpns/notice-board.vue'
import MusicList from './cpns/music-list.vue'
import Layout from '@/components/layout.vue'
import useArticleStore from '@/stores/modules/article'
import { storeToRefs } from 'pinia'

const articleStore = useArticleStore()
articleStore.fetchArticleList()
const { articleList, currentPage, pageSize, total, isloading } = storeToRefs(articleStore)

const userinfo = JSON.parse(localStorage.getItem('userinfo'))

watch(currentPage, () => {
  articleStore.fetchArticleList()
})

const pageChange = () => {
  window.scrollTo(0, 250)
}
</script>

<style lang="less" scoped>
.main {
  margin: 0 auto;
  max-width: 1140px;

  .pagination {
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }

  .aside {
    width: 280px;
  }
}
</style>
