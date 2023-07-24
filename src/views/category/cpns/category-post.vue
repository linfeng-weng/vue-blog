<template>
    <div class="category-post">
        <div class="header">
            <i class="iconfont icon-wenjianjia"></i>
            <h3>{{ route.params.name }}</h3>
        </div>
        <article-model :articleList="categoryArticle" />
    </div>
</template>

<script setup>
    import { onActivated } from 'vue'
    import ArticleModel from '@/components/article-model/article-model.vue'
    import { useRoute } from 'vue-router'
    import useCategoryStore from '@/stores/modules/category'
    import { storeToRefs } from 'pinia'
    const route = useRoute()
    const categoryStore = useCategoryStore()
    const { categoryArticle } = storeToRefs(categoryStore)
    
    onActivated(() => {
        categoryStore.fetchArticleByCName(route.params.name)   
    })


</script>

<style lang="less" scoped>
.category-post {
    margin: 20px;

    .header {
        margin: 20px;
        display: flex;
        align-items: center;
        column-gap: 5px;
    }
}
</style>