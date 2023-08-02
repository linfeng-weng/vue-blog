<template>
    <div class="home">
        <home-header />
        <div class="container">
            <layout>
                <template #left><article-model :articleList="articleList" /></template>
                <template #right><user-card /></template>
            </layout>
        </div>
    </div>
</template>

<script setup>
    import { watch } from 'vue'
    import HomeHeader from './cpns/home-header.vue'
    import ArticleModel from '@/components/article-model/article-model.vue'
    import UserCard from '@/components/user-card/user-card.vue'
    import Layout from '@/components/layout/layout.vue'
    import useArticleStore from '@/stores/modules/article'
    import { storeToRefs } from 'pinia'
    import useScroll from '@/utils/useScroll'
    const articleStore = useArticleStore()
    articleStore.fetchArticleList()
    articleStore.fetchTotalArticle()
    const { articleList, currentPage, total } = storeToRefs(articleStore)

    const { isReachBottom } = useScroll()

    watch(isReachBottom, (newValue) => {
        // console.log(articleList.value.length,total.value)
        if (newValue && articleList.value.length !== total.value) {
            currentPage.value ++
            // console.log(currentPage.value)
            articleStore.fetchArticleList(currentPage.value).then(() => {
                isReachBottom.value = false
            })
        }
    })

    

</script>

<style lang="less" scoped></style>