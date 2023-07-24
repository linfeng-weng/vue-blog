<template>
    <div class="article-model">
        <template v-for="item in articleList" :key="item._id">
            <div class="article" @click="viewPost(item._id)">
                <div class="left">
                    <div class="top">
                        <div class="title">
                            {{ item.title }}
                        </div>
                        <div class="category">
                            <i class="iconfont icon-wenjianjia"></i>
                            <p>{{ item.category }}</p>
                        </div>
                    </div>
                    <div class="content" v-html="item.content"></div>
                    <div class="message">{{ formatDate(item.created_at, 'YYYY-MM-DD') }}</div>
                </div>
                <div class="right">
                    <div class="cover">
                        <img :src="Server_URL + item.cover" />
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
  
<script setup>
    import { formatDate } from '@/utils/formatDate'
    import { Server_URL } from '@/service/request/config'
    import router from '@/router'

    defineProps({
        articleList: {
            type: Array,
            default: () => ([])
        }
    })
  
    const viewPost = (id) => {
      router.push(`/article/${id}`)
    }
  
  </script>
  
<style lang="less" scoped>
.article-model {

    .article {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px;
        padding: 0 15px 0 30px;
        height: 190px;
        box-shadow: 0 4px 14px hsl(355deg 25% 15% / 10%);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            box-shadow: 0 4px 14px hsl(0, 29%, 83%);
            transform: scale(1.01);
            transition: all 0.3s;
        }

        .left {
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 25px;
            // width: 525px;

            .top {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .title {
                    width: 80%;
                    font-size: 24px;
                    font-weight: 800;
                    color: #252933;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .category {
                    display: flex;
                    align-items: center;
                    column-gap: 6px;
                    color: #9a9a9a;
                    font-size: 14px;

                    i {
                        font-size: 12px;
                    }

                    p {
                        margin: 0;
                        width: 32px;
                        height: 16px;
                        line-height: 16px;
                    }
                }
            }

            .content {
                height: 36.8px;
                color: var(--text-color);
                color: #484848;
                font-weight: normal;
                word-break: break-all;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;

                :deep(*) {
                    font-size: 16px;
                    font-weight: inherit;
                    font-style: inherit;
                }

            }

            .message {
                color: #8a919f;
            }
        }

        .right {
            justify-self: flex-end;

            .cover {
                margin-left: 20px;
                width: 250px;
                height: 168px;

                img {
                    width: 250px;
                    height: 168px;
                    border-radius: 8px;
                    object-fit: cover;
                    object-position: center;
                }
            }
        }
    }
}

// 响应式
@media(max-width: 800px) {
    .article-model {
        .article {
            margin: 15px 0;
            height: 160px;

            .left {
                row-gap: 18px;

                .top {
                    .title {
                        font-size: 20px;
                    }
                }
            }

            .right {
                .cover {
                    margin-left: 10px;
                    width: 200px;
                    height: 140px;

                    img {
                        width: 200px;
                        height: 140px;
                    }
                }
            }
        }
    }
}
</style>
  