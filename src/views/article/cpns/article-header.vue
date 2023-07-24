<template>
    <div class="post-header">
        <div class="header-content">
            <h1>{{ articleData.title }}</h1>
            <p>发布于：<span>{{ formatDate(articleData.created_at, 'YYYY-MM-DD') }}</span> &#8194;&#8194;
                更新于：<span>{{ formatDate(articleData.updated_at, 'YYYY-MM-DD') }}</span></p>
            <div class="cover">
                <img :src="Server_URL + articleData.cover">
            </div>
        </div>
    </div>
</template>

<script setup>
    import { formatDate } from '@/utils/formatDate'
    import { Server_URL } from '@/service/request/config'
    defineProps({
        articleData: null
    })
</script>

<style lang="less" scoped>
.post-header {
    margin-bottom: 120px;
    padding-top: 120px;
    height: 600px;
    background-color: var(--container-color);
    color: #fff;

    .header-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            margin: 0;
            width: 90%;
            font-size: 42px;
            text-align: center;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        p {
            margin: 32px 0;
            color: #fdfdfc;

            span {
                color: #ff9f60;
            }
        }

        .cover {
            height: 450px;

            img {
                width: 100%;
                height: 450px;
                object-fit: cover;
                object-position: center;
            }
        }
    }
}

@media(max-width: 880px) {
    .post-header {
        height: 500px;

        .header-content {
            h1 {
                font-size: 32px;
            }

            p {
                margin: 20px 0;
            }

            .cover {
                height: 400px;
                margin: 0 10px;

                img {
                    height: 400px;
                }
            }
        }
    }
}

@media(max-width: 600px) {
    .post-header {
        margin-bottom: 20px;

        .header-content {
            .cover {
                height: 280px;
                margin: 0 10px;

                img {
                    height: 280px;
                }
            }
        }
    }
}
</style>