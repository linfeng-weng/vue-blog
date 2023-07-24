<template>
    <div class="tag-post">
        <div class="header">
            <i class="iconfont icon-tianchongxing-"></i>
            <h3>{{ route.params.name }}</h3>
        </div>
        <article-model :articleList="tagArticle" />
    </div>
</template>

<script setup>
    import ArticleModel from '@/components/article-model/article-model.vue'
    import { useRoute } from 'vue-router'
    import useTagStore from '@/stores/modules/tag'
    import { storeToRefs } from 'pinia'
    const route = useRoute()
    const tagStore = useTagStore()
    tagStore.fetchArticleByTName(route.params.name)
    const { tagArticle } = storeToRefs(tagStore)
    


</script>

<style lang="less" scoped>
.tag-post {
    margin: 20px;

    .header {
        margin: 20px;
        display: flex;
        align-items: center;
        column-gap: 5px;
    }
}
</style>