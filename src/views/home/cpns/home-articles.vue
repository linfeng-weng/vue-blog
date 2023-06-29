<template>
    <div class="home-articles">
        <template v-for="i in 10">
            <div class="article">
                <div class="left">
                    <div class="title">Vue3项目搭建</div>
                    <div class="content">这是一段文字描述。这是一段文字描述。这是一段文字描述。这是一段文字描述。这是一段文字描述。这是一段文字描述。这是一段文字描述。这是一段文字描述。这是一段文字描述。这是一段文字描述。这是一段文字描述。</div>
                    <div class="message">2023-06-05</div>
                </div>
                <div class="right">
                    <div class="cover">
                        <img src="@/assets/img/cover04.jpg">
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
    
</script>

<style lang="less" scoped>
    .home-articles {
        .article {
            display: flex;
            align-items: center;
            margin: 20px;
            padding: 0 15px 0 30px;
            height: 180px;
            box-shadow: 0 4px 14px hsl(355deg 25%  15% / 10%);
            border-radius: 8px;
            .left {
                display: flex;
                flex-direction: column;
                row-gap: 20px;
                .title {
                    font-size: 28px;
                    font-weight: 800;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .content {
                    color: var(--text-color);
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .message {
                    color: #8a919f;
                }
            }
            .right {
                .cover {
                    margin-left: 20px;
                    width: 250px;
                    // border-radius: 8px;
                    img {
                        width: 100%;
                        border-radius: 8px;
                        object-fit: cover;
                        object-position: center;
                    }
                }
            }
        }
    }
</style>