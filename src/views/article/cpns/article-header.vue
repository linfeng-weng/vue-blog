<template>
    <div class="post-header">
        <div class="header-content">
            <h1>Vue3项目结构搭建</h1>
            <p>发布于：<span>2023-06-01</span> &#8194;&#8194; 更新于：<span>2023-06-01</span></p>
            <div class="cover">
                <img src="@/assets/img/cover04.jpg">
            </div>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style lang="less" scoped>
    .post-header {
        margin-bottom: 120px;
        padding-top: 120px;
        height: 500px;
        background-color: var(--container-color);
        color: #fff;
        .header-content {
            display: flex;
            flex-direction: column;
            align-items: center;

            h1 {
                margin: 10px 0;
                font-size: 42px;
            }

            p {
                margin:32px 0;
                color: #fdfdfc;
                
                span {
                    color: #ff9f60;
                }
            }
            .cover {
                height: 420px;

                img {
                    width: 100%;
                    height: 420px;
                    object-fit: cover;
                    object-position: center;
                }
            }
        }
    }
</style>