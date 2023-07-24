<template>
    <div class="archive-time">
        <template v-for="blockData in archive">
            <div class="month-box">
                <h1>{{ blockData.blockTitle }}</h1>
                <template v-for="article in blockData.articles">
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
    import { ref, onBeforeMount } from 'vue'
    import { useArticleStore } from '@/stores/modules/article'
    import { storeToRefs } from 'pinia'
    import router from '@/router'
    
    const articleStore = useArticleStore()
    
    const { allArticle } = storeToRefs(articleStore)
    
    const archive = ref([])
    const getFormatArchive = () => {
        let currentBlock = null
        allArticle
        allArticle.value.forEach((article) => {
            const blockTitle = dayjs(article.created_at).format('YYYY-MM')
            if(!currentBlock || currentBlock.blockTitle !== blockTitle) {
                currentBlock = { blockTitle, articles: [] }
                archive.value.unshift(currentBlock)
            }
            currentBlock.articles.push(article)
        })
    }

    const viewPost = (id) => {
        router.push(`/article/${id}`)
    }
    
    onBeforeMount(async () => {
        await articleStore.fetchAllArticle()
        getFormatArchive()
    })
    
    
</script>

<style lang="less" scoped>
.archive-time {
    margin: 20px 25px;
    padding: 50px 90px;
    box-shadow: 0 4px 14px hsl(355deg 25% 15% / 10%);
    border-radius: 8px;

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
</style>