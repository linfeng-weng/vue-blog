<template>
  <div class="article">
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
import { getArticleByIdApi } from '@/service'
import useScroll from '@/hooks/useScroll'

const route = useRoute()

const post_page = ref({})

getArticleByIdApi(route.params.id).then((res) => {
  post_page.value = res.data
})

const { scrollTop } = useScroll()
const showTabControl = computed(() => {
  return scrollTop.value >= 230
})
</script>

<style lang="less" scoped></style>
