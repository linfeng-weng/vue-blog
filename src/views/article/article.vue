<template>
    <div class="article" v-show="isShow">
        <article-header :articleData="post_page"></article-header>
        <article-content :articleData="post_page"></article-content>
    </div>
</template>

<script setup>
    import ArticleHeader from './cpns/article-header.vue'
    import ArticleContent from './cpns/article-content.vue'
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'
    import { getArticleById } from '@/service'

    
    const route = useRoute()

    // 数据获取完毕前不显示页面
    let isShow = false
    const post_page = ref({})

    getArticleById(route.params.id).then(res => {
        post_page.value = res.article
        isShow = true
    })

</script>

<style lang="less" scoped></style>