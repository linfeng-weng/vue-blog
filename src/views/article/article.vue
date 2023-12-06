<template>
  <div class="article" v-show="isShow">
    <article-header :articleData="post_page"></article-header>
    <article-content :articleData="post_page"></article-content>
    <tab-control v-show="showTabControl"></tab-control>
  </div>
</template>

<script setup>
import ArticleHeader from './cpns/article-header.vue'
import ArticleContent from './cpns/article-content.vue'
import tabControl from './cpns/tab-control.vue'
import { useRoute } from 'vue-router'
import { getArticleById } from '@/service'
import useScroll from '@/hooks/useScroll'

const route = useRoute()

// 数据获取完毕前不显示页面
let isShow = false
const post_page = ref({})

getArticleById(route.params.id).then((res) => {
  post_page.value = res.article
  isShow = true
})

const { scrollTop } = useScroll()
const showTabControl = computed(() => {
  return scrollTop.value >= 660
})
</script>

<style lang="less" scoped></style>
